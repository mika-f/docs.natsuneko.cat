---
title: Properties
shortTitle: Properties
intro: ""
versions:
  - latest
---

`@natsuneko-laboratory/create-unitypackage` can configure the following properties:

| Property   | Type       | Required | Default | Description                                                                |
| ---------- | ---------- | -------- | ------- | -------------------------------------------------------------------------- |
| `meta`     | `string`   | No \*1   | -       | Path to text file that contains collection of meta files                   |
| `package`  | `string`   | No \*1   | -       | Path to `package.json` or `package.json` itself.                           |
| `packages` | `string[]` | No \*1   | -       | Path to `package.json` or `package.json` itself but can specify multiples. |
| `output`   | `string`   | No \*2   | -       | Path to output UnityPackage.                                               |
| `outputs`  | `string[]` | No \*3   | -       | Path to output UnityPackage but can specify multiples.                     |
| `root`     | `string`   | No       | `./`    | Path to root directory of Unity project.                                   |

- \*1 Required one of `meta`, `package`, `packages`
- \*2 Required if `package` or `meta` is specified
- \*3 Required if `packages` is specified

## Packaging Files

If you specify `package` or `packages`, `@natsuneko-laboratory/create-unitypackage` will respect `.npmignore` and `.gitignore` to determine which files should be ignored.
The priority is `.npmignore` > `.gitignore` and the following files will be ignored by default.

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
