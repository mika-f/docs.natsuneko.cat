---
title: RefractionsResolver.Get Method
shortTitle: RefractionsResolver.Get
intro: Reference
versions:
  - latest
  - "2.0"
---

## Definition

Namespace: [Refractions](./refractions)  
Assembly: Refractions.dll

This class resolves the root assembly for provided type.

```csharp:C#
public Refraction<T> Get<T>(string fullname) where T : class;
```

## Parameters

**`fullname`** [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)  
The full name of the type to resolve.

## Returns

[Refraction&lt;T>](./refractions.refraction)  
The resolved Refraction instance for the provided type.

## Applies to

| Product     | Version |
| ----------- | ------- |
| Refractions | 1.0     |
