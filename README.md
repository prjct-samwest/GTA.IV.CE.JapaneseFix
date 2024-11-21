> [!CAUTION]
> このMODは不安定で、環境によっては作動しない場合があります。  
> 近々動作を安定させた **ver2.0.0** を上げる予定です。少々お待ちください。  
> 執筆：2024.11.21

# GTA4 & EFLC 日本語化手順（Steam版 ~~最新ver1.2.0.43~~）
執筆：2021.12.24

![](https://github.com/prjct-samwest/GTA.IV.CE.JapaneseFix/blob/images/sc1.jpg)
Steam版GTAIV（Complete Edition）のDLC2作品を日本語でプレイできるようにするASIファイルを作成しました。  

## 特長
- ダウングレード（→1.0.7.0）する必要なし
- Steam設定で言語を英語に変える必要なし（故にRockstar Launcherも日本語のまま
- ファイルを追加するだけなので導入が簡単（問題が起きてもファイルを消すだけでOK

## 必要なファイル
- 日本語テキストデータ（日本語化GXT141221）　[日本語化GXT141221.zip](https://ux.getuploader.com/GTA4J/download/169)
- Ultimate-ASI-Loader  v4.66 　[Ultimate-ASI-Loader.zip](https://github.com/ThirteenAG/Ultimate-ASI-Loader/releases)
- GTA.IV.CE.JapaneseFix v1.0.0　[GTAIV.CE.JapaneseFix.zip](https://github.com/prjct-samwest/GTA.IV.CE.JapaneseFix/releases)

## 手順
### 1.GTAIV~~最新ver（1.2.0.43）~~
- ゲームをアップデートし、最新バージョンになっていることを確認してください。
- 最新バージョンでは、一部MODが使用できません。MODを使用している場合は注意してください。
- **アップデート完了後は、TLADもしくはTBOGTを起動しプレイできることを確認してください。**

### 2.日本語テキストデータ
ダウンロードした「日本語化GXT141221」内の【TBoGT】、【TLAD】に入っている「american.gxt」を **「japanese.gxt」にリネーム** し、
それぞれゲームディレクトリ内の対応する場所に貼り付けます。他の.gxtファイルが入っている場所です。
 
- 【TBoGT】```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\TBoGT\common\text```
- 【TLAD】 ```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\TLAD\common\text```   
  ※場所はインストール環境によって変わります

![](https://github.com/prjct-samwest/GTA.IV.CE.JapaneseFix/blob/images/sc3.png)
  
### 3.Ultimate-ASI-Loader
ダウンロードした「Ultimate-ASI-Loader」内の「dinput8.dll」をゲームディレクトリ直下に貼り付けます。「GTAIV.exe」が置いてある場所です。既に導入している場合は飛ばしてください。
- ```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\```  
  ※場所はインストール環境によって変わります
  
    
### 4.GTA.IV.CE.JapaneseFix
同様に、ダウンロードした「GTA.IV.CE.JapaneseFix」内の「GTA.IV.CE.JapaneseFix.asi」をゲームディレクトリ直下に貼り付けます。「GTAIV.exe」が置いてある場所です。
- ```C:\Program Files (x86)\Steam\steamapps\common\Grand Theft Auto IV\GTAIV\```  
  ※場所はインストール環境によって変わります
    
![](https://github.com/prjct-samwest/GTA.IV.CE.JapaneseFix/blob/images/sc5.png)  
    
### 5.ゲームを起動し、日本語になっていたら完了です。
DLCの2作品はデフォルトで字幕がオフになっていることがあるかもなので、  
忘れずに「オプション」→「Display」から字幕をオンにしておきましょう。  
※オープニング画面飛ばし等のMODを入れていると日本語表示になるまで数秒かかる場合があります。

<img src="https://github.com/prjct-samwest/GTA.IV.CE.JapaneseFix/blob/images/sc2.jpg" width="400">  <img src="https://github.com/prjct-samwest/GTA.IV.CE.JapaneseFix/blob/images/sc4.jpg" width="400">


## 最後に
- Windows10、Steam版~~最新（ver1.2.0.43）~~での動作を確認しています。旧バージョンやRockstar Launcher版で機能するかどうかは分かり兼ねます。
- これはあくまで非公式の【MOD】であるため、今後アップデートによって機能しなくなる可能性があります。
- 本MODを利用した事によるいかなる損害も作者は一切の責任を負いません。自己の責任の上でご利用ください。


