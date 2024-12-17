const fontGenerator = ((f) => {

    "use strict";

    const data = {}, $ = {};

    $.getDefaultChars = () => {

        return " !\"#$%&'()*+，-．/0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~▯©◆®×àáçèéñúü－―’”…◇Ⅳ→≪≫Ⓒ◎☆　、。々「」『』ぁあいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろわをんァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロワンヴヵヶ・ー一丁七万丈三上下不与且世丘両並中串丸主久乏乗乞乱乳乾了予争事二互五井些亡交享亭人仇今介仏仕他付代令以仮仰仲件任企伏休会伝伯伴伸似但位低住佐体何余作併使例侍供依価侮侵侶便係促俄俗保信修俳倉個倍倒候借値倫偉偏停健偲側偵偶偽傍傑傘備催傭傲債傷傾僅働像僕僚僧儀億償優儲元兄充兆先光克免児党入全八公六共兵具典兼内円再冒冗写冠冤冴冷凄凍凡処凧凪凱凶出刀刃分切刑列初判別利到制刷券刹刺刻剃則削前剖剣剤剥副剰割創劇力功加劣助努励労効劾勃勇勉動勘務勝募勢勤勧勲勿匂包化北匠匹区医匿十千午半卑卒協南単博占印危即却卵厄厚原厭厳去参又及友双反収叔取受口古句叩只叫召可台史右叶号司各合吉吊同名吐向君吠否含吸吹呂呆呈告呑呟周呪味呵呼命和咎咥咲咳哀品員哲唆唇唖唯唱唾商問啓善喉喋喚喜喝喧喩喪喫喰営嗅嗜嘆嘔嘘嘩噂噛器噴嚇囁囚四回因団困囲図固国圏園土圧在地坂均坊垂型埋城域埠執培基堀堂堅堕堪報場堵塀塊塗塞填塵塹境墓増墜壁壇壊壌壕士壮声売変夏夕外多夜夢大天太夫央失奇奈奉奏契套奥奨奪奮女奴好如妄妊妖妙妥妨妬妹妻姉始姓委姜姦姫姿威娘娠娯娼婆婚婦婿媒媚嫁嫉嫌嬉嬢子孔孕字存孝季孤学孫宅宇守安完宗官宙定宛宝実客宣室宮害宴宵家容宿寂寄密富寒寛寝察寡寧審寮寵寸対寿封専射将尊尋導小少尖尚就尻尼尽尾尿局屁居屈届屋展属層履山岐岩岬岸峠峰島崇崎崖崩嵐川州巡巣工左巧巨差己巷巻市布希帝師席帯帰帳常帽幅幕幣干平年幸幹幻幼幽幾庁広床序底店府度座庫庭康廃廉廊延廷建弁弄弊式弓引弟弧弱張強弾当形彩彫彰影彷役彼往征待徊律後徐徒従得徘御徨復微徳徴徹心必忌忍志忘忙応忠快念怒怖思怠急性怨怪怯恋恍恐恥恨恩息恰恵悔悟患悩悪悲悴悼情惑惚惜惨惰想惹愁愉意愚愛感慈態慌慎慕慢慣慮慰憂憎憐憑憔憧憩憫憲憶憾懐懲懸成我戒或威戦戯戸戻房所扁扇扉手才打払扱扶批承技抉把抑投抗折抜択披抱抵抹押抽担拍拐拒拓拗拘招拝拠拡括拭拳拶拷拾持指挑挙挟挨挫振挽挿捉捕捜捧捨据捲掃授掌排掘掛掟採探接控推措掲掴掻揃揄揉描提揚換握揮援揶揺損搬携搾摂摘摺撃撒撤撫撮撲憾擁操擦攫支改攻放政故敏救敗教敢散敬数整敵敷文斉斐料斜斡断新方施旅旋族旗既日旦旧旨早旬旺昇明昏易昔星映春昧昨是昼時晒晩普景晴晶暇暑暖暗暮暴曇曖曜曲更書曾替最月有服朗望朝期朦朧木未末本札朴机朽材村束条来杯東板析枕林枚果枝枠枯架柄染柔柩柱柵査栄校株核根格栽桁桃案桟桶梅械棄棍棒棚棟棺椅植検業楯極楽概榴構槌様槽標模権横樽橋機欄欠次欧欲欺歌歓止正武歩歪歯歳歴死殆殊残殖殲殴段殺殻殿殻母毎毒比毛毯氏民気水氷永氾汁求汗汚汰汲決沈沌沖沙没沢河沸油治沼沿況泄泉泊法泡波泣泥注泰泳洒洗洞洩活派流浄浅浜浣浪浮浴海浸消涙涛涜涯液涼淀淋淘淫深混淹添清済渉渋渓減渡渦温測港湖湧湯湾湿満源準溜溢溶溺滅滑滞滴漁漂漏演漕漠漫漬潔潜潤潮潰激濃濡濫濯瀾火灯灰灼災炎炒灸炭点為烈焉無焦然焼煉煙照煩煮煽熊熟熱熾燃燎燥爆爪爵父爽片版牙牛牢牧物牲特犠犬犯状狂狐狙狡狩独狭狼猛猥猫献猾猿獄獣獲玄率玉王珍班現球理璧環瓦瓶甘生産甥用田由甲申男町画界畑留略番異疎疑疫疲疾病症痒痕痛痢痩痴痺瘍療癇癌癒癖癪発登白百的皆皇皮雛皿益盗盛監盤目盲直相盾省眉看真眠眺眼着睡督睨睾瞑瞬瞭瞳矛矢知短矯石砂研砕砦砲破硝硬碑確磨礁礎礫示礼社祈祉祖祝神票祭禁禍福秀私秋科秒秘秩称移稀程税稚種稲稼稿積穏穣穫穴究空穿突窃窒窓窟窪窮立竜章童端競竿笑笛符第筆等筋筒答策箇箋算管箱節範築簡簿籍寵米粉粋粗粘粧精糖糞糸系糾紀約紅紆紊紋納紐純紙級紛素索紫細紳紹終組絆経結絞絡給絨統絵絶継続維網綻綿緊総緑緒線締編緩緯練縁縄縛縦縫縮績繁繊繋繍織繰缶罪置罰署罵羅羊美群羨義羽習翼老考者耐耕耗耳耽聖聞聡聴職肉肋肌肛肝股肢肥肩肪肯育肺胃胆背胞胴胸能脂脅脆脇脈脚脱脳腎腐腕腫腰腸腹腺膚膝膣膨臆臓臨自臭至致興舌舎舐舗舞航般舵舶舷船艇艦良色芝芯花芳芸芽苛若苦英茂茎茶草荒荘荷莫菌菓菜華萎落葉著葛葬蒙蒸蓄蔑蔓蔵蕩薄薦薬藤蘇虎虐虚虜虫虹蚊蛍蛙蛮蜂蝕融血衆行術街衛衝衡衣表衰袈袋被裁裂装裏裕補裟裸製裾複褒褻襟襲西要覆覇見規視覗覚覧親観角解触言計訊討訓託記訛訟訣訪設許訳訴診証詐評詞詠試詩詫詮詰話該詳誇誉誌認誓誕誘語誠誤説読誰課誹調談請論諦諸諾謀謎謗謙講謝謳謹識警議譲護讐谷豊豚象豪豹貌貞負財貢貧貨販貪貫責貯貰貴貶買貸費貼貿賀賂賃賄資賊賑賛賜賞賠賢質賭購贅贈赤赦走起超越趣足距跡跨路跳践踊踏蹴躁躇躊躍身車軌軍軒軟転軽較載輝輩輪輸轄轢辛辞辣辱農辺込辿迂迅迎近返迫述迷追退送逃逆透途這通逝逞速造連逮週進逸遂遅遇遊運過道達違遙遠遣適遭遮遵選遺避還那邦邪邸郊郎部郵郷都鄙酌配酒酔酬酷酸醍醐醒醜醸釈重野量金釘釜針釣鈍鉄鉛鉱銀銃銅銘銭鋒鋭鋸鋼錆錠錬錯録鍋鍛鍵鎖鎧鎮鏡鐘鑑長門閉開間関閥閲闇闘防阻阿陀降限院陣除陥陪陰陳陶陸険陽隅隈隊階随隔隙際障隠隣隷雀雄雅集雇雑離難雨雪雰雲雷電需震霊霞霧露霹靂青静非面革靴鞄鞍鞭韓音韻響頂頃項順須預頑頓領頬頭頷頻頼題額顎顔願類顧風飛食飢飯飲飼飽飾餃養餐餓館首香馬馳馴駄駅駆駐騎騒験騙騰驕驚骨骸髄高髪欝鬼魂魅魔魚鮫鮮鯨鳥鳩鳴鵜鶏麗麦麻黄黒黙鼓鼻齢／～";

    };

    $.getDefaultMainChars = () => {

        return "一万丈三上下不与世両並中丸主久乏乗乞乱乳乾了予争事二互井亡交人今介仏仕他付代令以仮仰仲件任企伏休会伝伴伸似位低住体何余作使例供依価侮侵侶便係促保信修俳倉個倒候借値偉停健側偶偽備催傲傷傾働像僕僚僧儀億償優儲元兄兆先光免児入全公共兵具典兼内円再冒冗写冷凄凍処凧凪出刀刃分切刑列初判別利到制券刹刺刻剃則削前剣剤剥副剰割創劇力功加劣助励労効勃勇動勘務勝募勢勤勧勲勿匂包化北匹区医十千午半協南単博占印危即却厄原厳去参及友双反収取受口古句叩叫召可台史右号各合吊同名吐向君否含吸吹呂告周呪味呼命和咎品員唆唇唖唯商問善喉喋喜喝喰営嘆嘘噂噛器囁回因団困囲図固国園土圧在地坂均坊垂型埋域埠執基堀堂堕堪報場塀塗塞塵境増墜壁壊士壮声売変夕外多夜夢大天太夫央失奇奈奉契奥奨奪奮女奴好如妄妖妙妨妬妹妻姉始姓委姜姦姿威娘娯娼婚婦嫌嬉嬢子字存孤学孫宅宇守安完宗官宙定宝実客宣室宮害家容宿寂寄密富寛寝察審寮寵対封専射将導小少尻尼尽尾尿局屁居屈届屋展属層履山峰島崎崩嵐川州巡巣工左巨差己巷巻市布希師席帯帰帳常帽幅幕平年幸幼庁広床底店度座庫康廃廉延建弁式弓引弟弧弱張強弾当形彩影役彼待律後徐徒従得御復微徳徴徹心必忌忍忘忙応快念怒怖思急性怪怯恋恍恐恥恩息恰恵悔悟患悪悲情惑惚惨想惹愁愉意愚愛感慈態慢慣慮慰憂憎憧憩懐懸成我或戦戯戻房所扇扉手才打払扱批承技抑投抗折抜択抱抵抹押担拍拐拒拓拘招拝拠拡拭拳拷拾持指挑挙挟挫振挿捕捜捧捨据捲掃授排掘掛採探接控推掲掴掻揃描提揚換握援揺損携搾摂撃撤撫撮撲操支改攻放政故敏救敗教散敬数整敵文斉斐料断新方施旅族旗日旦旨早昇明易昔星映春昧昨是昼時晩普景晴晶暇暑暖暗暮暴曇曜曲更書替最月有服望朝期木未末本札机材村束条来杯東板析枕枚果枝架柄染柔査栄校株核根格案桟梅械棄棒椅植検業極楽概榴構様槽標模権横橋機欝欠次欧欲欺歌歓止正武歩歪歯歳歴死殊残殖殴段殺殿母毎毒比毛氏民気水氷永求汗汚汰決沈沙没沢河油治沿況泊法泡波泣泥注泳洒洗活派流浄浣浪浮浴海浸消液淀淫深混添清済渉渋減渡渦温測港湖湯湾湿満源準溜溢溶溺滅滑滞滴漂演漠漬潔潜潤潮激濃濡濯火灯灸炎炭点為烈無焦然焼煙照煩熊熟熱燃燎爆父爽片版牙牛物牲特犠犬犯状狂狙狩独狭狼猫献猿獄獣獲玄率王現球理環瓶甘生産用田由甲申男画界留略番異疑疫疲疾病症痛痴痺療発登白百的皆皇皮皿益盗盛監盤目直相看真眠眺眼着睡瞑瞬瞭矢知短石砂研砕砲破硬確磨礎示礼社祈祖祝神票祭禁福私秋科秒秘称移程税種稲稼稿積穏穣穴究空突窃窓窟窪窮立章童端競笑笛第筆等筋筒答策箇算管箱節範築簡米粉粋粧精糖糞糸系紀約納紐純紙級紛素索紫細紳紹終組経結絞絡給統絵絶継続維網緊総緑緒線締編練縁縄縦縮績繊繋繍織繰罪置罰署羅美群羨義羽習老考者耐耕耳聖聞聴職肉肌肛股肥肩肪育胃背胸能脂脅脆脇脈脱脳腐腕腰腸腹腺膚膨臓自臭至致興舌舎舐舞航般船艇艦良色芯花芳芸芽苛若苦英茂茶草荒荘荷莫菜華落葉葬蒸蔓蔵薄薦薬虐虚虜虫蚊蛮蜂融血衆行術街衝衣表袋被裁裂装裏裕補裸製裾複襟襲西要覆覇見規視覚覧親観角解触言計訊討訓託記訟訪設許訳訴証詐評詞試詮詰話詳誇誉誌認誓誕誘語誤説読誰調談請論諸諾謎謙謝謹識警議護讐豊豚象豪豹貌貞負財貢貧貨販貪責貰貴買貸費貼貿賂賃賄資賛賜賞賢質賭購贅贈赤赦走起超越趣足距跡跨路跳踊踏蹴躍身車軌軍軟転軽載輝輩輪輸轄轢辛辞辱農辺込辿迎近返迫述迷追退送逃逆透途通逞速造連逮週進逸遂遅遇遊運過道達違遙遠遣適遭遮選遺避還那邪邸郊郎部郵郷都鄙配酒酔酬酷酸醍醐重野量金釘針釣鉄鉛鉱銀銃銅銘銭鋭鋼錆錯録鍛鎖鏡長門閉開間関閥閲闇闘防陀降限院陣除陥陪陰陸険隊階随隔際障隠隣隷雄集雇雑離難雨雪雰電需震霧露青静非面革靴音響頃項順須預領頭頼題額顎顔願類顧風飛食飢飯飲飽飾養餐館首香馬馴駄駅駆駐騎騒験騙騰驚骨髄高髪鬼魂魅魔鮮鯨鳥鳴鶏麻黄黒黙齢／～";

    };

    $.getCommonChars = () => {

        return $.getDefaultChars().slice(0, 290);

    };

    $.getImageChars = () => {

        const list = new Map();

        list.set("“", { path : "FontGenerator/img/quote_open.png", x : 0, y : 0 });
        list.set("♪", { path : "FontGenerator/img/sung.png", x : 0, y : 0 });

        return list;

    };

    $.getTextValue = (txt, mainOnly = false) => {

        if(mainOnly)
        {
            txt = txt.replace(/\[#[0-9a-z_]{8}:.*?$\s+^.*?$/gims, "");
        }

        txt = txt.replace(/[[{].*?$/gims, "");
        txt = txt.replace(/[\n\r]/gims, "");
        txt = [...new Set(txt)].sort().join("");
        txt = txt.replace(new RegExp("[" + $.getCommonChars() + ".,-\\\\" + "]", "g"), "");

        return txt;

    };

    $.getTextFile = () => {

        const target = document.querySelectorAll(".inputText");

        data.input = {};
        f.generate.disabled = true;
        f.success.value = 0;

        for (const elm of target)
        {
            const type = elm.dataset.type;
            const stat = elm.nextSibling;

            $.requestFile(type, stat);
        }

    };

    $.requestFile = (type, stat) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', type + '.txt', true);
        xhr.send();

        stat.innerText = "読み込み中";

        xhr.onload = () => {
            if (xhr.status === 200)
            {
                stat.innerText = "読み込み完了";
                f.success.value++;
                data.input[type] = xhr.responseText;

                if(f.success.value === "3")
                {
                    f.generate.disabled = false;
                }
            }
            else
            {
                stat.innerText = "読み込みエラー";
            }
        };

    };

    $.removeChars = (target, source) => {

        const regex = new RegExp("[" + source + "]" , "g");

        return target.replace(regex, "");

    };

    $.generate = () => {

        data.output = {};

        $.createIV();
        $.createEFLC();
        $.output("IV");
        $.output("EFLC");

    };

    $.createIV = () => {

        if(f.default[0].checked)
        {
            data.output.IV = $.getDefaultChars();
            data.output.IV_MAIN = $.getDefaultMainChars();
            data.output.IV_LOG = "既存のフォントテーブルを出力しています。\nこのテーブルには4文字の重複があります。（威, 憾, 殻, 寵）\n\nこのデータを基にEFLCのテーブルを生成します。→→";
        }
        else
        {
            data.output.IV = $.getCommonChars() + $.getTextValue(data.input.IV);
            data.output.IV_MAIN = $.getTextValue(data.input.IV, true);
            data.output.IV_LOG = "table_IV.txtから新たにフォントテーブルを生成しました。\n\nこのデータを基にEFLCのテーブルを生成します。→→";

        }

    };

    $.createEFLC = () => {

        let result = "";
        let log = "";
        let insetChars;

        const eflcAll = $.getTextValue(data.input.TBoGT + data.input.TLAD);
        const addList = $.removeChars(eflcAll, data.output.IV);
        const deleteList = $.removeChars(data.output.IV, $.getCommonChars() + eflcAll + data.output.IV_MAIN + f.safetyChar.value + ".,-\\\\");

        insetChars = addList;

        log += "置き換えた文字\n\n"

        data.output.IV.split("").forEach((char) => {

            if(insetChars.length && deleteList.includes(char))
            {
                log += `${char} -> ${insetChars[0]}\n`;
                result += insetChars[0];
                insetChars = insetChars.slice(1);
            }
            else
            {
                result += char;
            }

        });

        data.output.EFLC = result;
        data.output.EFLC_LOG = log;

    };

    $.output = (game) => {

        $.outputTable(game);
        $.outputMap(game);
        $.outputCSV(game);
        $.outputLog(game);

    };

    $.outputTable = (game) => {

        let result = "";
        const tableChars = data.output[game].slice(96);

        for (const i in tableChars)
        {
            result += tableChars.charCodeAt(i).toString(16).padStart(4,0).toUpperCase();
            result += "=";
            result += (parseInt(i)+128).toString(16).padStart(4,0).toUpperCase();
            result += "\n";
        }

        f["table_" + game].value = result;

    };

    $.outputMap = (game) => {

        const chars = data.output[game].slice(121);
        const imageChars = $.getImageChars();
        const canvas = document.getElementById("map_" + game);
        const ctx = canvas.getContext("2d");

        const images = new Map();
        images.set("common", { path : "FontGenerator/img/common.png", x : 0, y : 0 });

        ctx.clearRect(0, 0, 2048, 2048);
        ctx.fillStyle = "#fff";
        ctx.font = "36px Noto Sans JP ExtraBold";

        for(let i=0; i<chars.length; i++)
        {
            const num = 121 + i;
            const char = chars[i];

            const x = (num%49*41) + 2;
            const y = (Math.floor(num/49)*41 +41) -7;

            if(imageChars.has(char))
            {
                const data = imageChars.get(char);

                images.set(char, {path : data.path, x : (data.x + (num%49*41)), y : (data.y + (Math.floor(num/49)*41))});
            }
            else
            {
                ctx.fillText(chars[i], x, y);
            }
        }

        images.forEach((data) => {

            const image = new Image();

            image.src = data.path;

            image.onload = () => {
                ctx.drawImage(image, data.x, data.y);
            }

        });

    };

    $.outputCSV = (game) => {

        let result = data.output[game];

        result = result.split("").join();
        result = result.replace(/((.,){48}.)(,)/g, "$1\n");

        f["csv_" + game].value = result;

    };

    $.outputLog = (game) => {

        f["log_" + game].value = data.output[game + "_LOG"];

    };

    document.addEventListener("DOMContentLoaded", $.getTextFile);
    f.reload.addEventListener("click", $.getTextFile);
    f.generate.addEventListener("click", $.generate);

    return 0;

})(document.forms.fontGenerator);