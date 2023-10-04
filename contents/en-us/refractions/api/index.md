---
title: API
shortTitle: API
intro: Refractions is a .NET reflection library for .NET Standard 2.0 (for Unity backward compatibles).
versions:
  - latest

navigation:
  children:
    - ./
    - ./refractions
---

## Refractions namespace

Refractions.RefractionResolver is a class to resolve the refraction.  
This class is used to get the refraction from the assembly, type, type full name, fully qualified type name, fully qualified assembly name.

###

### static RefractionResolver.FromAssembly(Assembly assembly)

Get the refraction resolver from Assembly.

#### Parameters

| Name     | Type                                                                                  | Description         |
| -------- | ------------------------------------------------------------------------------------- | ------------------- |
| assembly | [`Assembly`](https://learn.microsoft.com/ja-jp/dotnet/api/system.reflection.assembly) | Assembly to resolve |
