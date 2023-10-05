---
title: Overview
shortTitle: Overview
intro: "UStyled is a next-generation utility-first USS framework for Unity. Inspired by UnoCSS, Windi CSS and TailwindCSS."
versions:
  - latest
---

UStyled is the UnoCSS inspired instant on-demand atomic USS engine.

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
