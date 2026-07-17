---
title: 使い方
---

Constraint by Humanoid はメニューバーの `Natsuneko Laboratory` > `Constraint by Humanoid` から使用できます。
メニューが開くと、ターゲットの GameObject とヒューマノイドボーンを選択して、制約コンポーネントを設定できます。

- Source GameObject は、Constraint コンポーネントを設定したい GameObject を指定します
- Destination GameObject は、Source GameObject の位置と回転を同期させたい GameObject を指定します
- Exclude GameObjects は、Constraint 設定から除外したい GameObject を指定します

多くの場合、動きはソースボーンに合わせられるため、その場合は Rotation Constraint を使用する Constraint に設定します。
Constraint を設定したら、`Apply Changes` ボタンを押して Constraint コンポーネントを設定します。

## VRChat SDK が有効な場合

VRChat SDK が有効な場合、各種 IConstraint の代わりに VRCConstraint コンポーネントが使用されます。
