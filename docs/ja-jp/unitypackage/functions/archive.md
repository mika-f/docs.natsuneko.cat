---
title: "archive(args: ArchiveArgs): Promise<void>"
---

### Signature

```typescript
type ArchiveArgs = {
  /**
   * actual file paths to archive (not `.meta` file path)
   */
  files: string[];

  /**
   * unity project root directory
   */
  root: string;

  /**
   * archive (`.unitypackage`) destination path
   */
  dest: string;

  // extras

  /**
   * transform input paths on write
   * @param path input file path (relative on root)
   * @returns input file path (relative on root)
   * @example filter: (path) => join("..", "Packages", "com.natsuneko.unitypackage", path); // Assets/MonoBehaviour.cs → Packages/com.natsuneko.unitypackage/MonoBehaviour.cs
   */
  transform?: (path: string) => string;
};

declare const archive: (args: ArchiveArgs) => Promise<void>;
```

| Parameter   | Type                       | Required | Description                                                     |
| ----------- | -------------------------- | -------- | --------------------------------------------------------------- |
| `files`     | `string[]`                 | Yes      | アーカイブするファイルの meta ファイルパス                      |
| `root`      | `string`                   | Yes      | プロジェクトのルートディレクトリへのパス                        |
| `dest`      | `string`                   | Yes      | 出力先の UnityPackage へのパス                                  |
| `transform` | `(path: string) => string` | No       | アーカイブ書き込み時にパスを書き換える場合の transform callback |

### Description

指定されたパラメータから、 UnityPackage ファイルを作成します。

### 例外

| Exception Name | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `Error`        | Thrown if `files` is empty or `root` is not directory or `dist` is not file |

### 例

```typescript
import { archive } from "@natsuneko-laboratory/unitypackage";

await archive({
  files: ["Assets/Plugins/MyPlugin.cs.meta"],
  root: "./",
  dest: "./output.unitypackage",
});
```
