---
title: パラメーター
description: TextMesh Creator に搭載されている様々なパラメータと用いて文字メッシュをカスタマイズする方法
---

TextMesh Creator には、テキストメッシュをカスタマイズするための以下のパラメーターがあります。

| Property                | Required | Type                                                     | Description                                          |
| ----------------------- | :------: | -------------------------------------------------------- | ---------------------------------------------------- |
| Strings                 |   Yes    | `string`                                                 | 表示する文字列                                       |
| Rotation X              |    No    | `float`                                                  | テキストメッシュの X 軸回転                          |
| Rotation Y              |    No    | `float`                                                  | テキストメッシュの Y 軸回転                          |
| Rotation Z              |    No    | `float`                                                  | テキストメッシュの Z 軸回転                          |
| Scale X                 |    No    | `float`                                                  | テキストメッシュの X 軸スケール                      |
| Scale Y                 |    No    | `float`                                                  | テキストメッシュの Y 軸スケール                      |
| Scale Z                 |    No    | `float`                                                  | テキストメッシュの Z 軸スケール                      |
| Font                    |   Yes    | `string`                                                 | 使用するフォント（絶対パスで指定する必要があります） |
| Separate By             |    No    | `Enum[Space, Tab, Character, None]`                      | 使用するセパレーター                                 |
| Size                    |    No    | `float`                                                  | 使用するフォントサイズ                               |
| Thickness               |    No    | `float`                                                  | 使用するフォントの太さ                               |
| Horizontal Alignment    |    No    | `Enum[Left, Center, Right, Justify, Flush]`              | 水平方向整列                                         |
| Vertical Alignment      |    No    | `Enum[TopBaseline, Top, Center, Bottom, BottomBaseline]` | 垂直方向整列                                         |
| Character Spacing       |    No    | `float`                                                  | 文字間隔                                             |
| Word Spacing            |    No    | `float`                                                  | 単語間隔                                             |
| ~~Use Blendshape~~      |    No    | ~~`bool`~~                                               | ~~ブレンドシェイプを使用して文字列を表示~~           |
| Use Decimate            |    No    | `bool`                                                   | デシメートモディファイアを使用して頂点を削減         |
| Decimate Ratio          |    No    | `float`                                                  | デシメートモディファイアの比率                       |
| Separate by Loose Parts |    No    | `bool`                                                   | "Loose Parts" で分離                                 |
| Outlined                |    No    | `bool`                                                   | アウトライン文字として生成                           |
| Outline Thickness       |    No    | `float`                                                  | アウトラインの太さ                                   |
| Outline Threshold       |    No    | `float`                                                  | アウトラインのしきい値                               |
| Center to Origin        |    No    | `bool`                                                   | 原点にセンターを合わせる                             |
| Unique                  |    No    | `bool`                                                   | 出力ファイルを一意にフィルタリング                   |
| Enable Preview Mode     |    No    | `bool`                                                   | プレビューモードを有効にする                         |
| Enable Legacy Preview   |    No    | `bool`                                                   | レガシープレビューモードを有効にする                 |
| Increment From          |    No    | `int`                                                    | インクリメントを開始する数                           |
| Export Directory        |   Yes    | `string`                                                 | テキストメッシュをエクスポートするディレクトリ       |

## "Separate By" オプションについて

"Separate By" プロパティは、指定されたセパレーターによってテキストメッシュを分割するために使用されます。
たとえば、"Separate By" を "Space" に設定すると、テキストメッシュはスペースで分割されます。
"None" は、テキストメッシュが分割されないことを意味します（すべての文字列が単一のメッシュになります）。

## "Separate by Loose Parts" オプションについて

"Separate by Loose Parts" プロパティは、テキストメッシュを "Loose Parts" で分割するために使用されます。
"Loose Parts" とは、テキストメッシュが指定された **スペース** で分割されることを意味します。
たとえば、"Separate by Loose Parts" を以下のテキストメッシュに適用すると、テキストメッシュは以下の図のように生成されます。

- Strings: `例`: `ｲ`, `歹`, `リ` (`リ` はさらに左右に分割されます)

この機能は、Unity、Unreal Engine、その他のゲームエンジンでのムービー作成に役立ちます。サンプルとして、下記動画があります：

- https://youtu.be/Qou76O_Rys0?t=138

## 生成例

### オプション無し

![](https://images.natsuneko.com/8ad3514557c298d43c7c1b209edd49e440d54275278c1c43b0972fa4cddbd17f.png)

### "Separate by Loose Parts" オン

![](https://images.natsuneko.com/1b39f05e22109186c62dafa858b4b4b852b286a8390e371c63183fe6ccc8f627.png)

「い」、「う」、「え」、および「お」が分離しているのが分かる

### Outlined オン

![](https://images.natsuneko.com/667f6f495b6f3edcf2fb88711f8ca0f1bce7367e8a3bc5621e5a29846a7360da.png)

文字がアウトライン形式になっているのが分かる
