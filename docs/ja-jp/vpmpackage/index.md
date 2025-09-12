---
title: vpmpackage
description: 環境依存なしで動作する軽量な VPMPackage 作成パッケージ
layout: overview
repository: natsuneko-laboratory/vpmpackage
introLinks:
  - title: クイックスタート
    item: /vpmpackage/getting-started
  - title: GitHub
    item: https://github.com/natsuneko-laboratory/vpmpackage
featuredLinks:
  - title: Start Here
    items:
      - /vpmpackage/getting-started
      - /vpmpackage/functions
navigation:
  items:
    - /vpmpackage/getting-started
    - /vpmpackage/functions
    - /vpmpackage/license
---

`@natsuneko-laboratory/vpmpackage` は、Unity Editor や VRChat、その他の外部ソフトウェア（Windows の 7-Zip、Unix の gz や tar コマンドなど）に依存せずに動作する軽量な VPMPackage 作成パッケージです。  
また、プロジェクトの形式にも依存しません。これは、 OpenUPM や今まで通りの UnityPackage などとパッケージの配布方法が共存できるということです。

このパッケージは単純なメソッドを一つを提供いています。

- [`archive`](/vpmpackage/functions/archive)
