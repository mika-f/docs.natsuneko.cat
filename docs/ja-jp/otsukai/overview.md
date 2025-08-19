---
title: 概要
description: Otsukai で始めるシンプルで簡単なデプロイ自動化
---

Otsukai は Ruby ライクなシンタックスで動作を書くことが出来るリモートデプロイメントツールです。
既存の Ruby のシンタックスハイライトと文法を使えることで覚えることが少なく、誰でも簡単に使い始めることができます。

例えば、リモートの Docker Compose サービスに対して新規デプロイを行う場合、以下のようなコードで実現可能です：

```ruby:otsukai.rb
set remote: { host: "valeria.natsuneko.net", user: "natsuneko" }
set timeout: 60

task :deploy do
  run remote: "docker compose -f /home/natsuneko/knockru/docker-compose.yml down", stdout: true
  copy to: :remote, local: "./deployments/valeria.natsuneko.net/knockru/docker-compose.yml", remote: "/home/natsuneko/knockru/docker-compose.yml"
  run remote: "docker compose -f /home/natsuneko/knockru/docker-compose.yml up -d", stdout: true
end
```

このコードは、次のことを実現します：

1. リモートホスト `valeria.natsuneko.net` に対して、ユーザー natsuneko で SSH ログイン
2. リモートホストにて `docker compose -f /home/natsuneko/knockru/docker-compose.yml down` を実行して、既存のコンテナを停止
3. ローカルの `./deployments/valeria.natsuneko.net/knockru/docker-compose.yml` をリモートホストの `/home/natsuneko/knockru/docker-compose.yml` にコピー
4. リモートホストにて `docker compose -f /home/natsuneko/knockru/docker-compose.yml up -d` を実行して、新しいコンテナを起動

このように、読みやすく、かつ簡潔なコードで、リモートのデプロイメントを自動化できます。
完全な自動化に興味がある場合は、 [GitHub Actions](/otsukai/github-actions) を利用することで、 GitHub へのプッシュやプルリクエストの作成時に自動的にデプロイを行うことも可能です。
