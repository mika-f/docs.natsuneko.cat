---
title: "archive(files: string[], root: string, dist: string): Promise<void>"
---

### Signature

```typescript
archive(files: string[], root: string, dist: string): Promise<void>
```

| Parameter | Type       | Required | Description                                |
| --------- | ---------- | -------- | ------------------------------------------ |
| `files`   | `string[]` | Yes      | アーカイブするファイルの meta ファイルパス |
| `root`    | `string`   | Yes      | プロジェクトのルートディレクトリへのパス   |
| `dist`    | `string`   | Yes      | 出力先の UnityPackage へのパス             |

### Description

指定されたパラメータから、 UnityPackage ファイルを作成します。

### 例外

| Exception Name | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `Error`        | Thrown if `files` is empty or `root` is not directory or `dist` is not file |

### 例

```typescript
import { archive } from "@natsuneko-laboratory/unitypackage";

await archive(
  ["Assets/Plugins/MyPlugin.cs.meta"],
  "./",
  "./output.unitypackage"
);
```
