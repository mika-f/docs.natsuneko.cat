---
title: Security Guides
shortTitle: Security Guides
intro: ""
versions:
  - latest
---

This add-on uses a technology called [DLL Injection](https://www.wikiwand.com/en/DLL%20injection) to achieve the following behaviours:

- Receive the events on drop of Blender

This is because Blender does not provide events to handle drops in the usual way.
So this add-on loads a file named `blender-injection.dll` from the add-on's directory and replace function internally.
This can expose users to the following security risks:

1. If you replace `blender-injection.dll` by any operation, arbitrary native code will be executed.
2. If you replace `blender.exe` by any operation, it may cause unintended behaviour.

## Why did choose this method?

Blender does not provide an event to receive file drops, and similar requests and patches have been submitted by several developers in the past, but for some reason have been rejected.
Therefore, this method is adopted because it is impossible to create a normal add-on.
