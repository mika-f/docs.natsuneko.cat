---
title: "extract(args: ExtractArgs): Promise<void>"
---

### Signature

```typescript
type ExtractArgs = {
  /**
   * file path to unitypackage
   */
  file: string;
  /**
   * unity project root directory
   */
  root: string;
  /**
   * transform input paths on write
   * @param path input file path (relative on root)
   * @returns input file path (relative on root)
   * @example filter: (path) => join("..", "Packages", "com.natsuneko.unitypackage", path); // Assets/MonoBehaviour.cs → Packages/com.natsuneko.unitypackage/MonoBehaviour.cs
   */
  transform?: (path: string) => string;
};

declare const extract: (args: ExtractArgs) => Promise<void>;
```

| Parameter   | Type                       | Required | Description                                               |
| ----------- | -------------------------- | -------- | --------------------------------------------------------- |
| `file`      | `string`                   | Yes      | 展開するアーカイブファイルのパス                          |
| `root`      | `string`                   | Yes      | プロジェクトのルートディレクトリへのパス                  |
| `transform` | `(path: string) => string` | No       | 実態書き込み時にパスを書き換える場合の transform callback |

### Description

指定されたパラメータから、 UnityPackage ファイルを作成します。

### 例外

| Exception Name | Description                                          |
| -------------- | ---------------------------------------------------- |
| `Error`        | Thrown if `file` is empty or `root` is not directory |

### 例

```typescript
import { extract } from "@natsuneko-laboratory/unitypackage";

await extract({
  file: "./output.unitypackage",
  root: "./",
});
```
