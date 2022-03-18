TVアニメ「小林さんちのメイドラゴン」のOP映像の一部を再現

最終的なプログラムは
[build.js]()
にあります。

# 作り方
1. OP映像をダウンロードします。
2. 顔が1つのコマはないので、顔が2つのコマと3つのコマと4つのコマを取り出し、同じ位置、大きさにトリミングします。
3. [face.html](https://github.com/8128-33550336/Kobayashi/blob/main/face.html) を使ってひとつ分を取り出します。![download.png](https://github.com/8128-33550336/Kobayashi/blob/main/download.png)
4. トリミングします。![trimed.png](https://github.com/8128-33550336/Kobayashi/blob/main/trimed.png)
5. [AA変換サイト](https://rakko.tools/tools/68/) を使ってAAに変換します。
6. [transparent.html](https://github.com/8128-33550336/Kobayashi/blob/main/transparent.html) を使って透過部分のデータを含めたAAを作ります。
7. [kobayashi.js](https://github.com/8128-33550336/Kobayashi/blob/main/kobayashi.js) の部分に 6. のAAを入力します。
8. [JSFuck](http://www.jsfuck.com/) を使って 7. のプログラムを変換し、[jsfuck.js](https://github.com/8128-33550336/Kobayashi/blob/main/jsfuck.js) に書き込みます。.
9. [AA変換サイト](https://birdwatcheryt.github.io/software/aa/aa.html) の使用文字を` `と`*`をにしてロゴをAAにし、[logo.txt](https://github.com/8128-33550336/Kobayashi/blob/main/logo.txt) に書き込みます。
10. [jsfToAA.js](https://github.com/8128-33550336/Kobayashi/blob/main/jsfToAA.js) を使ってプログラムをロゴにします。余る文字の量を見て、 9. の横の文字数を調整します。
11. 完成です。


# [transparent.html](https://github.com/8128-33550336/Kobayashi/blob/main/transparent.html) の使い方
1. ファイルの中の28行目にAAをペーストします。
2. 透過させたい部分(顔の外)の背景が青の部分にカーソルを置いて、 `z`キーを押します。
3. 透過させたくない部分(顔の内側)の背景が赤の部分にカーソルを置いて、 `z`以外のキーを押します。
4. 終わったらCopy!!を押します。
5. ファイルの中の28行目にクリップボードをペーストします。以降繰り返しです。
6. 変更部分がなくなったら完成です。