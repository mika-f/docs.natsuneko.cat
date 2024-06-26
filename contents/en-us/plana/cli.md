---
title: Command Line Interface
shortTitle: Command Line Interface
intro: "Standalone version of Obfuscator."
versions:
  - latest
---

## Args

Plana supports the following command line arguments.

```bash
Description:

Usage:
  obfuscate [options]

Options:
  --workspace <workspace>                         path to workspace .csproj or .sln
  --dry-run                                       dry-run obfuscate [default: False]
  --write                                         write obfuscated source code in place [default: False]
  --log-level <Error|Normal|Silent|Verbose|Warn>  log detail level [default: Normal]
  --plugins <plugins>                             path to plugins directory loaded from [default: ./]
  --output <output>                               path to directory write to
  --version                                       Show version information
  -?, -h, --help                                  Show help and usage information
```

Usage:

```bash
$ plana-cli obfuscate --workspace ./UdonObfuscator.Testing.csproj --plugins ./Library/plugins --dry-run --rename-symbols --enum-attributes
```

## Options

### Workspace

Specify the obfuscation workspace.
If you specify `.csproj` file, obfuscator obfuscates project files only.
If you specify `.sln` file, obfuscator obfuscates all files in Unity project.

```bash:example
$ plana-cli obfuscate --workspace ./AudioLink.csproj
# or
$ plana-cli obfuscate --workspace ./UnityProject.sln
```

### Dry Run

If you want to try obfuscate, please specify `--dry-run` flag. The obfuscator does not write obfuscation results to files.

```bash:example
$ plana-cli obfuscate --dry-run
```

### Write

If you want to write obfuscation result **in-place**, please specify `--write` flag.

```bash:example
$ plana-cli obfuscate --write
```

### Log Level

Specify the level of log to output to console.

```bash:example
$ plana-cli obfuscate --log-level silent
```

### Plugins

Specify the directory of plugins.

```bash:example
$ plana-cli obfuscate --plugins ./plugins
```

### Output

Specify the output directory, if you **don't write obfuscation result in-place**, specify this opt.

```bash:example
$ plana-cli obfuscate --output ./dist
```

## Official Plugins

Plana does not perform obfuscation processing if no plugin is specified. Therefore, it is necessary to load any plugin depending on the purpose and obfuscation content.

- ~~[Control Flow Flattening](./plugins/control-flow-flattening)~~
- ~~[Dead Code Injection](./plugins/dead-code-injection)~~
- [Disable Console Output](./plugins/disable-console-output)
- ~~[Numbers to Expressions](./plugins/numbers-to-expressions)~~
- ~~[Remove Comments](./plugins/remove-comments)~~
- [Rename Symbols](./plugins/rename-symbols)
- [Shuffle Declarations](./plugins/shuffle-declarations)
- ~~[Shuffle Symbols](./plugins/shuffle-symsols)~~
- ~~[Source Maps](./plugins/source-maps)~~
- ~~[Split Strings](./plugins/split-strings)~~
- ~~[String Encryption](./plugins/string-encryption)~~
