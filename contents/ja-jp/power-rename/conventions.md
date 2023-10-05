---
title: 対応している命名規則
shortTitle: 命名規則
versions:
  - latest
---

Power Rename はデフォルトで以下の命名規則をサポートしています。  
独自の命名規則を追加したい場合は、[extensions](./extensions) ページを参照してください。

## Append Prefix

指定した文字列を名前の先頭に追加します。

| Key      | Type     | Example | Description    |
| -------- | -------- | ------- | -------------- |
| `Prefix` | `string` | `New`   | 追加する文字列 |

Example:

| Prefix | Before | After     |
| ------ | ------ | --------- |
| `New`  | `Cube` | `NewCube` |

## Append Sequential Number to Prefix

指定した桁数の連番を先頭に追加します。

| Key           | Type   | Example | Description  |
| ------------- | ------ | ------- | ------------ |
| `Digits`      | `uint` | `3`     | 桁数         |
| `Start Index` | `int`  | `0`     | 採番開始番号 |

Example:

| Digits | Start Index | Before | After                     |
| ------ | ----------- | ------ | ------------------------- |
| `3`    | `0`         | `Cube` | `000Cube`, `001Cube`, ... |

## Append Sequential Number to Suffix

指定した桁数の連番を名前の末尾に追加します。

| Key           | Type   | Example | Description  |
| ------------- | ------ | ------- | ------------ |
| `Digits`      | `uint` | `3`     | 桁数         |
| `Start Index` | `int`  | `0`     | 採番開始番号 |

Example:

| Digits | Start Index | Before | After                     |
| ------ | ----------- | ------ | ------------------------- |
| `3`    | `0`         | `Cube` | `Cube000`, `Cube001`, ... |

## Append Suffix

指定した文字列を名前の末尾に追加します。

| Key      | Type     | Example | Description    |
| -------- | -------- | ------- | -------------- |
| `Suffix` | `string` | `New`   | 追加する文字列 |

Example:

| Suffix | Before | After     |
| ------ | ------ | --------- |
| `New`  | `Cube` | `CubeNew` |

## Remove Leading Spaces

名前の先頭にあるスペースを削除します。

Example:

| Before   | After  |
| -------- | ------ |
| `  Cube` | `Cube` |

## Remove Prefix

指定した文字数を名前の先頭から削除します。

| Key      | Type   | Example | Description    |
| -------- | ------ | ------- | -------------- |
| `Length` | `uint` | `3`     | 削除する文字数 |

Example:

| Length | Before    | After  |
| ------ | --------- | ------ |
| `3`    | `NewCube` | `Cube` |

## Remove Suffix

指定した文字数を名前の末尾から削除します。

| Key      | Type   | Example | Description    |
| -------- | ------ | ------- | -------------- |
| `Length` | `uint` | `3`     | 削除する文字数 |

Example:

| Length | Before    | After  |
| ------ | --------- | ------ |
| `3`    | `CubeNew` | `Cube` |

## Remove Trailing Spaces

名前の末尾にあるスペースを削除します。

Example:

| Before   | After  |
| -------- | ------ |
| `Cube  ` | `Cube` |

## Replace by Regular Expression

正規表現によって名前を置換します。

| Key       | Type     | Example   | Description            |
| --------- | -------- | --------- | ---------------------- |
| `Pattern` | `string` | `\(\d+\)` | 置き換え対象の正規表現 |
| `To`      | `string` | `String`  | 置き換える文字列       |

Example:

| Pattern   | To       | Before    | After        |
| --------- | -------- | --------- | ------------ |
| `\(\d+\)` | `String` | `Cube(1)` | `CubeString` |

## Replace by String

指定した文字列によって名前を置換します。

| Key    | Type     | Example  | Description          |
| ------ | -------- | -------- | -------------------- |
| `From` | `string` | `Cube`   | 置き換え対象の文字列 |
| `To`   | `string` | `String` | 置き換える文字列     |

Example:

| From   | To       | Before    | After       |
| ------ | -------- | --------- | ----------- |
| `Cube` | `String` | `Cube(1)` | `String(1)` |

## To kebab-case

名前を kebab-case に変換します。

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `game-object` |

## To lowerCamelCase

名前を lowerCamelCase に変換します。

Example:

| Before       | After        |
| ------------ | ------------ |
| `GameObject` | `gameObject` |

## To lowercase

名前を小文字に変換します。

Example:

| Before       | After        |
| ------------ | ------------ |
| `GameObject` | `gameobject` |

## To snake_case

名前を snake_case に変換します。

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `game_object` |

## To Train-Case

名前を Train-Case に変換します。

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `Game-Object` |

## To UpperCamelCase

名前を UpperCamelCase に変換します。

Example:

| Before       | After        |
| ------------ | ------------ |
| `gameObject` | `GameObject` |

## To UPPERCASE

名前を大文字に変換します。

Example:

| Before       | After        |
| ------------ | ------------ |
| `GameObject` | `GAMEOBJECT` |

## To UPPER_SNAKE_CASE

名前を UPPER_SNAKE_CASE に変換します。

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `GAME_OBJECT` |
