---
title: 開発者用 API
description: 開発者用 API を使って、各種操作をカスタマイズしましょう
---

Astro Notes - Live Machine では、開発者向けに各種イベントハンドラーを提供しています。
各種イベントハンドラーを購読するには、 `NatsunekoLaboratory.AstroNotes.LiveMachineProxyBase` クラスを継承してください。

継承したクラスを作成後、各種 `OnXXX` をオーバーライドし、 `Start` メッセージで `LiveMachine.SetEventListener` を呼び出すことで、イベントハンドラーの登録が可能です。
なお、すべてのイベントはネットワークを経由しすべてのユーザーに通知されます。

## コード例

```csharp:LiveMachineSwitchReActivationProxy.cs
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

namespace NatsunekoLaboratory.Example
{
    [UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
    public class LiveMachineSwitchReActivationProxy : LiveMachineProxyBase
    {
        [SerializeField]
        private GameObject _target;

        [SerializeField]
        private LiveMachine _player;

        private void Start()
        {
            if (_player)
                _player.SetEventListener(this); // イベントハンドラーの登録
        }

        // OnStop イベントハンドラーの購読
        public override void OnStop()
        {
            if (_target)
                _target.SetActive(true);
        }
    }
}
```

## OnStart

`OnStart` イベントは、タイムラインの再生を開始したタイミングで発生します。タイムラインのライフサイクルの中で再生中に最大一度だけ発生します。
Late Joiner が Join したタイミングですでに再生済みの状態である場合は、 Late Joiner に対してイベントは発生しません。

```csharp:LiveMachineExampleProxy.cs
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

namespace NatsunekoLaboratory.Example
{
    [UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
    public class LiveMachineExampleProxy : LiveMachineProxyBase
    {
        [SerializeField]
        private LiveMachine _player;

        private void Start()
        {
            if (_player)
                _player.SetEventListener(this); // イベントハンドラーの登録
        }

        // OnStart イベントハンドラーの購読
        public override void OnStart()
        {
            //
        }
    }
}
```

## OnSync

`OnSync` イベントは、タイムラインの再生状態の同期が完了した後、**再生が開始されたあと**に発生します。タイムラインのライフサイクルの中で最低一度、その後は再生・停止を繰り返す度に発生します。
Late Joiner の Join による同期完了後にも発生します。

```csharp:LiveMachineExampleProxy.cs
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

namespace NatsunekoLaboratory.Example
{
    [UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
    public class LiveMachineExampleProxy : LiveMachineProxyBase
    {
        [SerializeField]
        private LiveMachine _player;

        private void Start()
        {
            if (_player)
                _player.SetEventListener(this); // イベントハンドラーの登録
        }

        // OnSync イベントハンドラーの購読
        public override void OnSync()
        {
            //
        }
    }
}
```

## OnPause

`OnPause` イベントは、タイムラインの再生を一時停止したタイミングで発生します。タイムラインのライフサイクルの中で再生中に一度も一時停止を行わなかった場合は、発生することはありません。
Late Joiner にも発生しますが、あくまで Late Joiner がすでに Join した状態で一時停止している場合に限ります。

```csharp:LiveMachineExampleProxy.cs
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

namespace NatsunekoLaboratory.Example
{
    [UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
    public class LiveMachineExampleProxy : LiveMachineProxyBase
    {
        [SerializeField]
        private LiveMachine _player;

        private void Start()
        {
            if (_player)
                _player.SetEventListener(this); // イベントハンドラーの登録
        }

        // OnPause イベントハンドラーの購読
        public override void OnPause()
        {
            //
        }
    }
}
```

## OnResume

`OnResume` イベントは、タイムラインの再生を再開したタイミングで発生します。タイムラインのライフサイクルの中で再生中に一度も再開を行わなかった場合は、発生することはありません。
Late Joiner にも発生しますが、あくまで Late Joiner がすでに Join した状態で再開した場合に限ります。  
Resume イベントの発生後、再度タイムラインの再生状態が同期され、 `OnSync` イベントが発生します。

```csharp:LiveMachineExampleProxy.cs
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

namespace NatsunekoLaboratory.Example
{
    [UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
    public class LiveMachineExampleProxy : LiveMachineProxyBase
    {
        [SerializeField]
        private LiveMachine _player;

        private void Start()
        {
            if (_player)
                _player.SetEventListener(this); // イベントハンドラーの登録
        }

        // OnResume イベントハンドラーの購読
        public override void OnResume()
        {
            //
        }
    }
}
```

## OnStop

`OnStop` イベントは、タイムラインの再生を停止したタイミングで発生します。タイムラインのライフサイクルの中で再生中に最大一度だけ発生します。
Late Joiner が Join したタイミングですでに再生が終了していた場合は、 Late Joiner に対してイベントは発生しません。

```csharp:LiveMachineExampleProxy.cs
using UdonSharp;

using UnityEngine;

using NatsunekoLaboratory.AstroNotes;

namespace NatsunekoLaboratory.Example
{
    [UdonBehaviourSyncMode(BehaviourSyncMode.Manual)]
    public class LiveMachineExampleProxy : LiveMachineProxyBase
    {
        [SerializeField]
        private LiveMachine _player;

        private void Start()
        {
            if (_player)
                _player.SetEventListener(this); // イベントハンドラーの登録
        }

        // OnStop イベントハンドラーの購読
        public override void OnStop()
        {
            if (_target)
                _target.SetActive(true);
        }
    }
}
```
