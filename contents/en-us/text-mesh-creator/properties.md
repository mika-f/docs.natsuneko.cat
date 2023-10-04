---
title: Properties
shortTitle: Properties
intro:
versions:
  - latest
---

TextMesh Creator has the following properties to customize the text mesh.

| Property                | Required | Type                                                     | Description                                  |
| ----------------------- | :------: | -------------------------------------------------------- | -------------------------------------------- |
| Strings                 |   Yes    | `string`                                                 | The string to display.                       |
| Rotation X              |    No    | `float`                                                  | The rotation of the text mesh on the X axis. |
| Rotation Y              |    No    | `float`                                                  | The rotation of the text mesh on the Y axis. |
| Rotation Z              |    No    | `float`                                                  | The rotation of the text mesh on the Z axis. |
| Scale X                 |    No    | `float`                                                  | The scale of the text mesh on the X axis.    |
| Scale Y                 |    No    | `float`                                                  | The scale of the text mesh on the Y axis.    |
| Scale Z                 |    No    | `float`                                                  | The scale of the text mesh on the Z axis.    |
| Font                    |   Yes    | `string`                                                 | The font to use (must be absolute path)      |
| Separate By             |    No    | `Enum[Space, Tab, Character, None]`                      | The separator to use.                        |
| Size                    |    No    | `float`                                                  | The font size to use.                        |
| Thickness               |    No    | `float`                                                  | The font thickness to use.                   |
| Horizontal Alignment    |    No    | `Enum[Left, Center, Right, Justify, Flush]`              | The horizontal alignment to use.             |
| Vertical Alignment      |    No    | `Enum[TopBaseline, Top, Center, Bottom, BottomBaseline]` | The vertical alignment to use.               |
| Character Spacing       |    No    | `float`                                                  | The character spacing to use.                |
| Word Spacing            |    No    | `float`                                                  | The word spacing to use.                     |
| ~~Use Blendshape~~      |    No    | ~~`bool`~~                                               | ~~Use blendshape to display strings~~        |
| Use Decimate            |    No    | `bool`                                                   | Use decimate modifier to reduce vertices     |
| Decimate Ratio          |    No    | `float`                                                  | The ratio of decimate modifier               |
| Separate by Loose Parts |    No    | `bool`                                                   | Separate by loose parts                      |
| Outlined                |    No    | `bool`                                                   | Generate mesh as outlined                    |
| Outline Thickness       |    No    | `float`                                                  | The thickness of outline                     |
| Outline Threshold       |    No    | `float`                                                  | The threshold of outline                     |
| Center to Origin        |    No    | `bool`                                                   | Center to origin                             |
| Enable Preview Mode     |    No    | `bool`                                                   | Enable preview mode                          |
| Enable Legacy Preview   |    No    | `bool`                                                   | Enable legacy preview mode                   |
| Increment From          |    No    | `int`                                                    | The number to start incrementing from        |
| Export Directory        |   Yes    | `string`                                                 | The directory to export the text mesh to     |

## About "Separate By"

The "Separate By" property is used to separate the text mesh by the specified separator.
For example, if you set "Separate By" to "Space", the text mesh will be separated by space.
"None" means that the text mesh will not be separated (all strings into single mesh).

## About "Separate by Loose Parts"

The "Separate by Loose Parts" property is used to separate the text mesh by loose parts.
The "Loose Parts" means that the text mesh will be separated by the specified **space**.
For example, if you apply "Separate by Loose Parts" to the following text mesh, the text mesh will be generated as shown in the figure below.

- Strings: `例`, To: `ｲ`, `歹`, `リ` (`リ` is separated to left and right parts)

It is useful for creating a movie on Unity, Unreal Engine, and other game engines like the following videos.

- https://youtu.be/Qou76O_Rys0?t=138
