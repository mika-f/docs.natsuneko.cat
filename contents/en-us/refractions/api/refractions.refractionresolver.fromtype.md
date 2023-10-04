---
title: RefractionsResolver.FromType Method
shortTitle: RefractionsResolver.FromType
intro: Reference
versions:
  - latest
---

## Definition

Namespace: [Refractions](./refractions)  
Assembly: Refractions.dll

Create the RefractionResolver instance from provided type.

## Overloads

| Name                                                                    | Description                               |
| ----------------------------------------------------------------------- | ----------------------------------------- |
| [FromType(Type)](./refractions.refractionresolver.fromtype#fromtype)    | Gets the root assembly for provided type. |
| [FromType&lt;T>()](./refractions.refractionresolver.fromtype#fromtypet) | Gets the root assembly for provided type. |

## FromType(Type)

Gets the root assembly for provided type.

```csharp:C#
public static RefractionResolver FromType(Type t);
```

### Parameters

### Applies to

| Product     | Version |
| ----------- | ------- |
| Refractions | 1.0     |

## FromType&lt;T>()

Gets the root assembly for provided type.

```csharp:C#
public static RefractionResolver FromType<T>();
```

### Applies to

| Product     | Version |
| ----------- | ------- |
| Refractions | 1.0     |
