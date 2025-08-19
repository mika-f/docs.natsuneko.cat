---
title: クイックスタート
description: GitHub Actions を使用して UnityPackage を作成する手順
---

`@natsuneko-laboratory/create-unitypackage` は GitHub Actions として利用可能で、以下のコードをワークフローに追加することで使用できます。

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

このワークフローは、`v1.0.0` のようなタグをプッシュすると、リポジトリから UnityPackage を作成します。
UnityPackage は `Assets/NatsunekoLaboratory/Package/package.json` とその依存関係から作成され、`dist/Package.unitypackage` に出力されます。
`package.json`、複数の `package.json`、または直接指定されたアセットファイルから UnityPackage を作成したい場合は、[プロパティ](/create-unitypackage/properties)を確認してください。

Unity プロジェクトがサブディレクトリにある場合は、`root` プロパティで指定できます。

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
