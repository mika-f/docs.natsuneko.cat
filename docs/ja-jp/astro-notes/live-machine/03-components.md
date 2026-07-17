---
title: コンポーネント一覧
description: Live Machine で提供される各種コンポーネントの一覧
---

## LiveMachine (Script)

主要となるコンポーネントです。タイムライン (`PlayableDirector`) と AudioSource を指定し、ワールドに設置します。

## LiveMachine Switch Activation Proxy (Script)

LiveMachine (Script) の再生をトリガーするためのスイッチです。スイッチが押されると、関連付けられた LiveMachine (Script) の再生が開始されます。
これは Proxy コンポーネントです。 Proxy コンポーネントには制約があるため、[制限事項](/astro-notes/live-machine/limitations) を参照してください。

## LiveMachine Switch Re Activation Proxy (Script)

LiveMachine Switch Activation Proxy (Script) の再表示をトリガーするためのコンポーネントです。再生が終了した後に、関連付けられた LiveMachine (Script) の再生を再開するために使用されます。
これは Proxy コンポーネントです。 Proxy コンポーネントには制約があるため、[制限事項](/astro-notes/live-machine/limitations) を参照してください。
