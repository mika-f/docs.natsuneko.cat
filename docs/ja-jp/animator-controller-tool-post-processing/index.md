---
title: Animator Controller Tool Post Processing
description: ヒエラルキー上のコンポーネントの移動を監視し、アニメーションの自動再割り当てを行う Unity エディター拡張
layout: overview
repository: natsuneko-laboratory/animator-controller-tool-post-processing
introLinks:
  - title: GitHub
    item: https://github.com/natsuneko-laboratory/animator-controller-tool-post-processing
navigation:
  - /animator-controller-tool-post-processing/installation
  - /animator-controller-tool-post-processing/license
---

Animator Controller Tool Post Processing は Unity の Animator Controller Tool のデフォルトの動作を改善し、VRChat で推奨される設定にするためのエディター拡張です。
デフォルト挙動として、以下の機能を提供します。

- 新しいレイヤー追加時、 `Weight` を `1.0` に設定
- 新しいステート追加時、 `Write Defaults` を `false` に設定
