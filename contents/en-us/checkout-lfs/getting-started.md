---
title: Getting Started
shortTitle: Getting Started
intro: ""
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/checkout-lfs` is available as GitHub Actions and you can use it by adding following code to your workflow.

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

This workflow will checkout your repository with Git LFS from your LFS server (`https://git-lfs.natsuneko.moe`) with authentication.
