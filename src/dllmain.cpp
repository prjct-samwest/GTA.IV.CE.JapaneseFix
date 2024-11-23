#define WIN32_LEAN_AND_MEAN

#include "common.h"

signed int InitLanguageID()
{
    return 0;
}

signed int SwitchtLanguageID()
{
    return 6;
}

std::unique_ptr<ScopedUnprotect::Unprotect> Protect = ScopedUnprotect::UnprotectSectionOrFullModule(GetModuleHandle(nullptr), ".text");

void* getGameLanguage[] =
{
    hook::get_pattern("E8 ? ? 30 00 83 3D ? ? ? ? 00 8B 0D ? ? ? ? 89 0D ? ? ? ? A3"),
    hook::get_pattern("E8 ? ? 2E 00 ? ? 05 75 34 C7 44 ? ? ? ? 8F 3D 8B ? ? 10 89 44"),
    hook::get_pattern("E8 ? ? FF FF 80 3D ? C2 ? ? 00 A3 ? ? ? ? A3 ? ? ? ? C6 05 ? 0C"),
    hook::get_pattern("E8 ? ? FF FF 8B F8 ? ? ? ? 00 00 8B ? ? ? ? 03 00 80 3D ? C2"),
    hook::get_pattern("E8 ? ? FF FF EB 05 A1 ? ? ? ? 80 BE 63 02 00 00 00 C6 86 ? 02 00"),
};

injector::hook_back<void(__cdecl*)(int)> hbsub_7870A0;

void __cdecl sub_7870A0(int a1)
{
    static bool bOnce = false;

    if (!bOnce)
    {
        for (void* pattern : getGameLanguage)
        {
            Memory::InjectHook(pattern, SwitchtLanguageID, PATCH_CALL);
        }
    }

    return hbsub_7870A0.fun(a1);
}

void Init()
{
    for (void* pattern : getGameLanguage) 
    {
        Memory::InjectHook(pattern, InitLanguageID, PATCH_CALL);
    }

    auto pattern = hook::pattern("E8 ? ? ? ? 83 C4 04 8B 8C 24 ? ? ? ? 5F 5E 5D 5B 33 CC E8 ? ? ? ? 81 C4 ? ? ? ? C3");

    if (pattern.size() == 5) 
    {
        hbsub_7870A0.fun = injector::MakeCALL(pattern.count(5).get(1).get<void*>(0), sub_7870A0).get();
    }
    else
    {
        hbsub_7870A0.fun = injector::MakeCALL(hook::get_pattern("E8 ? ? ? ? 83 C4 04 5F 5E 5B 8B 8C 24 ? ? ? ? 33 CC E8 ? ? ? ? 8B E5 5D C3 83 F8 30", 0), sub_7870A0).get();
    }
}

BOOL APIENTRY DllMain(HMODULE hModule, DWORD reason, LPVOID lpReserved) 
{
    if (reason == DLL_PROCESS_ATTACH) 
    {
        CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)Init, 0, 0, 0);
    }

    return TRUE;
}
