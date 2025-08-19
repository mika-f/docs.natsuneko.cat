---
title: Udon Analyzer
description: エディター上でリアルタイムに UdonSharp のエラーや警告、ベストプラクティスをチェックするツール
layout: overview
repository: mika-f/udon-analyzer
introLinks:
  - title: 始める
    item: /udon-analyzer/getting-started
  - title: GitHub
    item: https://github.com/mika-f/udon-analyzer
featuredLinks:
  - title: ここから始める
    items:
      - /udon-analyzer/getting-started
      - /udon-analyzer/diagnostics
navigation:
  - /udon-analyzer/getting-started
  - /udon-analyzer/diagnostics
  - /udon-analyzer/dictionary
  - /udon-analyzer/targeting
---

Udon Analyzer は VRChat の UdonSharp 用の [Roslyn Analyzers](https://learn.microsoft.com/en-us/visualstudio/code-quality/roslyn-analyzers-overview) です。
これにより、サポートされていない API を報告したり、サポートされていない C# 構文を報告したり、エディター内でリアルタイムにベストプラクティスへの修正を行ったりすることができます。

## 機能

- この API は Udon に公開されているか？のチェック
- この構文は UdonSharp によってサポートされているか？のチェック
- このメソッドの使い方はベストプラクティスか？のチェック
- その他...
