---
title: create-unitypackage
description: UnityPackage を Unity Editor なしで作成する外部依存無しの GitHub Actions
layout: overview
repository: natsuneko-laboratory/create-unitypackage
introLinks:
  - title: クイックスタート
    item: /create-unitypackage/getting-started
featuredLinks:
  - title: Start Here
    items:
      - /create-unitypackage/getting-started
      - /create-unitypackage/properties
navigation:
  items:
    - /create-unitypackage/getting-started
    - /create-unitypackage/properties
    - /create-unitypackage/license
---

`@natsuneko-laboratory/create-unitypackage` は Unity Editor への依存、およびその他の外部ソフトウェア（Windows の 7-Zip、Unix の gz や tar コマンドなど）なしで UnityPackage を作成する GitHub Actions です。
これにより、カスタマイズされたセルフホステッドランナーなど、任意のプラットフォームでこの Actions を使用できます。

また、この Actions は `.npmignore` と `.gitignore` をリスペクトして、無視すべきファイルを決定します。
これは、 `npm pack` や `yarn pack` のように、この Actions を使用して UnityPackage を作成したり、OpenUPM レジストリに公開できることを意味します。
