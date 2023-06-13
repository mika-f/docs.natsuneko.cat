---
title: Overview
shortTitle: Overview
intro: "@natsuneko-laboratory/checkout-lfs is a GitHub Actions to use non-GitHub provided Git LFS server in your workflow."
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/create-unitypackage` is a GitHub Actions to use **own** Git LFS server in your workflow.
It is a replacement of [actions/checkout](https://github.com/actions/checkout) with `lfs: true` option.

## Why do I need this?

A GitHub provided Git LFS server has a limitation of bandwidth and storage.
And official GitHub Actions `actions/checkout` does not support `lfs: true` option with an **external** LFS server.
If you want to use Git LFS with external server, you need to use `@natsuneko-laboratory/checkout-lfs` instead of `actions/checkout` with `lfs: true`.
