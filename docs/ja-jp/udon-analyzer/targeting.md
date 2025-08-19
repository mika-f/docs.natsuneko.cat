---
title: バージョン指定
---

UdonAnalyzer は、VRChat SDK と UdonSharp の `version.txt` から現在のバージョンを自動的に検出します。
そのため、`version.txt` が更新されていない場合、新しいバージョンの機能を使用できない可能性があります。

### デフォルトバージョン (Version.txt)

特別な設定が行われていない場合、バージョンは上記のように自動的に検出されます。

### デフォルトバージョン (Package)

もし VRChat SDK を VRChat Creator Companion と一緒に使用している場合、UdonAnalyzer は自動的に `package.json` モードにフォールバックします。
このモードでは、VRChat World SDK に存在する `package.json` から現在のバージョンを検出します。

### 明示的なバージョン指定

特定の理由でバージョンを意図的に固定したい場合は、editorconfig で指定することができます。  
例:

```editorconfig
[*.cs]

udon_analyzer.vrchat_sdk = 2021.11.24.16.19
udon_analyzer.udon_sharp = 0.20.0
```
