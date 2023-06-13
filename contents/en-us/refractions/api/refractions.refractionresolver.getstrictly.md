---
title: RefractionsResolver.GetStrictly Method
shortTitle: RefractionsResolver.GetStrictly
intro: Reference
versions:
  - latest
  - "2.0"
---

## Definition

Namespace: [Refractions](./refractions)  
Assembly: Refractions.dll

This class resolves the root assembly for provided type.
This method is a strict version of [Get&lt;T>(string)](./refractions.refractionresolver.get). It will comparing the Class Name with `AssemblyQualifiedName`.

```csharp:C#
public Refraction<T> GetStrictly<T>(string fullyQualifiedTypeName) where T : class;
```

## Parameters

**`fullyQualifiedTypeName`** [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)  
The name of the type to resolve.

## Returns

[Refraction&lt;T>](./refractions.refraction)  
The resolved Refraction instance for the provided type.

## Applies to

| Product     | Version |
| ----------- | ------- |
| Refractions | 1.0     |
