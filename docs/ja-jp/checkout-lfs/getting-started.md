---
title: クイックスタート
description: カスタム Git LFS サーバーへの LFS checkout を行う手順
---

`@natsuneko-laboratory/checkout-lfs` は、以下のようなコードをワークフローに追加することで使用できます。

```yaml:.github/workflows/checkout-lfs.yml
name: "Build Git LFS Object by Pushing Tag"

on:
  push:
    tags:
      - v\d+\.\d+\.\d+
  workflow_dispatch:

jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          lfs: false

      - uses: natsuneko-laboratory/checkout-lfs@v1.0.0
        with:
          url: https://git-lfs.natsuneko.moe
          auth: true
          credential: $GITHUB_TOKEN
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

このワークフローは、`v1.0.0` のようなタグをプッシュすると、Git LFS オブジェクトをカスタム Git LFS サーバー (`https://git-lfs.natsuneko.moe`) からチェックアウトします。
認証が不要な場合、 `auth: false` にすることで、 `credential` パラメーターを省略することが可能です。

```yaml:.github/workflows/checkout-lfs.yml
name: "Build Git LFS Object by Pushing Tag"

on:
  push:
    tags:
      - v\d+\.\d+\.\d+
  workflow_dispatch:

jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          lfs: false

      - uses: natsuneko-laboratory/checkout-lfs@v1.0.0
        with:
          url: https://git-lfs.natsuneko.moe
          auth: false
```
