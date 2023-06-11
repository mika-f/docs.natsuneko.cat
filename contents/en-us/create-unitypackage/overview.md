---
title: Overview
shortTitle: Overview
intro: "@natsuneko-laboratory/create-unitypackage is a GitHub Actions to create UnityPackage from your Unity project without installing Unity Editor."
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/create-unitypackage` has no dependencies to Unity Editor and other external softwares (likes 7-Zip on Windows, gz and tar commands on Unix), so you can use this actions on any platform (such as Customized Self-Hosted Runners).

This actions is also respect `.npmignore` and `.gitignore` to determine which files should be ignored.
It means you can use this actions to create UnityPackage likes `npm pack` or `yarn pack`, and publishing to OpenUPM registry.
