---
title: はじめての Otsukai
description: Otsukai の基本的な使い方を学びましょう。
---

Otsukai は Ruby ライクなシンタックスで動作を書くことが出来るリモートデプロイメントツールです。
基本的な文法は Ruby のサブセットであり、 Ruby のシンタックスハイライトツールや LSP を使って快適に開発することができます。
このページでは初めての Otsukai レシピの作成から、実際にデプロイを行うまでの一通りの流れを説明します。

## Otsukai レシピ

Otsukai では、デプロイメントの単位のことを「レシピ」と呼びます。
レシピは Ruby のサブセットコードで記述され、 `remote:` もしくは `local:` パラメーターを使用して、実行環境を指定します。

レシピとしての最小コードは以下のようになります：

```ruby:otsukai.rb
set remote: { host: "valeria.natsuneko.net", user: "natsuneko" }

task :deploy do
  run remote: "echo 'Hello, Otsukai!'", stdout: true
end
```

必要なのは次の 2 つの要素です：

1. リモート実行環境
   - `set remote:` でリモートホストの情報を指定します。ここでは `valeria.natsuneko.net` というホストに、ユーザー `natsuneko` で接続します。
2. タスク定義
   - `task :deploy do ~ end` でタスクを定義し、その中で実行するコマンドを指定します。

デプロイタスクの中身はいくつかの用意された関数を実行することが出来ます。

- [`copy` 関数](/otsukai/functions/copy)
- [`run` 関数](/otsukai/functions/run)
- [`changed` 関数](/otsukai/functions/changed)
- [`task_success` 関数](/otsukai/functions/task_success)

ここでは `run` 関数を使い、 `remote:` パラメータを指定することでリモートホスト上でコマンドを実行しています。

## デプロイ

次に、実際にタスクを実行してみましょう。 `otsukai run` コマンドで実行することができ、デフォルトでは `deploy` タスクが実行され、次のような結果が得られます。

```bash
$ otsukai run

Hello, Otsukai!
```

これで Otsukai での開発フローを一通り体験することができました。お疲れさまでした。  
Otsukai では、さらに多くの機能を提供しています。次は [Otsukai CLI](/otsukai/cli) や [GitHub Actions](/otsukai/github-actions) を使って、より高度なデプロイメントを実現してみましょう。
