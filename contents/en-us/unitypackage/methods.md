---
title: Methods
shortTitle: Methods
intro: ""
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/unitypackage` provides the following method(s).

## archive(files: string[], root: string, dist: string): Promise&lt;void&gt;

### Signature

| Parameter | Type       | Required | Description                          |
| --------- | ---------- | -------- | ------------------------------------ |
| `files`   | `string[]` | Yes      | Path to files of meta to be archived |
| `root`    | `string`   | Yes      | Path to root directory of project    |
| `dist`    | `string`   | Yes      | Path to output UnityPackage          |

### Description

Create UnityPackage from your Unity project.

### Exception

| Exception Name | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `Error`        | Thrown if `files` is empty or `root` is not directory or `dist` is not file |

### Example

```typescript
import { archive } from "@natsuneko-laboratory/unitypackage";

await archive(
  ["Assets/Plugins/MyPlugin.cs.meta"],
  "./",
  "./output.unitypackage"
);
```
