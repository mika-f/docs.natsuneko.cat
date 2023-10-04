---
title: Getting Started
shortTitle: Getting Started
intro: ""
versions:
  - latest
---

`@natsuneko-laboratory/checkout-lfs` は GitHub Actions として利用でき、以下のコードをワークフローに追加することで使用できます。

```yaml:.github/workflows/create-unitypackage.yml
name: "Release UnityPackage by Pushing Tag"

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

これは、 Git LFS サーバーとして `https://git-lfs.natsuneko.moe` を認証付きで使用し、該当ファイルをチェックアウトします。
