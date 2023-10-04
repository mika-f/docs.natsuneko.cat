---
title: Supports Conventions
shortTitle: Conventions
versions:
  - latest
---

Power Rename supports the following naming conventions by default.
If you want to add your own convention, please visit [extensions](./extensions) page.

## Append Prefix

Append specified prefix to the name.

| Key      | Type     | Example | Description      |
| -------- | -------- | ------- | ---------------- |
| `Prefix` | `string` | `New`   | Prefix to append |

Example:

| Prefix | Before | After     |
| ------ | ------ | --------- |
| `New`  | `Cube` | `NewCube` |

## Append Sequential Number to Prefix

Append sequential number with digits to the prefix.

| Key           | Type   | Example | Description      |
| ------------- | ------ | ------- | ---------------- |
| `Digits`      | `uint` | `3`     | Number of digits |
| `Start Index` | `int`  | `0`     | Starting Number  |

Example:

| Digits | Start Index | Before | After                     |
| ------ | ----------- | ------ | ------------------------- |
| `3`    | `0`         | `Cube` | `000Cube`, `001Cube`, ... |

## Append Sequential Number to Suffix

Append sequential number with digits to the suffix.

| Key           | Type   | Example | Description      |
| ------------- | ------ | ------- | ---------------- |
| `Digits`      | `uint` | `3`     | Number of digits |
| `Start Index` | `int`  | `0`     | Starting Number  |

Example:

| Digits | Start Index | Before | After                     |
| ------ | ----------- | ------ | ------------------------- |
| `3`    | `0`         | `Cube` | `Cube000`, `Cube001`, ... |

## Append Suffix

Append specified suffix to the name.

| Key      | Type     | Example | Description      |
| -------- | -------- | ------- | ---------------- |
| `Suffix` | `string` | `New`   | Suffix to append |

Example:

| Suffix | Before | After     |
| ------ | ------ | --------- |
| `New`  | `Cube` | `CubeNew` |

## Remove Leading Spaces

Remove leading spaces from the name.

Example:

| Before   | After  |
| -------- | ------ |
| `  Cube` | `Cube` |

## Remove Prefix

Remove specified prefix from the name.

| Key      | Type   | Example | Description                |
| -------- | ------ | ------- | -------------------------- |
| `Length` | `uint` | `3`     | Length of prefix to remove |

Example:

| Length | Before    | After  |
| ------ | --------- | ------ |
| `3`    | `NewCube` | `Cube` |

## Remove Suffix

Remove specified suffix from the name.

| Key      | Type   | Example | Description                |
| -------- | ------ | ------- | -------------------------- |
| `Length` | `uint` | `3`     | Length of suffix to remove |

Example:

| Length | Before    | After  |
| ------ | --------- | ------ |
| `3`    | `CubeNew` | `Cube` |

## Remove Trailing Spaces

Remove trailing spaces from the name.

Example:

| Before   | After  |
| -------- | ------ |
| `Cube  ` | `Cube` |

## Replace by Regular Expression

Replace the name by regular expression.

| Key       | Type     | Example   | Description                |
| --------- | -------- | --------- | -------------------------- |
| `Pattern` | `string` | `\(\d+\)` | Regular expression pattern |
| `To`      | `string` | `String`  | Replacement string         |

Example:

| Pattern   | To       | Before    | After        |
| --------- | -------- | --------- | ------------ |
| `\(\d+\)` | `String` | `Cube(1)` | `CubeString` |

## Replace by String

Replace the name by string.

| Key    | Type     | Example  | Description        |
| ------ | -------- | -------- | ------------------ |
| `From` | `string` | `Cube`   | String to replace  |
| `To`   | `string` | `String` | Replacement string |

Example:

| From   | To       | Before    | After       |
| ------ | -------- | --------- | ----------- |
| `Cube` | `String` | `Cube(1)` | `String(1)` |

## To kebab-case

Convert the name to kebab-case.

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `game-object` |

## To lowerCamelCase

Convert the name to lowerCamelCase.

Example:

| Before       | After        |
| ------------ | ------------ |
| `GameObject` | `gameObject` |

## To lowercase

Convert the name to lowercase.

Example:

| Before       | After        |
| ------------ | ------------ |
| `GameObject` | `gameobject` |

## To snake_case

Convert the name to snake_case.

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `game_object` |

## To Train-Case

Convert the name to Train-Case.

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `Game-Object` |

## To UpperCamelCase

Convert the name to UpperCamelCase.

Example:

| Before       | After        |
| ------------ | ------------ |
| `gameObject` | `GameObject` |

## To UPPERCASE

Convert the name to UPPERCASE.

Example:

| Before       | After        |
| ------------ | ------------ |
| `GameObject` | `GAMEOBJECT` |

## To UPPER_SNAKE_CASE

Convert the name to UPPER_SNAKE_CASE.

Example:

| Before       | After         |
| ------------ | ------------- |
| `GameObject` | `GAME_OBJECT` |
