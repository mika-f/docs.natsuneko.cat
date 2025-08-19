---
title: create-vpmpackage
description: VPMPackage を Unity Editor & VRChat なしで作成する外部依存無しの GitHub Actions
layout: overview
repository: natsuneko-laboratory/create-vpmpackage
introLinks:
  - title: クイックスタート
    item: /create-vpmpackage/getting-started
featuredLinks:
  - title: Start Here
    items:
      - /create-vpmpackage/getting-started
      - /create-vpmpackage/properties
navigation:
  - /create-vpmpackage/overview
  - /create-vpmpackage/getting-started
  - /create-vpmpackage/properties
  - /create-vpmpackage/license
---

`@natsuneko-laboratory/create-unitypackage` は Unity Editor への依存、およびその他の外部ソフトウェア（Windows の 7-Zip、Unix の gz や tar コマンドなど）なしで UnityPackage を作成する GitHub Actions です。
これにより、カスタマイズされたセルフホステッドランナーなど、任意のプラットフォームでこの Actions を使用できます。

また、 この Actions は VPM Package を作成するための特殊なディレクトリ構造などは必要なく、 OpenUPM へ登録する形そのままでのパッケージングが可能となっています。
