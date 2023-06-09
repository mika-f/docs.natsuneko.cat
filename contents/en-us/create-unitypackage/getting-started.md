---
title: Getting Started
shortTitle: Getting Started
intro: ""
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/create-unitypackage` is available as GitHub Actions and you can use it by adding following code to your workflow.

```yaml:.github/workflows/create-unitypackage.yml
name: "Release by Tag"

on:
  push:
    tags:
      - v\d+\.\d+\.\d+
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          lfs: true

      - run: |
          mkdir ./dist

      - uses: natsuneko-laboratory/create-unitypackage@main
        with:
          package: Assets/NatsunekoLaboratory/Package/package.json
          output: dist/Package.unitypackage
```

This workflow will create UnityPackage from your repository when you push a tag like `v1.0.0`.
The UnityPackage will be created from `Assets/NatsunekoLaboratory/Package/package.json` and its dependencies, output to `dist/Package.unitypackage`.
If you want to create UnityPackage from `package.json`, multiple `package.json` or directly specified asset files, please check [Properties](./properties).

And if your Unity project is located in subdirectory, you can specify it by `root` property.

```yaml:.github/workflows/create-unitypackage.yml
name: "Release by Tag"

on:
  push:
    tags:
      - v\d+\.\d+\.\d+
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          lfs: true

      - run: |
          mkdir ./dist

      - uses: natsuneko-laboratory/create-unitypackage@main
        with:
          package: Assets/NatsunekoLaboratory/Package/package.json
          output: dist/Package.unitypackage
          root: src/UnityProject
```
