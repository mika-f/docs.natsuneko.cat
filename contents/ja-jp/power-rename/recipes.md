---
title: レシピ
shortTitle: レシピ
versions:
  - latest
---

この記事では Power Rename のレシピを紹介します。

## 3 桁の数字を末尾に追加し、既存の数字を削除する

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
