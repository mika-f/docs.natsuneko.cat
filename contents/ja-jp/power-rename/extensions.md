---
title: 拡張
shortTitle: 拡張
intro: "Power Rename can be extended by adding your own naming convention."
versions:
  - latest
---

もし C# をかけるなら、Power Rename に独自の命名規則を追加することができます。

1. `IRenameConvention` インターフェースを実装したクラスを作成します。
2. クラスに `[DisplayName]` 属性を追加します。
3. ドロップダウンに表示するために `ToString()` をオーバーライドします。

例:

```csharp
using System.ComponentModel;

using NatsunekoLaboratory.PowerRename.Conventions.Interfaces;

using UnityEditor;

namespace NatsunekoLaboratory.PowerRename.Conventions
{
    [DisplayName("Append Prefix")]
    internal class AppendPrefix : IRenameConvention
    {
        private string _value;

        public AppendPrefix()
        {
            _value = "prefix";
        }

        public void DoLayout()
        {
            _value = EditorGUILayout.TextField("Prefix", _value);
        }

        public void BeginDryRun()
        {
            // nothing to do
        }

        public void EndDryRun()
        {
            // nothing to do
        }

        public string DoRename(string current)
        {
            return $"{_value}{current}";
        }

        public override string ToString()
        {
            return $"Add \"{_value}\" to prefix";
        }
    }
}
```
