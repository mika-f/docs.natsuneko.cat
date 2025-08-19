---
title: "archive(args: { name: string, package: string, dist: string }): Promise<void>"
---

### Signature

```typescript
archive(args: { name: string, package: string, dist: string }): Promise<void>
```

| Parameter   | Type     | Required | Description                          |
| ----------- | -------- | -------- | ------------------------------------ |
| `args`      | `object` | Yes      | Arguments for this method.           |
| ┣ `name`    | `string` | Yes      | Name of package                      |
| ┣ `package` | `string` | Yes      | Path to package.json for VPM Package |
| ┣ `dist`    | `string` | Yes      | Path to output VPM package           |

### Description

VPM Package を作成します。

### Exception

| Exception Name | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `Error`        | Thrown if `files` is empty or `root` is not directory or `dist` is not file |

### Example

```typescript
import { archive } from "@natsuneko-laboratory/vpmpackage";

await archive({
  name: "cat.natsuneko.vpmpackage",
  package: "./Asset/NatsunekoLaboratory/YourPackage/package.json",
  dist: "./cat.natsuneko.vpmpackage-v1.0.0.zip",
});
```
