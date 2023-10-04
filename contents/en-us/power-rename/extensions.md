---
title: Extensions
shortTitle: Extensions
intro: "Power Rename can be extended by adding your own naming convention."
versions:
  - latest
---

If you can write C#, you can add your own naming convention to Power Rename.

1. Create a class which implements `IRenameConvention` interface.
2. Add `[DisplayName]` attribute to the class.
3. Override `ToString()` for displaying user-friendly name in the dropdown.

Example Code:

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
