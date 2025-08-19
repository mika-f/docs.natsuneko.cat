---
title: CLI
description: Otsukai のコマンドラインインターフェース
---

Otsukai は Go で書かれた単一バイナリのコマンドラインツールです。
Otsukai では次のコマンドを提供しています：

```bash
NAME:
   otsukai - otsukai

USAGE:
   otsukai [global options] command [command options]

COMMANDS:
   run      run otsukai
   test     test recipe syntax
   help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h  show help
```

## run

指定された Otsukai レシピを実行します。ファイルを指定しなかった場合、カレントディレクトリ `otsukai.rb` を実行します。  
ファイルを指定する場合は `--recipe [file]` オプションを使用します。

例：

```bash
$ otsukai run

# ファイルを指定する場合
$ otsukai run --recipe /path/to/recipe.rb
```

## test

指定された Otsukai レシピの文法をテストします。ファイルを指定しなかった場合、カレントディレクトリ `otsukai.rb` の文法をテストします。
ファイルを指定する場合は `--recipe [file]` オプションを使用します。

例：

```bash
$ otsukai test

# ファイルを指定する場合
$ otsukai test --recipe /path/to/recipe.rb
```
