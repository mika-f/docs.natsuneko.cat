---
title: Properties
shortTitle: Properties
intro: ""
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/checkout-lfs` can configure the following properties:

| Property     | Type      | Required | Default | Description                                                                       |
| ------------ | --------- | -------- | ------- | --------------------------------------------------------------------------------- |
| `url`        | `string`  | `true`   |         | URL of Git LFS server                                                             |
| `auth`       | `boolean` | `false`  | `false` | Whether use authentication or not                                                 |
| `credential` | `string`  | `false`  |         | Credential to access to Git LFS server (e.g. GitHub Token, Personal Access Token) |
