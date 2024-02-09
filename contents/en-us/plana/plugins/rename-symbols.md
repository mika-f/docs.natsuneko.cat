---
title: Rename Symbols Plugin
shortTitle: Rename Symbols Plugin
versions:
  - latest
---

RenameSymbols (`UdonObfuscator.Composition.RenameSymbols`) plugin renames each symbols (namespace, class, property, method, field, variable, and enum member) with a randomly generated name.

## Example

```csharp:input
namespace AudioLink
{
    public partial class AudioLink
    {
        public void SetMediaVolume(float volume)
        {
            audioMaterial.SetFloat("_MediaVolume", volume);
        }
    }

    public enum MediaPlaying
    {
        None = 0,
        Playing = 1,
        Paused = 2,
        Stopped = 3,
        Loading = 4,
        Streaming = 5,
        Error = 6
    }
}
```

```csharp:output
namespace _0xc21b5618
{
    public partial class _0x12771ecc
    {
        public void _0xc842a475(float _0x06b29be3)
        {
            _0xc3be3b48.SetFloat("_MediaVolume", _0x06b29be3);
        }
    }

    public enum _0x524f5ceb
    {
        [global::UnityEngine.InspectorName("None")]
        _0x228290b2 = 0,
        [global::UnityEngine.InspectorName("Playing")]
        _0x933ce6cc = 1,
        [global::UnityEngine.InspectorName("Paused")]
        _0x9088d417 = 2,
        [global::UnityEngine.InspectorName("Stopped")]
        _0x52c8b2af = 3,
        [global::UnityEngine.InspectorName("Loading")]
        _0xd021ab9d = 4,
        [global::UnityEngine.InspectorName("Streaming")]
        _0x27608f68 = 5,
        [global::UnityEngine.InspectorName("Error")]
        _0x06da0cb3 = 6
    }
}
```

## Options

```bash
Options:
  --rename-namespaces       rename namespaces [default: False]
  --rename-classes          rename classes [default: False]
  --rename-properties       rename properties [default: False]
  --rename-fields           rename fields [default: False]
  --rename-methods          rename methods without referencing by SendCustomEvent [default: False]
  --with-send-custom-event  rename all methods [default: False]
  --rename-variables        rename local variables [default: False]
  --enum-attributes         add UnityEngine.InspectorName to enum members [default: False]
  --rename-symbols          use rename-symbols [default: False]
```

If you use keep serialized names, add `/* plana:disable */`. And if you keep enum display names, add `--enum-attributes` option.

### Rename Namespaces

If you provide `--rename-namespaces` args, this plugin rename `namespace` declaration.
It supports [NamespaceDeclarationSyntax](https://learn.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.syntax.namespacedeclarationsyntax), not working with [FileScopedNamespaceDeclarationSyntax](https://learn.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.syntax.filescopednamespacedeclarationsyntax).

```csharp:input
namespace AudioLink {}
```

```csharp:output
namespace _0xc21b5618 {}
```

### Rename Classes

> **Warning**
> This feature broken references between Udon C# Program Asset and C# Script.

> **Important**
> This feature does not yet supported by Unity Integration. If you use this feature, please re-reference between U# Program Asset and C# Script.

If you provide `--rename-classes` args, this plugin rename class declarations.
It supports [ClassDeclarationSyntax](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.classdeclarationsyntax) and [EnumDeclarationSyntax](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.enumdeclarationsyntax).

```csharp:input
public class AudioLink {}
public enum MediaPlaying {}
```

```csharp:output
public class _0x12771ecc {}
public enum _0x524f5ceb {}
```

### Rename Properties

If you provide `--rename-properties` args, this plugin rename property declarations. It doe's not support to rename backing field of properties.

```csharp:input
public string[] List { get; }
```

```csharp:output
public string[] _0x73a8b924 { get; }
```

### Rename Fields

If you provide `--rename-fields` args, this plugin rename field declarations.

```csharp:input
public partial class AudioLink : MonoBehaviour
{
    [Header("Basic EQ")]
    [Range(0.0f, 2.0f)]
    [Tooltip("Warning: this setting might be taken over by AudioLinkController")]
    public float gain = 1f;
}
```

```csharp:input
public partial class AudioLink : MonoBehaviour
{
    [Header("Basic EQ")]
    [Range(0.0f, 2.0f)]
    [Tooltip("Warning: this setting might be taken over by AudioLinkController")]
    public float _0x4144d8a1 = 1f;
}
```

### Rename Methods

If you provide `--rename-methods` args, this plugin rename method declarations.

```csharp:input
public void SetMediaVolume(float volume)
{
    audioMaterial.SetFloat("_MediaVolume", volume);
}
```

```csharp:output
public void _0xc842a475(float volume)
{
    audioMaterial.SetFloat("_MediaVolume", volume);
}
```

### With Send Custom Event

### Rename Variables

If you provide `--rename-variables` args, this plugin renames all local variables.
It supports [ParameterSyntax#Identifier](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.parametersyntax) and [VariableDeclaratorSyntax](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.variabledeclaratorsyntax).

```csharp:input
public void SetMediaVolume(float volume)
{
    audioMaterial.SetFloat("_MediaVolume", volume);
}
```

```csharp:output
public void SetMediaVolume(float _0x06b29be3)
{
    audioMaterial.SetFloat("_MediaVolume", _0x06b29be3);
}
```

### Enum Attributes

If you provide `--enum-attributes` args, this plugin keep the display name on inspector with adding [`UnityEngine.InspectorNameAttribute`](https://docs.unity3d.com/ja/2021.2/ScriptReference/InspectorNameAttribute.html).

```csharp:input
public enum MediaPlaying
{
    None = 0,
}
```

```csharp:output
public enum _0x524f5ceb
{
    [global::UnityEngine.InspectorName("None")]
    _0x228290b2 = 0,
}
```

### Serializer Attributes

If you provide `--serializer-attributes` args, this plugin keep the serializer name on inspector with adding [`UnityEngine.Serialization.FormerlySerializedAsAttribute`](https://docs.unity3d.com/ja/2021.2/ScriptReference/Serialization.FormerlySerializedAsAttribute.html).

```csharp:input
public class AudioLink
{
    public int depth;
}
```

```csharp:output
public class AudioLink
{
    [global::UnityEngine.Serialization.FormerlySerializedAs("depth")]
    public int _0x228290b2;
}
```

### Algorithm

This plugin support a lot of renaming algorithms. If you are not provided this args, use `hexadecimal` by default.

- `hexadecimal` - identifier names like `_0x1234abcd`
- `mangled` - short identifier names like `a`, `b`, `aa`
- `mangled-shuffle` - same as `mangled` but with shuffled alphabet

## Comments

You can disable obfuscation via comments.

```csharp
/* plana:disable */
```

This comment (annotation comment) disabled obfuscation to **next** syntax only.
For example,

```csharp
/* plana:disable */
public void ExampleMethod()
{
    this._a.SomeMethod();
}

// to

public void ExampleMethod()
{
    this._0x12345678._0x87654321();
}
```
