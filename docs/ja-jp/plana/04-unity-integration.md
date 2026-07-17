---
title: Unity Integration
description: Plana を Unity から使う
---

Unity Integration is integrated version of obfuscator, best experience with Unity.

## Window

At the first, open the Obfuscator window from the menubar `Window` > `Natsuneko Laboratory` > `Plana`.

![](https://images.natsuneko.com/f2a36cdc-94b8-4656-b2a2-c1ec50d68b0e.png)

## Preferences

By default, the following options can be configured. This has the same configurability as the option in the CLI version.

### Obfuscate Solution

> **Note**
> Users using Obfuscator from the Unity Integrations (IT'S YOU!) will rarely use this option.  
> Please **uncheck** this option. This behaviour will fixed in the release candidate.

If you set to true, Plana obfuscate the solution (`YourProject.sln`). If set to false, obfuscate the project (`YourAsmDef.csproj`).  
Equivalent to `--workspace xxx.sln` when true.

### Workspace

If you set to false in `Obfuscate Project`, it can be configurable. Specify project (`*.asmdef`) to obfuscate.
**If you want to obfuscate `Assembly-CSharp.csproj` (without using Assembly Definition Files), set to false in `Obfuscate Project` and set to null in `Workspace`.**  
Equivalent to `--workspace xxx.csproj`.

### Write In-Place

Overwrite the file.  
Equivalent to `--write`.

### Output Dir

If you set to false in `Write In-Place`, it can be configurable. Specify output directory for obfuscated sources.  
Equivalent to `--output xxx`.

### Plugins Dir

Plana Plugins directory. By default, set to `externals` in `NatsunekoLaboratory/UdonObfuscator/Plugins`.  
Equivalent to `--plugins xxx`.

### Dry Run

Do not write obfuscate result to file, output to Unity Console (`Debug.Log`).  
Equivalent to `--dry-run`.

## Plugins

In the Plugins section , you can set the options that can be set for loaded plugins and enable or disable them.

![](https://images.natsuneko.com/ba8981b5-cba9-4134-b610-a08a99145dfd.png)

Plugins are not being scanned when the window is displayed. After configure the `Plugins Dir` in `Preferences`, need to manually click the `Scan Plugins` button.

### Scan Plugins

Scan all available plugins.

## Actions

At present, we only support obfuscating the source code.

### Obfuscate

Obfuscate target project.

## Official Plugins

Plana does not perform obfuscation processing if no plugin is specified. Therefore, it is necessary to load any plugin depending on the purpose and obfuscation content.

- ~~[Control Flow Flattening](/plana/control-flow-flattening)~~
- ~~[Dead Code Injection](/plana/plugins/dead-code-injection)~~
- [Disable Console Output](/plana/plugins/disable-console-output)
- ~~[Numbers to Expressions](/plana/plugins/numbers-to-expressions)~~
- ~~[Remove Comments](/plana/plugins/remove-comments)~~
- [Rename Symbols](/plana/plugins/rename-symbols)
- [Shuffle Declarations](/plana/plugins/shuffle-declarations)
- ~~[Shuffle Symbols](/plana/plugins/shuffle-symbols)~~
- ~~[Source Maps](/plana/plugins/source-maps)~~
- ~~[Split Strings](/plana/plugins/split-strings)~~
- ~~[String Encryption](/plana/plugins/string-encryption)~~
