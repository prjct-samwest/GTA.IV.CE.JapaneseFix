# 【PC版】Grand Theft Auto IV: The Complete EditionのDLC2作品を日本語でプレイする

執筆：2024.11.24

![](./img/i_ttl_01.jpg?raw=true)<br><br>

## はじめに
2024年現在、Steamで購入できるPC版『グランド・セフト・オートIV：コンプリート・エディション』には、GTAIV本編に加えて2つのDLC『ザ・ロスト・アンド・ダムド』（通称TLaD）、『バラッド・オブ・ゲイ・トニー』（通称TBoGT）が収録されています。

**しかし、このDLC2作品は日本語に対応しておらず、プレイするにはSteamの言語設定を英語にしなければなりません。** 当然中身も英語なので、敬遠してプレイを諦める方も多いかと思われます。

...それではあまりにももったいないので、DLC2作品を日本語でプレイできるようMODを作りました。
<br><br>

## GTAIV.CE.JapaneseFix v2.0.0 の特徴
- GTAIV最新バージョンで動作（従来のようにダウングレードする必要はありません）
- Steamの言語設定は日本語のままでOK（Rockstar Launcherも日本語のままで起動できる）
- リリースノート等の補足情報はこちらをご覧ください。
<br>

## 必要なもの
- 有志による日本語テキストデータ（日本語化GXT141221）　[日本語化GXT141221.zip](https://ux.getuploader.com/GTA4J/download/169)
- Ultimate-ASI-Loader 　[Ultimate-ASI-Loader.zip](https://github.com/ThirteenAG/Ultimate-ASI-Loader/releases/latest/download/Ultimate-ASI-Loader.zip)
- GTAIV.CE.JapaneseFix v2.0.0　[GTAIV.CE.JapaneseFix.zip](https://github.com/prjct-samwest/GTAIV.CE.JapaneseFix/releases/download/v2.0.0/GTAIV.CE.JapaneseFix.zip)
<br>

## 手順
### 1.導入前の確認
- ゲームが最新バージョンであり、問題なく起動できるか確認してください。
- Steamの言語設定が日本語以外になっている場合は日本語に戻しておいてください。
- 上記「必要なもの」からzipファイルを3つダウンロードしてください。
> [!WARNING]
> 当MODは一部ゲームファイルを上書きします。すでに他のMODを使用している場合は競合に注意してください。<br>詳細は「[補足情報](NOTES.md)」をご確認ください。

<br>

### 2.有志による日本語テキストデータ
ダウンロードした「日本語化GXT141221」内の【TBoGT】,【TLAD】に入っている「american.gxt」を **「japanese.gxt」にリネーム** し、
それぞれゲームディレクトリ内の対応する場所に貼り付けます。他の.gxtファイルが入っている場所です。
 
- 【TBoGT】```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\TBoGT\common\text```
- 【TLAD】 ```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\TLAD\common\text```   
  ※場所はインストール環境によって変わります

![](./img/i_cap_01.png?raw=true)<br><br>
  
### 3.Ultimate-ASI-Loader
ダウンロードした「Ultimate-ASI-Loader」内の「dinput8.dll」をゲームディレクトリ直下に貼り付けます。「GTAIV.exe」が置いてある場所です。
- ```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\```  
  ※場所はインストール環境によって変わります<br><br>
  
    
### 4.GTAIV.CE.JapaneseFix
同様に、ダウンロードした「GTAIV.CE.JapaneseFix」内の更に「GTAIV.CE.JapaneseFix」にある
- 「common」ディレクトリ
- 「TBoGT」ディレクトリ
- 「TLAD」ディレクトリ
- 「GTAIV.CE.JapaneseFix.asi」  

の4つをゲームディレクトリ直下に貼り付けます。「GTAIV.exe」が置いてある場所です。


- ```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\```  
  ※場所はインストール環境によって変わります

![](./img/i_cap_02.png?raw=true)

> [!NOTE]
> FusionFixを導入している場合は、「― FusionFix 上書き用 ―」にある「update」ディレクトリも一緒にゲームディレクトリ直下へ貼り付けてください。
> FusionFix併用に関する情報と詳細については、「[補足情報](NOTES.md)」をご覧ください。


<br><br>

### 5.ゲームを起動し、日本語に設定する
ゲームを起動すると英語になっているので、以下の画像を参考に「Options」→「Display」から「Switch Language」を数回押して日本語に切り替えてください。併せて、字幕も「ON」になっているか確認しておきましょう。

![](./img/i_setting.gif?raw=true)<br><br>
    

### 6.ストーリーを開始し、日本語になっていたら成功です。
次回以降は日本語設定は必要ありません。※最初の警告文は英語のままです。

<img src="./img/i_ss_01.jpg?raw=true" width="400">  <img src="./img/i_ss_02.jpg?raw=true" width="400"><br><br>

## 免責事項
- 当MODはWindows11, Steam版での動作を確認しています。旧バージョンやRockstar Launcher版では正しく機能するか分かりません。
- 当MODはあくまで【非公式の改造プログラム】であるため、今後アップデートによって機能しなくなる可能性があります。
- 当MODを利用した事によるいかなる損害も作者は一切の責任を負いません。自己の責任の上でご利用ください。
- 当MODにおけるリリースノート等の情報は「[補足情報](NOTES.md)」をご覧ください。


