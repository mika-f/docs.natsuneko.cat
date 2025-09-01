---
title: セットアップ
description: LiveMachine のセットアップ方法からワールドのアップロードまでを解説します
---

## 初期設定

まず初めに、 VCC からワールド　 SDK と UdonSharp を設定、インポートしておいてください。特に理由がない限りは最新版を推奨します。
ワールドの初期設定を終えたら、 [Live Machine のリリースページ (BOOTH)](https://natsuneko-vrc.booth.pm/items/7351923) から最新のリリースをダウンロードし、インポートしてください。
インポート後、任意の場所にタイムライン (PlayableDirector) を設置してください。

次に、タイムラインを設置した GameObject に対して、**親の**空の GameObject に対して、 `Live Machine (Script)` コンポーネントを付与してください。

<figure>
  <img src="https://images.natsuneko.com/3a9106aee25893f55f56614ee5210af135aa6dc0fa64ba7134e2ae9615d79c2a.png" />
  <figcaption>Add Component から "Live Machine" を検索して追加します。</figcaption>
</figure>

追加が完了したら、 `Live Machine (Script)` コンポーネントの設定を行います。

<figure>
  <img src="https://images.natsuneko.com/f27d394e4666006651fe378e4dfff302f134dd1be66861f1b4ba0921d6623d11.png" />
  <figcaption>Live Machine (Script) コンポーネントの設定画面</figcaption>
</figure>

設定可能な項目としては、 `Timeline` / `Audio` / `Restartable` があります。
それぞれ

| 項目        | 説明                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------- |
| Timeline    | 使用する Timeline (PlayableDirector) を指定します。                                           |
| Audio       | 使用する AudioSource を指定します。オプショナルです。                                         |
| Restartable | 再起動可能かどうかを指定します。 デフォルト True で、再生完了後、再度再生することが可能です。 |

という設定項目です。 `Audio` についても再生位置は同期されますが、タイムラインにすでに AudioSource が設定されている場合は設定不要です。
Restartable についても、 True を設定することで再生完了後に再起動することができるようになりますが、不要な場合はチェックを外してください。

Timeline / Audio を設定したら、次は再生ボタンを設置します。再生ボタンのモデルの形状は問いませんが、別途コンポーネントを付与する必要があります。
スイッチのモデル (GameObject) に対し、 `Live Machine Switch Activation Proxy (Script)` を設定します。

<figure>
  <img src="https://images.natsuneko.com/ea228c9d4ab929b6ffe32606fec4821d6fb748feed173dd7d4f8e0b69a33fb56.png" />
  <figcaption>Add Component から "Live Machine Switch" を検索して追加します。</figcaption>
</figure>

追加すると次のようなコンポーネント設定が表示されるので、設定を行います。

<figure>
  <img src="https://images.natsuneko.com/203c2f3af8e067e1c5d84fb9e6c985254c8a928ea12e1a289e826e3bfe1b0773.png" />
  <figcaption>Live Machine Switch Activation Proxy (Script) コンポーネントの設定画面</figcaption>
</figure>

Live Machine Switch Activation Proxy (Script) コンポーネントには次の 2 つの設定があります。

| 項目               | 説明                                                      |
| ------------------ | --------------------------------------------------------- |
| Player             | 対象の Live Machine (Script) コンポーネントを指定します。 |
| Destroy After Play | スイッチの状態を指定します。                              |

`Player` には先ほど設定が完了した `Live Machine (Script)` コンポーネントを指定します。
`Destroy After Play` には、再生開始時のスイッチの挙動を設定します。 True に設定すると、再生開始後にスイッチが消滅します。 False に設定すると、再生開始後もスイッチが残り、再度押すことで一時停止・再生ができるようになります。
デフォルトは `False` で、スイッチは残り続けます。

## 再起動設定

削除後、スイッチとなるモデル、オブジェクトを再度表示させたい場合は、別途、空の GameObject に `Live Machine Switch Re Activation Proxy (Script)` コンポーネントの設定を行う必要があります。
設定する場合は、次の 2 つ設定を行ってください：

<figure>
  <img src="https://images.natsuneko.com/a32a4cb1b5589190cf5e5779470c9ecabf10ca847a0a52a7e0a31672e78221bc.png" />
  <figcaption>Live Machine Switch Re Activation Proxy (Script) コンポーネントの設定画面</figcaption>
</figure>

| 項目   | 説明                                                                                                                                                         |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Target | 再表示させたいスイッチのモデル、オブジェクトを指定します。通常、 `Live Machine Switch Activation Proxy (Script)` がアタッチされた GameObject (モデル) です。 |
| Player | 先ほど設定が完了した `Live Machine (Script)` コンポーネントを指定します。                                                                                    |

## 最終的な設定内容

最終的には、次のような構成になります。

<figure>
  <img src="https://images.natsuneko.com/8a87a32f8d71e40b0880e14c210afd666c30831180fb6c4c111e66eb5e74cd21.png" />
  <figcaption>ヒエラルキーの様子</figcaption>
</figure>

- `Switch` に `Live Machine Switch Activation Proxy (Script)` コンポーネントを設定
- `Live/GameObject` に `Live Machine (Script)` コンポーネントを設定
- `Live/GameObject/誇り高きアイドル` にタイムライン (`PlayableDirector`) を設定、かつ今回の場合は非アクティブ
- `Live/RespawnSwitch` に `Live Machine Switch Re Activation Proxy (Script)` コンポーネントを設定
