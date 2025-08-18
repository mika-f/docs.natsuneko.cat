---
title: パラメーター
---

`@natsuneko-laboratory/create-unitypackage` は以下のプロパティを設定できます。

| Property   | Type       | Required | Default | Description                                                                           |
| ---------- | ---------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `meta`     | `string`   | No \*1   | -       | メタファイルのコレクションを含むテキストファイルへのパス                              |
| `package`  | `string`   | No \*1   | -       | `package.json` または `package.json` 自体へのパス                                     |
| `packages` | `string[]` | No \*1   | -       | `package.json` または `package.json` 自体へのパスですが、複数指定することもできます。 |
| `output`   | `string`   | No \*2   | -       | 出力先 UnityPackage へのパス。                                                        |
| `outputs`  | `string[]` | No \*3   | -       | 出力先 UnityPackage へのパスですが、複数指定することもできます。                      |
| `root`     | `string`   | No       | `./`    | Unity プロジェクトのルートディレクトリへのパス。                                      |

- \*1 `meta`, `package`, `packages` のうちいずれか必須
- \*2 `package` または `meta` が指定された場合は必須
- \*3 `packages` が指定された場合は必須

## パッケージするファイル群

`package` または `packages` を指定した場合、`@natsuneko-laboratory/create-unitypackage` は `.npmignore` と `.gitignore` をリスペクトして、無視すべきファイルを決定します。
優先順位は `.npmignore` > `.gitignore` で、以下のファイルはデフォルトで無視されます。

- `.*swp`
- `._*`
- `.DS_Store`
- `.git`
- `.gitignore`
- `.hg`
- `.npmignore`
- `.npmrc`
- `.lock-wscript`
- `.svn`
- `.wafpickle-*`
- `config.gypi`
- `CVS`
- `npm-debug.log`
