---
title: Overview
shortTitle: Overview
intro: Refractions is a .NET reflection library for .NET Standard 2.0 (for Unity backward compatibles).
versions:
  - latest
---

Refractions provides the interface-based reflection for type-safe and fast reflection.  
For example, you can get/set the value of `public string Name { get; set; }` property by declaring `string Name { get; set; }` in interface.  
Through definition by interface classes, it is possible to ensure runtime exceptions due to ambiguous definitions and type safety at the caller.
