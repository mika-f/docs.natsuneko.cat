---
title: パラメーター
---

`@natsuneko-laboratory/create-vpmpackage` can configure the following properties:

| Property   | Type       | Required | Default | Description                                                                |
| ---------- | ---------- | -------- | ------- | -------------------------------------------------------------------------- |
| `package`  | `string`   | No \*1   | -       | Path to `package.json` or `package.json` itself.                           |
| `packages` | `string[]` | No \*1   | -       | Path to `package.json` or `package.json` itself but can specify multiples. |
| `output`   | `string`   | No \*2   | -       | Path to output UnityPackage.                                               |
| `outputs`  | `string[]` | No \*3   | -       | Path to output UnityPackage but can specify multiples.                     |
| `root`     | `string`   | No       | `./`    | Path to root directory of Unity project.                                   |

- \*1 Required one of `meta`, `package`, `packages`
- \*2 Required if `package` is specified
- \*3 Required if `packages` is specified

## パッケージするファイル群

> ![WARNING]
> このパッケージは `.gitignore` や `.npmignore` をデフォルトでは尊重しません。

`@natsuneko-laboratory/create-vpmpackage` は、デフォルトで `package.json` があるディレクトリ内のすべてのファイルをパッケージします。
指定したファイルをパッケージから除外する場合は、今後のリリースで `respect-ignores` プロパティのサポートを待ってください。
