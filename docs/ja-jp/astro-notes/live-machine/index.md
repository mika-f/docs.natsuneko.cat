---
title: Live Machine
description: ほぼ完全に同期するタイムラインを制御するスクリプト
layout: overview
featuredLinks:
  - title: ユーザーとして使う
    items:
      - /astro-notes/live-machine/setup
      - /astro-notes/live-machine/limitations
      - /astro-notes/live-machine/components
  - title: 開発者として使う
    items:
      - /astro-notes/live-machine/development
      - /astro-notes/live-machine/components
navigation:
  - /astro-notes/live-machine/limitations
  - /astro-notes/live-machine/setup
  - /astro-notes/live-machine/components
  - /astro-notes/live-machine/development
  - /astro-notes/live-machine/changelog
  - /astro-notes/live-machine/license
---

Astro Notes - Live Machine は、パーティクルライブやステージ演出など、 VRChat 上で動作させる Timeline ([`PlayableDirector`](https://docs.unity3d.com/ja/2022.3/ScriptReference/Playables.PlayableDirector.html)) を、ほぼ完全な形で同期させて再生、および停止させるためのスクリプトです。
[Late Joiner](https://creators.vrchat.com/worlds/udon/networking/late-joiners/) 対応で、ワールドに参加したユーザーが途中から参加した場合でも、現在の Timeline の再生位置に合わせて再生を開始します。  
開発者向けの各種イベントハンドラー対応、対応した方法でスクリプトを記述、設定することで、任意のタイミングで処理を追加することも可能です。
