---
title: Overview
shortTitle: Overview
intro: "Animation Auto Assignment はアニメーションクリップに紐付いた GameObject のヒエラルキー上の変更を監視し、自動的にアニメーションクリップへと再割り当てを行う Unity エディター拡張です。"
versions:
  - latest
---

Animation Auto Assignment は、アニメーションクリップに紐付いた GameObject のヒエラルキー上の変更を監視し、自動的にアニメーションクリップへと再割り当てを行う Unity エディター拡張です。
これは、アニメーションクリップのリファクター (GameObject の変更など) を行うときに便利で、手動でアニメーションクリップのプロパティの再割り当てを行う必要はありません。

この拡張機能は、以下の変更を監視します。

- GameObject の移動
- GameObject の名前変更
- GameObject の名前変更 (再帰的)

これはアニメーションクリップによるリファクターでの `Missing Property` を回避することができます。
