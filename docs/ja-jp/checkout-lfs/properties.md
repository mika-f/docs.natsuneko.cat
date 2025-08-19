---
title: パラメーター
---

`@natsuneko-laboratory/checkout-lfs` は次のパラメーターを指定できます。

| Property     | Type      | Required | Default | Description                                                                                                 |
| ------------ | --------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `url`        | `string`  | `true`   |         | Git LFS サーバーの URL                                                                                      |
| `auth`       | `boolean` | `false`  | `false` | 認証が必要なサーバーか否か、必要な場合は `true`                                                             |
| `credential` | `string`  | `false`  |         | Git LFS サーバーにアクセスするための認証情報 (例： GitHub Fine Granted Access Token, Personal Access Token) |
