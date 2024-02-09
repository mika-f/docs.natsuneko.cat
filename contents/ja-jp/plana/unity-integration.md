---
title: Unity Integration
shortTitle: Unity Integration
intro: "Unity Integration of Obfuscator."
versions:
  - latest
---

Unity 統合バージョンは Plana の Unity に最適化されたバージョンです。

## Window

まず初めに、 `Window` > `Natsuneko Laboratory` > `Plana` からウィンドウを表示します。

![](https://images.natsuneko.com/f2a36cdc-94b8-4656-b2a2-c1ec50d68b0e.png)

## Preferences

初期設定では、下記の項目が設定可能です。
同様のオプションはコマンドラインバージョンでも利用可能です。

### Obfuscate Solution

> **Note**
> Unity 統合バージョンから使用しているユーザーの場合、このオプションを使用することはほとんどありません。
> このオプションの**チェックは外してください**。この挙動はリリース候補版 (RC) で修正予定です。

True を設定した場合、ソリューション単位 (`YourProject.sln`) で難読化します。 False を設定した場合はプロジェクト単位 (`YourAsmDef.csproj`) になります。  
Equivalent to `--workspace xxx.sln` when true.

### Project

`Obfuscate Solution` にチェックを入れなかった場合に設定可能です。ソースコードを難読化するプロジェクトの `*.asmdef` を指定します。  
**もし `Assembly-CSharp.csproj` を難読化する場合 (Assembly Definition Files を使用しない場合に該当、 Assembly Definition Files がなにかわからない場合もこれです), `Obfuscate Solution` にはチェックを入れず、このオプションも設定しないでください。**  
Equivalent to `--workspace xxx.csproj`.

### Write In-Place

ファイルを上書きします。  
Equivalent to `--write`.

### Output Dir

`Write In-Place` を設定しなかった場合、このオプションが設定可能です。  
出力するフォルダーを指定します。**フォルダー構造は維持されます。**  
Equivalent to `--output xxx`.

### Plugins Dir

Plana のプラグインを読み込む場所を指定します。デフォルトでは、 `NatsunekoLaboratory/UdonObfuscator/Plugins` にある `externals` が設定されています。  
Equivalent to `--plugins xxx`.

### Dry Run

出力結果をファイルではなく、コンソール (`Debug.Log`) に出力したい場合にチェックを入れます。  
Equivalent to `--dry-run`.

## Plugins

プラグインセクションでは、読み込まれたプラットフォーム毎の設定を有効にするかどうかを設定できます。

![](https://images.natsuneko.com/ba8981b5-cba9-4134-b610-a08a99145dfd.png)

セクションが表示されない、何も表示されない場合は、 `externals` フォルダーに `*.dll` が存在しているか、もしくは `Plugins Dir` が正しく設定されているかを確認し、再度 `Scan Plugins` ボタンを押下してください。

### Scan Plugins

プラグインを読み込みます。

## Actions

現時点では、難読化のみ対応しています。

### Obfuscate

プロジェクトもしくはソリューションを難読化します。

## Official Plugins

Plana はプラグインを指定しない場合は動作しません。
そのため、難読化の内容は読み込んだプラグインに依存します。
公式にサポートされているプラグインは以下の通りです。

- ~~[Control Flow Flattening](./plugins/control-flow-flattening)~~
- ~~[Dead Code Injection](./plugins/dead-code-injection)~~
- [Disable Console Output](./plugins/disable-console-output)
- ~~[Numbers to Expressions](./plugins/numbers-to-expressions)~~
- ~~[Remove Comments](./plugins/remove-comments)~~
- [Rename Symbols](./plugins/rename-symbols)
- [Shuffle Declarations](./plugins/shuffle-declarations)
- ~~[Shuffle Symbols](./plugins/shuffle-symsols)~~
- ~~[Source Maps](./plugins/source-maps)~~
- ~~[Split Strings](./plugins/split-strings)~~
- ~~[String Encryption](./plugins/string-encryption)~~
