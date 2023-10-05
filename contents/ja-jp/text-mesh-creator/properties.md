---
title: プロパティ
shortTitle: プロパティ
intro:
versions:
  - latest
---

TextMesh Creator では、テキストメッシュをカスタマイズするためのプロパティが用意されています。

| プロパティ              | 必須項目 | 型                                                       | 説明                                                   |
| ----------------------- | :------: | -------------------------------------------------------- | ------------------------------------------------------ |
| Strings                 |   はい   | `string`                                                 | 出力する文字列                                         |
| Rotation X              |  いいえ  | `float`                                                  | X 軸回転方向                                           |
| Rotation Y              |  いいえ  | `float`                                                  | Y 軸回転方向                                           |
| Rotation Z              |  いいえ  | `float`                                                  | Z 軸回転方向                                           |
| Scale X                 |  いいえ  | `float`                                                  | X 軸スケール                                           |
| Scale Y                 |  いいえ  | `float`                                                  | Y 軸スケール                                           |
| Scale Z                 |  いいえ  | `float`                                                  | Z 軸スケール                                           |
| Font                    |   はい   | `string`                                                 | メッシュ生成に使用するフォント                         |
| Separate By             |  いいえ  | `Enum[Space, Tab, Character, None]`                      | 文字列の分割方法                                       |
| Size                    |  いいえ  | `float`                                                  | フォントサイズ                                         |
| Thickness               |  いいえ  | `float`                                                  | フォントの太さ                                         |
| Horizontal Alignment    |  いいえ  | `Enum[Left, Center, Right, Justify, Flush]`              | 水平方向位置                                           |
| Vertical Alignment      |  いいえ  | `Enum[TopBaseline, Top, Center, Bottom, BottomBaseline]` | 垂直方向位置                                           |
| Character Spacing       |  いいえ  | `float`                                                  | 文字間スペース                                         |
| Word Spacing            |  いいえ  | `float`                                                  | 単語間スペース                                         |
| ~~Use Blendshape~~      |  いいえ  | ~~`bool`~~                                               | ~~Use blendshape to display strings~~                  |
| Use Decimate            |  いいえ  | `bool`                                                   | 頂点削減のための Decimate モディファイアを使うかどうか |
| Decimate Ratio          |  いいえ  | `float`                                                  | Decimate モディファイアで適用する削減割合              |
| Separate by Loose Parts |  いいえ  | `bool`                                                   | 空間的に離れているパーツを分割するかどうか             |
| Outlined                |  いいえ  | `bool`                                                   | アウトラインとして生成するかどうか                     |
| Outline Thickness       |  いいえ  | `float`                                                  | アウトラインの太さ                                     |
| Outline Threshold       |  いいえ  | `float`                                                  | アウトラインの閾値                                     |
| Center to Origin        |  いいえ  | `bool`                                                   | Center to origin                                       |
| Unique                  |  いいえ  | `bool`                                                   | 出力するファイルをユニークにする                       |
| Enable Preview Mode     |  いいえ  | `bool`                                                   | プレビューモードを有効にする                           |
| Enable Legacy Preview   |  いいえ  | `bool`                                                   | プレビューモード (旧) を有効にする                     |
| Increment From          |  いいえ  | `int`                                                    | 出力するファイルの採番開始番号                         |
| Export Directory        |   はい   | `string`                                                 | 出力先ディレクトリ                                     |

## "Separate By" について

"Separate By" プロパティは、指定した区切り文字でテキストメッシュを分割するために使用されます。  
例えば、"Separate By" を "Space" に設定すると、テキストメッシュはスペースで分割されます。  
"None" は、テキストメッシュが分割されないことを意味します（すべての文字列が単一のメッシュになります）。

## "Separate by Loose Parts" について

"Separate by Loose Parts" プロパティは、空間的に離れているパーツを分割するために使用されます。  
"Loose Parts" とは、指定した **空間** でテキストメッシュが分割されることを意味します。  
例えば、次のテキストメッシュに "Separate by Loose Parts" を適用すると、次の図に示すようにテキストメッシュが生成されます。

- Strings: `例`, To: `ｲ`, `歹`, `リ` (`リ` は左右のパーツに分割されます)

これは、Unity や Unreal Engine、その他のゲームエンジンで次のような動画を作成するのに便利です。

- https://youtu.be/Qou76O_Rys0?t=138
