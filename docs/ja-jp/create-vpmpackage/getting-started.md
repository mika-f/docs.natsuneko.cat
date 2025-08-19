---
title: クイックスタート
description: GitHub Actions を使用して VPMPackage を作成する手順
---

`@natsuneko-laboratory/create-vpmpackage` は GitHub Actions として利用可能で、以下のコードをワークフローに追加することで使用できます。

```yaml:.github/workflows/create-vpmpackage.yml
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

      - uses: natsuneko-laboratory/create-vpmpackage@main
        with:
          package: Assets/NatsunekoLaboratory/Package/package.json
          output: dist/Package.zip
```

このワークフローは、`v1.0.0` のようなタグをプッシュすると、リポジトリから VPMPackage を作成します。
VPMPackage は `Assets/NatsunekoLaboratory/Package/package.json` とその依存関係から作成され、`dist/Package.zip` に出力されます。
`package.json`、複数の `package.json`、または直接指定されたアセットファイルから VPMPackage を作成したい場合は、[プロパティ](/create-vpmpackage/properties)を確認してください。

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

      - uses: natsuneko-laboratory/create-vpmpackage@main
        with:
          package: Assets/NatsunekoLaboratory/Package/package.json
          output: dist/Package.zip
          root: src/UnityProject
```
