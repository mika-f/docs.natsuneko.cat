---
title: RefractionsResolver.GetLaxity Method
shortTitle: RefractionsResolver.GetLaxity
intro: Reference
versions:
  - latest
  - "2.0"
---

## Definition

Namespace: [Refractions](./refractions)  
Assembly: Refractions.dll

This class resolves the root assembly for provided type.
This method is a lax version of [Get&lt;T>(string)](./refractions.refractionresolver.get). It will return the first class that matches the provided type name, regardless of version or culture.

```csharp:C#
public Refraction<T> GetLaxity<T>(string name) where T : class;
```

## Parameters

**`name`** [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)  
The name of the type to resolve.

## Returns

[Refraction&lt;T>](./refractions.refraction)  
The resolved Refraction instance for the provided type.

## Applies to

| Product     | Version |
| ----------- | ------- |
| Refractions | 1.0     |
