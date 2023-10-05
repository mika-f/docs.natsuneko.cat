---
title: 設定
shortTitle: 設定
intro:
versions:
  - latest
---

`Project Settings` > `Editor` > `Asset Lens` から Asset Lens の設定を変更できます。

## 利用可能な設定

デフォルトの設定を変更したい場合は、`Project Settings` > `Editor` > `Asset Lens` から変更できます。  
ファイルに対しては `*.xxx`、フォルダーに対しては `xxx` が対象となります。  
例：

- ファイルに対しては `*.shader`
- フォルダーに対しては `Shader`

### 除外するフォルダー

フォルダー名を指定することで、検索結果からフォルダーを除外できます。  
デフォルトでは、以下のフォルダーが除外されています。

- `Library`
- `obj`
- `ProjectSettings`
- `Temp`

## 除外するファイル

ファイルの拡張子を指定することで、検索結果からファイルを除外できます。  
デフォルトでは、以下の拡張子が除外されています。

- `*.cs` (C# Program Source)
- `*.vb` (VB.NET Program Source)
- `*.js` (JavaScript Program Source)
- `*.ts` (TypeScript Program Source)
- `*.md` (Markdown Document)
- `*.shader` (ShaderLab Program Source)
- `*.hlsl` (HLSL Program Source)
- `*.hlslinc` (HLSL Program Source)
- `*.glsl` (GLSL Program Source)
- `*.glslinc` (GLSL Program Source)
- `*.cg` (CG Program Source)
- `*.cginc` (CG Program Source)
- `*.json` (JSON)
- `*.csproj` (Visual Studio C# Project)
- `*.vbproj` (Visual Studio VB.NET Project)
- `*.sln` (Visual Studio Solution)
