---
title: Responsive Design
shortTitle: Responsive Design
intro:
versions:
  - latest
---

Responsive Design in UStyled is based on the [UStyled-Polyfills](https://github.com/mika-f/UStyled-Polyfills) library.  
You can do it in UStyled is effortless, just add the variant prefixes like `md` to your classes.

```xml
<engine:VisualElement class="p-5px _lg_p-40px" />
```

```css
.p-5px {
  padding: 5px;
}

@media (min-width: 1024px) {
  ._lg_p-40px {
    padding: 40px;
  }
}
```

## Implementation

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

## Breakpoints

| Prefix | Default             |
| ------ | ------------------- |
| `sm`   | (min-width: 640px)  |
| `md`   | (min-width: 768px)  |
| `lg`   | (min-width: 1024px) |
| `xl`   | (min-width: 1280px) |
| `2xl`  | (min-width: 1536px) |

## Customization

You can customize breakpoints in your compiler configurations.

```csharp
var Configuration = new ConfigurationProvider {
  Breakpoints = new Dictionary<string, string> {
    { "sm", "640px" },
    { "md", "768px" },
    { "lg", "1024px" },
    { "xl", "1280px" },
    { "2xl", "1536px" }
  }
};

// for compiler
var UStyled = new UStyledCompiler().DefineConfig(Configuration);

// for polyfills
var MediaQuery = new MediaQuery(Configuration);
```
