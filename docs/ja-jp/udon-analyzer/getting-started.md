---
title: 始める
description: Udon Analyzer を使い、快適な UdonSharp 開発を実現しましょう
---

UdonSharp はお使いのエディター上にリアルタイムにエラー情報を表示する、いわゆるエディター拡張です。
厳密には LSP の拡張という形になりますが、UdonSharp のために特化した機能を提供しています。

## 導入

お使いのエディターによって、いくつかの導入方法があります。

### Visual Studio 2022

1. ダウンロード可能なパッケージ一覧から、 Visual Studio 2022 用のパッケージをインストールします
   - `NatsunekoLaboratory.UdonAnalyzer.VS2022.vsix`
2. 拡張機能をインストールします
3. ダウンロード可能なパッケージ一覧から、 Unity Integration 用のパッケージをインストールします
   - `UdonAnalyzer-xxx.unitypackage`
4. エディター拡張をインポートします
5. ソリューションを再生成します
6. Unity から対象ファイルを、 Visual Studio 2022 で開きます

### Visual Studio Code / JetBrains Rider

1. ダウンロード可能なパッケージ一覧から、 Unity Integration 用のパッケージをインストールします
   - `UdonAnalyzer-xxx.unitypackage`
2. エディター拡張をインポートします
3. ソリューションを再生成します
4. Unity から対象ファイルを、対象のエディターで開きます

## Via VPM

Remuria 上のリポジトリから、 VCC を使用してインストールできます。

### インストール

1. VCC を開き、 `https://remuria.natsuneko.com/repositories/com.natsuneko.vpm.json` をリポジトリとして追加します。
2. プロジェクト詳細へ移動し、 `Udon Analyzer` を検索します。
3. `Install` をクリックします。
4. ソリューションを再生成します
5. Unity から対象ファイルを、対象のエディターで開きます

## コーディング

では実際にコーディングしてみましょう。
次の動画のように、ほぼリアルタイムにエラー情報が返されることが分かります。

![](https://images.natsuneko.com/feb021cfe64f73ab8ff1271dce3d692adfb485514b3b487e9b74b6c50cde6f10.gif)
