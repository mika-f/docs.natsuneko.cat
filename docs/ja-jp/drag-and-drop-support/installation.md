---
title: インストールガイド (3.x)
description: Blender 4.0 以前でのアドオンのインストール方法について
---

> ![IMPORTANT]
> このアドオンを導入・使用する前に、[セキュリティガイド](/drag-and-drop-support/security-guides)を一読してください。
> セキュリティガイドには、アドオンを使う前に知っておくべき情報が含まれています。

## インストール

1. [GitHub Releases](https://github.com/mika-f/blender-drag-and-drop/releases/latest) からインストールアーカイブ (3.x) をダウンロードします。
2. ダウンロードしたアーカイブを解凍します。
3. `Preferences` ウィンドウを開き、`Add-ons` タブを選択します。
4. `Install` ボタンを押します。
5. Explorer から `drag-and-drop-support.zip` を選択し、`Install Add-on` をクリックします。
6. `Community` タブを選択し、`Import: Drag and Drop Support` を有効にします。
7. 説明をよく読み、セキュリティポリシーに同意します。
   1. これは、このアドオン（または他のアドオン）を安全に使用するための予防措置です。

## アップデート

> ![NOTE]
> アップデートの前にこのアドオンを無効にする必要があります。Blender はアップデートにおいてはネイティブ DLL をメモリから解放しないため、意図しない動作を引き起こす可能性があります。

1. [GitHub Releases](https://github.com/mika-f/blender-drag-and-drop/releases/latest) から 3.x における最新のインストールアーカイブをダウンロードします。
2. ダウンロードしたアーカイブを解凍します。
3. `Preferences` ウィンドウを開き、`Add-ons` タブを選択します。
4. `Install` ボタンを押します。
5. Explorer から `drag-and-drop-support.zip` を選択し、`Install Add-on` をクリックします。
6. `Community` タブを選択し、`Import: Drag and Drop Support` を有効にします。
7. Blender を再起動します。

## 無効化

このアドオンは `Preferences` ウィンドウから無効化できます。  
このアドオンを無効化すると、ドラッグアンドドロップによるファイルのインポートができなくなり、ネイティブ DLL をメモリからアンロードすることができます。

## アンインストール

1. `Preferences` ウィンドウを開き、`Add-ons` タブを選択します。
2. `Community` タブを選択し、`Import: Drag and Drop Support` を選択します。
3. `Delete` ボタンをクリックします。
4. Blender を再起動します。
