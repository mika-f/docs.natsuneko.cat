---
title: Dark Mode
shortTitle: Dark Mode
intro:
versions:
  - latest
---

Dark Mode in UStyled is based on the [UStyled-Polyfills](https://github.com/mika-f/UStyled-Polyfills) library.  
You can do it in UStyled is effortless, just add the variant prefixes like `dark` to your classes.

```xml
<engine:Label class="text-red-400 _dark_text-green-400" />
```

```css
.text-red-400 {
  color: rgba(239, 68, 68, 1);
}

.dark ._dark_text-green-400 {
  color: rgba(16, 185, 129, 1);
}
```

## Class Mode

Class mode gives you better control over when dark mode is enabled.

```csharp
var UStyled = new UStyledCompiler().DefineConfig(new ConfigurationProvider {
  DarkMode = DarkMode.Class
});
```

It detects the parent element's class and applies the dark mode if it contains the `dark` class.

```xml
<engine:VisualElement class="dark">
  <!-- Dark Mode Enabled -->
</engine:VisualElement>

<engine:VisualElement>
  <!-- Dark Mode Disabled -->
</engine:VisualElement>
```

You can use the following snippets to make the color scheme match with the user's system preference, or write our own logic.

```csharp
var container = rootVisualElement.Q<VisualElement>("container");

if (/* If User's System Preference is Dark Mode */) {
  container.AddToClassList("dark");
} else {
  container.RemoveFromClassList("dark");
}
```

## Media Query Mode

In media query mode, it uses the `prefers-color-scheme` media query to detect the user's system preference.

```csharp
var UStyled = new UStyledCompiler().DefineConfig(new ConfigurationProvider {
  DarkMode = DarkMode.MediaQuery
});
```

and

```csharp
using UStyledPolyfills;

public class SomeUxmlRenderer : EditorWindow
{
    private readonly MediaQuery _mediaQuery = new MediaQuery();

    public void OnGUI()
    {
        _mediaQuery.OnUpdate(this);
    }
}
```

If you write the following uxml:

```xml
<engine:Label class="text-red-400 _dark_text-green-400" />
```

```css
.text-red-400 {
  color: rgba(239, 68, 68, 1);
}

@media (prefers-color-scheme: dark) {
  ._dark_text-green-400 {
    color: rgba(16, 185, 129, 1);
  }
}
```
