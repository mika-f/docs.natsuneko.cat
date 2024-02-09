---
title: Disable Console Output Plugin
shortTitle: Disable Console Output Plugin
versions:
  - latest
---

DisableConsoleOutput (`UdonObfuscator.Composition.DisableConsoleOutput`) plugin removes logging functions from the source.

## Example

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

## Options

```bash
Options:
  --disable-console-output  use disable-console-output [default: False]
```

## Comments

This plugin does not currently support annotation comments yet.
