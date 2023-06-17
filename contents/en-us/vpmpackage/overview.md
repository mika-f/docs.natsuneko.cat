---
title: Overview
shortTitle: Overview
intro: "@natsuneko-laboratory/vpmpackage is a Node.js package to create VPM package from your Unity project without installing Unity Editor and VRChat SDK."
versions:
  - latest
  - "2.0"
---

`@natsuneko-laboratory/vpmpackage` has no dependencies to Unity Editor, project directory structure(s), and other external softwares (likes 7-Zip on Windows, gz and tar commands on Unix), so you can use this actions on any platform (such as Windows, Linux, and macOS).
This package can have the same folder structure as creating a normal UnityPackage, so you can easily publish to multiple platforms such as OpenUPM and normal UnityPackage.

This package provides simply one method to create vpmpackage:

- `archive`
