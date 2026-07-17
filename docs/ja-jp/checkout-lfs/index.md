---
title: checkout-lfs
description: Self-Hosted な Git LFS サーバーを使っている場合の LFS checkout を提供する GitHub Actions
---

`@natsuneko-laboratory/create-unitypackage` は**自身でホストしている** Git LFS サーバーをワークフローで使用するためのものです。
これは [actions/checkout](https://github.com/actions/checkout) の `lfs: true` オプションを置き換えます。

## これが必要な理由

GitHub が公式に提供する Git LFS サーバーは帯域幅とストレージに制限があります。
また、公式の GitHub Actions `actions/checkout` は、**外部** LFS サーバーに対して `lfs: true` オプションをサポートしていません。
外部サーバーで Git LFS を使用したい場合は、`actions/checkout` の代わりに `@natsuneko-laboratory/checkout-lfs` を使用することで、制限を回避できます。
