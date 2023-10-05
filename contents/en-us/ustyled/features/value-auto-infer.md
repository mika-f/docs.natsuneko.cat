---
title: Value Auto-Infer
shortTitle: Value Auto-Infer
intro:
versions:
  - latest
---

UStyled will only generate the USS utilities you use, it enabled you to use arbitrary values in your classes and generate corresponding USS styled automatically.

> **Important**
> Limitations of Unity's UXML and USS parser, UStyled can only use alphanumeric, hyphen and underscore characters in class names.

```xml
<!-- sizes -->
<engine:VisualElement class="p-5px mx-auto" />

<!-- colors -->
<engine:Label class="text-0xccccc bg-hex-333333" />
```

## Numbers

```css
/* default = DefaultFontSize = 16 */
p-{number} -> padding: {number * 0.25 * default}px;
```

Example:

```css:css-input
p-5
pt-10
```

```css:css-generated
.p-5 {
    padding: 20px;
}

.pt-10 {
    padding-top: 40px;
}
```

## Sizes

```css
/* size should be ends with 'px' */
p-{size} -> padding: {size};
```

Example:

```css:css-input
p-5px
pt-10px
```

```css:css-generated
.p-5px {
    padding: 5px;
}

.pt-10px {
    padding-top: 10px;
}
```

## Fractions

```css
/* fraction should be format with `1f2` */
w-{fraction} -> width: {fraction -> percent};
```

Example:

```css:css-input
w-1f2
w-1f3
```

```css:css-generated
.w-1f2 {
    width: 50%;
}

.w-1f3 {
    width: 33.333333333333336%;
}
```

## Colors

```css
text-{color}: color: rgba(...);

border-hex-{hex}: border-color: #{hex};
bg-0x{hex}: background-color: #{hex};
```

Example:

```css:css-input
text-cyan-400

border-hex-333333
bg-0x333333
```

```css:css-generated
.text-cyan-400 {
    color: rgba(0, 188, 212, 1);
}

.border-hex-333333 {
    border-color: #333333;
}

.bg-0x333333 {
    background-color: #333333;
}
```

## Variables

```css
bg-var-{variable-name}: background-color: var(--{variable-name});
```

Example:

```css:css-input
bg-var-primary
```

```css:css-generated
.bg-var-primary {
    background-color: var(--primary);
}
```

## Multiple Values

If you want to pass multiple values, you can use `_` to separate them.

```css
p-{a}_{b} -> padding: {a} {b};
```

Example:

```css:css-input
p-5px_10px
```

```css:css-generated
.p-5px_10px {
    padding: 5px 10px;
}
```
