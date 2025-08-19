---
title: Disable Console Output Plugin
description: コンソール出力を無効にするプラグイン
---

DisableConsoleOutput (`Plana.Composition.DisableConsoleOutput`) プラグインは、 `Debug.Log` などのコンソール出力をソースから取り除きます。

## 例

```csharp:input
namespace AudioLink
{
    public class AudioLinkController : UdonSharpBehaviour
    {
        // ...

        private void Start()
        {
            // ...
            if (audioLink == null)
            {
                Debug.LogError("[AudioLink] Controller not connected to AudioLink");
                return;
            }
        }

        // ...
    }
}
```

```csharp:output
namespace AudioLink
{
    public class AudioLinkController : UdonSharpBehaviour
    {
        // ...

        private void _UnityEngineDebugLogStub()
        {

        }

        private void Start()
        {
            // ...
            if (audioLink == null)
            {
                _UnityEngineDebugLogStub();
                return;
            }
        }

        // ...
    }
}
```

## オプション

```bash
Options:
  --disable-console-output  use disable-console-output [default: False]
```

## Comments

このプラグインはアノテーションコメントで動作を変更することは出来ません。
