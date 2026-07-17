---
title: アナライザー一覧
---

Udon Analyzer は次のアナライザーデーターを提供します。

- [Udon (`VRC`)](/udon-analyzer/diagnostics/udon/) : Udon 仮想マシンに関する制限による Diagnostics を提供します。
- [UdonSharp (`VSC`)](/udon-analyzer/diagnostics/udonsharp/) : UdonSharp コンパイラの制限による Diagnostics を提供します。

## Categories

すべてのアナライザーは、次のカテゴリのいずれかに属します。

| Category Name   | Description                            |
| --------------- | -------------------------------------- |
| Compiler        | コンパイラの制限に関するアナライザー   |
| Maintainability | コードの保守性に関するアナライザー     |
| Security        | セキュリティの問題に関するアナライザー |
| Unexpected      | 予期しない動作に関するアナライザー     |
| Usage           | API の使用に関するアナライザー         |

## コンパイラー (言語) バージョン

Udon Analyzer は、Unity の C# バージョンと一致する C# バージョンで動作するように設計されています。  
現在の VRChat は Unity 2019.x を必要とし、C# 7.3 を使用できます。  
ただし、UdonSharp で使用される Roslyn コンパイラ (`Microsoft.CodeAnalysis.CSharp`) は 2.6.0 であり、C# 7.2 までの言語機能をサポートしています。
