---
title: Properties
shortTitle: Properties
intro: ""
versions:
  - latest
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

## Packaging Files

> **Warning**
> This package **DOES NOT** respect `.gitignore` and `.npmignore` by default.

`@natsuneko-laboratory/create-vpmpackage` will package all files in the directory where `package.json` is located by default.
If you exclude specified files from the package, please wait to support `respect-ignores` property in the future releases.
