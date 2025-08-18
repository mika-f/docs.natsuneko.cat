---
title: Shuffle Declarations Plugin
description: メンバー宣言をシャッフルするプラグイン
---

ShuffleDeclarations (`Plana.Composition.ShuffleDeclarations`) plugin shuffles member declarations of class.

## Example

```csharp:input
namespace AudioLink
{
    public class AudioLinkControllerHandle : UdonSharpBehaviour
    {
        public ParentConstraint parentConstraint;

        private ParentConstraint selfConstraint;

        public void Start()
        {
            // ...
        }

        public override void OnPickup()
        {
            // ...
        }

        public override void OnDrop()
        {
            // ...
        }
    }
}
#endif

```

```csharp:output
namespace AudioLink
{
    public class AudioLinkControllerHandle : UdonSharpBehaviour
    {
        public override void OnPickup()
        {
            // ...
        }

        public override void OnDrop()
        {
            // ...
        }

        public ParentConstraint parentConstraint;
        private ParentConstraint selfConstraint;
        public void Start()
        {
            // ...
        }
    }
}
```

## Options

```bash
Options:
  --shuffle-declarations  use shuffle-declarations [default: False]
```

## Comments

This plugin does not support annotation comments.
