---
title: Udon Analyzer ディクショナリ
---

## テキスト辞書

Udon Analyzer は、プロジェクト内の API 辞書ファイルを参照します。これらのファイルが存在する場合、次のファイルが参照されます。

- `PublicAPI.Shipped.txt`
- `PublicAPI.Shipped.*.txt`

### フォーマット

`PublicAPI.Shipped.txt` は次のフォーマットになります。

```plain
T:N.AllowedType
```

これは、BannedApiAnalyzers と同じフォーマットであり、以下の表と同じ結果が得られる限り、VRChat Udon の外でも使用できます。

| Symbol in Source                   | Entry in PublicAPI.Shipped.txt                     |
| ---------------------------------- | -------------------------------------------------- |
| `class AllowedType`                | `T:N.AllowedType`                                  |
| `class AllowedType<T>`             | `` T:N.AllowedType`1 ``                            |
| `AllowedType()`                    | `M:N.AllowedType#ctor`                             |
| `int AllowedMethod()`              | `M:N.AllowedType.AllowedMethod`                    |
| `void AllowedMethod(int i)`        | `M:N.AllowedType.AllowedMethod(System.Int32)`      |
| `void AllowedMethod<T>(T t)`       | ``` M:N.AllowedType.AllowedMethod`1(``0) ```       |
| `void AllowedMethod<T>(Func<T> f)` | ``` M:N.AllowedType.AllowedMethod`1(Func{``0}) ``` |
| `string AllowedField` (Get)        | `F:N.AllowedType.AllowedField_get`                 |
| `string AllowedField` (Set)        | `F:N.AllowedType.AllowedField_set`                 |
| `string AllowedProperty { get; } ` | `P:N.AllowedType.AllowedProperty_get`              |
| `string AllowedProperty { set; } ` | `P:N.AllowedType.AllowedProperty_set`              |
