---
title: RefractionsResolver.FromTypeFullName Method
shortTitle: RefractionsResolver.FromTypeFullName
intro: Reference
versions:
  - latest
---

## Definition

Namespace: [Refractions](./refractions)  
Assembly: Refractions.dll

Create the RefractionResolver instance from provided assembly.

```csharp:C#
public static RefractionResolver FromTypeFullName(string fullname);
```

## Parameters

**`fullname`** [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)  
The assembly instance to resolve.

## Returns

[RefractionResolver](./refractions.refractionresolver)  
The resolved Refraction instance for the provided type.

## Applies to

| Product     | Version |
| ----------- | ------- |
| Refractions | 1.0     |
