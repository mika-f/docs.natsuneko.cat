---
title: Rename Symbols Plugin
shortTitle: Rename Symbols Plugin
versions:
  - latest
---

RenameSymbols (`UdonObfuscator.Composition.RenameSymbols`) プラグインはシンボル (名前空間, クラス, プロパティ, メソッド, フィールド変数, ローカル変数, and Enum メンバー) をランダムに生成された名前へと置き換えます。

## 例

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

UdonSharp Program Asset などでシリアライズされた値を維持する場合は、 `/* plana:disable */` コメントを追加してください。
Enum の表示名を維持したい場合は、 `--enum-attributes` オプションを追加することで維持できます。

### Rename Namespaces

`--rename-namespaces` を指定した場合、 `namespace` 宣言をリネームします。
[NamespaceDeclarationSyntax](https://learn.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.syntax.namespacedeclarationsyntax) のみに対応しており、[FileScopedNamespaceDeclarationSyntax](https://learn.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.syntax.filescopednamespacedeclarationsyntax) は無視します。

```csharp:input
namespace AudioLink {}
```

```csharp:output
namespace _0xc21b5618 {}
```

### Rename Classes

> **Warning**
> この機能を使用した場合、 Udon C# Program Asset と C# Script との参照が切れます。

> **Important**
> この機能はまだ Unity 統合バージョンでは完全に対応していません。もし使用する場合、 Udon C# Program Asset と C# Script 間の参照を手動で設定する必要があります。

クラス名を変更します。
[ClassDeclarationSyntax](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.classdeclarationsyntax) と [EnumDeclarationSyntax](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.enumdeclarationsyntax) に対応しています。

```csharp:input
public class AudioLink {}
public enum MediaPlaying {}
```

```csharp:output
public class _0x12771ecc {}
public enum _0x524f5ceb {}
```

### Rename Properties

プロパティ名を変更します。 Backing Field の変更には対応していません。

```csharp:input
public string[] List { get; }
```

```csharp:output
public string[] _0x73a8b924 { get; }
```

### Rename Fields

フィールド変数名を変更します。

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

メソッド名を変更します。

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

ローカル変数名を変更します。
[ParameterSyntax#Identifier](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.parametersyntax) と [VariableDeclaratorSyntax](https://learn.microsoft.com/ja-jp/dotnet/api/microsoft.codeanalysis.csharp.syntax.variabledeclaratorsyntax) に対応しています。

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

Inspector 上での表示名を [`UnityEngine.InspectorNameAttribute`](https://docs.unity3d.com/ja/2021.2/ScriptReference/InspectorNameAttribute.html) を追加することで維持します。

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

[`UnityEngine.Serialization.FormerlySerializedAsAttribute`](https://docs.unity3d.com/ja/2021.2/ScriptReference/Serialization.FormerlySerializedAsAttribute.html) を追加することで、変数名が変わった場合でも元の名前を元に値を参照します。

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

このプラグインはいくつかの命名形式に対応しています。デフォルトでは `hexadecimal` が使用されます。

- `hexadecimal` - identifier names like `_0x1234abcd`
- `mangled` - short identifier names like `a`, `b`, `aa`
- `mangled-shuffle` - same as `mangled` but with shuffled alphabet

## Comments

コメントを使用することで、特定の箇所だけ難読化を制御することが可能です。

```csharp
/* plana:disable */
```

このコメント (アノテーションコメント) は直後に出てくる構文にのみ適用されます。
例：

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
