---
title: Recipes
shortTitle: Recipes
versions:
  - latest
---

This article describe some recipes for Power Rename.

## Add 3-digit number to suffix, starts with 0, and remove existing suffix

1. Replace by regular expression: (Pattern: `\(\d+\)`, To: `(empty)`)
2. Remove trailing spaces
3. Append Suffix (Value: `_`)
4. Append Sequential Number to Suffix (Digits: `3`, Start Index: `0`)

Example:

| Before     | After      |
| ---------- | ---------- |
| `File`     | `File_000` |
| `File (1)` | `File_001` |
| `File (2)` | `File_002` |
