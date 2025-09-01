---
title: Public APIs
---

AstroNotes - Live Machine では、開発者向けに各種 API を提供しています。
各種 API は `NatsunekoLaboratory.AstroNotes.LiveMachine` クラスの Public メソッドとして提供されています。

## StartLiveMachine

`StartLiveMachine` メソッドは、Live Machine でのタイムラインの再生を開始するためのメソッドです。

```csharp
using UdonSharp;

using UnityEngine;

class ExampleBehaviour : UdonSharpBehaviour {
    [SerializeField]
    private LiveMachine _player;

    private void Start()
    {
        _player.StartLiveMachine();
    }
}
```

## PauseLiveMachine

`PauseLiveMachine` メソッドは、Live Machine でのタイムラインの再生を一時停止するためのメソッドです。再生が開始されていない場合 (どこからもまだ `StartLiveMachine` が呼び出されていない場合) は、何も起こりません。

```csharp
using UdonSharp;

using UnityEngine;

class ExampleBehaviour : UdonSharpBehaviour {
    [SerializeField]
    private LiveMachine _player;

    private void Start()
    {
        _player.PauseLiveMachine();
    }
}
```

## ResumeLiveMachine

`ResumeLiveMachine` メソッドは、Live Machine でのタイムラインの再生を再開するためのメソッドです。再生が一時停止されている場合にのみ効果があります。

```csharp
using UdonSharp;

using UnityEngine;

class ExampleBehaviour : UdonSharpBehaviour {
    [SerializeField]
    private LiveMachine _player;

    private void Start()
    {
        _player.ResumeLiveMachine();
    }
}
```

## SetEventListener

`SetEventListener` メソッドは、Live Machine のイベントリスナーを設定するためのメソッドです。
各種[イベントハンドラー](/astro-notes/live-machine/development/handlers) を実装した `UdonSharpBehaviour` を指定します。
通常は、 `NatsunekoLaboratory.AstroNotes.LiveMachineProxyBase` クラスを継承したクラスにて、自身を指定します。

```csharp
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

class ExampleBehaviour : LiveMachineProxyBase
{
    [SerializeField]
    private LiveMachine _player;

    private void Start()
    {
        _player.SetEventListener(this);
    }
}
```
