---
title: プロパティ
shortTitle: プロパティ
intro: ""
versions:
  - latest
---

`@natsuneko-laboratory/checkout-lfs` は以下のプロパティを設定できます:

| Property     | Type      | Required | Default | Description                                                                |
| ------------ | --------- | -------- | ------- | -------------------------------------------------------------------------- |
| `url`        | `string`  | `true`   |         | Git LFS サーバーの URL                                                     |
| `auth`       | `boolean` | `false`  | `false` | 認証を行うか否か                                                           |
| `credential` | `string`  | `false`  |         | Git LFS サーバーへのアクセス情報 (例: GitHub Token, Personal Access Token) |
