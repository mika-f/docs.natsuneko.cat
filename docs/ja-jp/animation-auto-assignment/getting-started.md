---
title: クイックスタート
---

Animation Auto Assignment は、ヒエラルキー上の GameObject の変更を検出し、アニメーションクリップのプロパティに対して自動的に再割り当てを行う Unity エディター拡張です。
例えば、 GameObject の階層変更、移動、名前変更などを自動検出し、変更先へと自動修正を行います。

## 使い方

まず、メニューバー `Window` から `Natsuneko Laboratory` > `Animation Auto Assignment` を開いてください。
開いた後、ウィンドウ上の `Tracking Animation or AnimationClip` の項目を埋めます。

- `Animations`: 変更を監視したいアニメーションクリップを設定してください
- `Controllers`: 変更を監視したいアニメーションコントローラーを設定してください。関連する AnimationClip すべてが監視されます

入力後、 `Animation Root Transform` を設定してください。
ここには通常、 AnimationClip を適用している GameObject を設定します。

設定後、 `Start Tracking` ボタンを押すと、監視が開始されます。監視が開始されると、次のような表示になります：

![](https://images.natsuneko.com/d73791bd36b5fce374520a49f20a9628aebe184fa949f5f2b316f83e961cddb6.png)

監視を開始したら、ヒエラルキー上の GameObject の変更を行ってください。変更が自動追従されます。

> ![NOTE]
> 監視を行っていない際に GameObject の変更を行った場合、 Animation Auto Assignment は変更を検出できないため、再割り当ては行われません。
> 必ず監視を行ってから GameObject の変更を行ってください。

## 終了

使い終わったら、再度 `Tracking Hierarchy...` と表示されているボタンをクリックすることで、変更の監視を終了します。
また、監視対象の AnimationClip や AnimatorController を変更したい場合も、必ず監視を行ってから変更を行ってください。
