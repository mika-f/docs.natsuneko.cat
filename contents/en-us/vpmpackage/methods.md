---
title: Methods
shortTitle: Methods
intro: ""
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/vpmpackage` provides the following method(s).

## archive(args: \{ name: string, package: string, dist: string \}): Promise&lt;void&gt;

### Signature

| Parameter   | Type     | Required | Description                          |
| ----------- | -------- | -------- | ------------------------------------ |
| `args`      | `object` | Yes      | Arguments for this method.           |
| ┣ `name`    | `string` | Yes      | Name of package                      |
| ┣ `package` | `string` | Yes      | Path to package.json for VPM Package |
| ┣ `dist`    | `string` | Yes      | Path to output VPM package           |

### Description

Create vpmpackage from your Unity project.

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
