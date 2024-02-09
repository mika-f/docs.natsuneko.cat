---
title: Requirements
shortTitle: Requirements
versions:
  - latest
---

Plana は以下のシステム要件を満たす必要があります。

## ソフトウェア必須要件 (Standalone)

コマンドラインバージョンの Obfuscator を使用する場合、描きの要件を満たす必要があります：

- [.NET 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

## ソフトウェア必須要件 (Integration)

Unity 統合バージョンの Obfuscator を使用する場合、描きの要件を満たす必要があります：

If you use the Unity integration version of obfuscator, your computer must the following software requirements.

- [.NET 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- Unity 2019 以上
- VRChat SDK3 with UdonSharp

Unity 統合バージョンは内部で `dotnet run` コマンドを呼び出しているため、 `dotnet` コマンドを `PATH` へ通している必要があります。
