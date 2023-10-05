---
title: Features
shortTitle: Features
intro: Refractions is a .NET reflection library for .NET Standard 2.0 (for Unity backward compatibles).
versions:
  - latest

navigation:
  children:
    - ./
    - ./value-auto-infer
    - ./shortcuts
    - ./responsive-design
    - ./dark-mode
    - ./important-prefix
---

## Features

If you are familiar with UnoCSS, you will find UStyled is very similar to it. However, UStyled has some unique features that UnoCSS does not have.

### USS Support

UStyled supports USS, which is the Unity's own CSS-like styling system. You can use UStyled with USS, or you can use UStyled without USS.

### Value Auto-Infer

Use arbitrary values in your classes and generate corresponding USS styled automatically.

```xml
<!-- sizes -->
<engine:VisualElement class="p-5px mx-auto" />

<!-- colors -->
<engine:Label class="text-0xccccc bg-hex-333333" />
```

### Important Prefix

Prefix any classes with `_i_` to make it `!important`.

```xml
<engine:VisualElement class="_i_p-5px _i_mx-auto" />
```
