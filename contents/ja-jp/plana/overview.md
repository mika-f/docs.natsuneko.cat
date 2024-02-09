---
title: Overview
shortTitle: Overview
intro: "Plana は VRChat UdonSharp と Unity の為に最適化されたソースコード難読化ツールです。"
versions:
  - latest
---

Plana は VRChat UdonSharp と Unity の為に最適化された[ソースコード難読化ツール](<https://www.wikiwand.com/ja/%E9%9B%A3%E8%AA%AD%E5%8C%96_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)>) です。
難読化を行うことで、悪質なユーザーからのソースコードの保護、解析までの時間稼ぎ、スクリプトキディなどからの悪質な利用をある程度防ぐことが可能です。

## サンプル

以下は、難読化を行う前のコードと、難読化を行った後のコード (それぞれ UdonSharp と UdonAssembly) の例です。

### 元ソース

```csharp:Example.cs
using UdonSharp;

using UnityEngine;

using VRC.Udon.Common.Interfaces;

namespace UdonSharpExample
{
    public class Example : UdonSharpBehaviour
    {
        // UdonSharpBehaviour Class (Affects the Inspector)
        [SerializeField]
        private AnotherExample anotherExample;

        private void Start()
        {
            // Same as: anotherExample.GetProgramVariable("publicBoolean");
            if (anotherExample.publicBoolean)
                // Same as: anotherExample.SendCustomEvent("RunMethod");
                anotherExample.RunMethod();
        }

        // VRChat Event
        public override void Interact()
        {
            // Same as: SendCustomEvent("DoStuff");
            DoStuff();
        }

        public void DoStuff()
        {
            // This will be sent to all clients and run locally on each one (including the one sending)
            SendCustomNetworkEvent(NetworkEventTarget.All, "NetworkEventStuff");
        }

        /* plana:disable */
        public void NetworkEventStuff()
        {
            // Same as: anotherExample.SetProgramVariable("publicBoolean", false);
            anotherExample.publicBoolean = false;

            // Same as: anotherExample.SendCustomEvent("RunMethod");
            anotherExample.RunMethod();

            anotherExample.SendCustomNetworkEvent(NetworkEventTarget.Owner, "DoOwnerStuff");
        }
    }
}
```

```csharp:AnotherExample.cs
using UdonSharp;

namespace UdonSharpExample
{
    public class AnotherExample : UdonSharpBehaviour
    {
        public bool publicBoolean;

        public void RunMethod()
        {
            // some stuff
        }

        /* plana:disable */
        public void DoOwnerStuff()
        {
            // some stuff
        }
    }
}
```

```asm:Example.asm
.data_start
    .export anotherExample
    __refl_typeid: %SystemInt64, null
    __refl_typename: %SystemString, null
    __intnl_returnJump_SystemUInt32_0: %SystemUInt32, null
    anotherExample: %VRCUdonUdonBehaviour, null
    __const_SystemUInt32_0: %SystemUInt32, null
    __const_SystemString_0: %SystemString, null
    __const_SystemString_1: %SystemString, null
    __gintnl_SystemUInt32_0: %SystemUInt32, null
    __this_VRCUdonUdonBehaviour_0: %VRCUdonUdonBehaviour, this
    __const_VRCUdonCommonInterfacesNetworkEventTarget_0: %VRCUdonCommonInterfacesNetworkEventTarget, null
    __const_SystemString_2: %SystemString, null
    __const_SystemBoolean_0: %SystemBoolean, null
    __const_VRCUdonCommonInterfacesNetworkEventTarget_1: %VRCUdonCommonInterfacesNetworkEventTarget, null
    __const_SystemString_3: %SystemString, null
    __intnl_SystemObject_0: %SystemObject, null
    __intnl_SystemBoolean_0: %SystemBoolean, null
    __intnl_VRCUdonUdonBehaviour_0: %VRCUdonUdonBehaviour, null
    __intnl_VRCUdonUdonBehaviour_1: %VRCUdonUdonBehaviour, null
.data_end
.code_start
    .export _start
    _start:
        PUSH, __const_SystemUInt32_0
#
# UdonSharpExample.Example.Start()
#
        PUSH, anotherExample
        PUSH, __const_SystemString_0
        PUSH, __intnl_SystemObject_0
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__GetProgramVariable__SystemString__SystemObject"
        PUSH, __intnl_SystemObject_0
        PUSH, __intnl_SystemBoolean_0
        COPY
        PUSH, __intnl_SystemBoolean_0
        JUMP_IF_FALSE, 0x00000078
        PUSH, anotherExample
# Cow dirty
        PUSH, anotherExample
        PUSH, __intnl_VRCUdonUdonBehaviour_0
        COPY
        PUSH, __const_SystemString_1
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomEvent__SystemString__SystemVoid"
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export _interact
    _interact:
        PUSH, __const_SystemUInt32_0
#
# UdonSharpExample.Example.Interact()
#
        PUSH, __gintnl_SystemUInt32_0
# Calling UdonSharpExample.Example.DoStuff()
        JUMP, 0x000000C0
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export DoStuff
    DoStuff:
        PUSH, __const_SystemUInt32_0
#
# UdonSharpExample.Example.DoStuff()
#
        PUSH, __this_VRCUdonUdonBehaviour_0
        PUSH, __const_VRCUdonCommonInterfacesNetworkEventTarget_0
        PUSH, __const_SystemString_2
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomNetworkEvent__VRCUdonCommonInterfacesNetworkEventTarget_SystemString__SystemVoid"
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export NetworkEventStuff
    NetworkEventStuff:
        PUSH, __const_SystemUInt32_0
#
# UdonSharpExample.Example.NetworkEventStuff()
#
        PUSH, anotherExample
        PUSH, __const_SystemString_0
        PUSH, __const_SystemBoolean_0
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SetProgramVariable__SystemString_SystemObject__SystemVoid"
        PUSH, anotherExample
# Cow dirty
        PUSH, anotherExample
        PUSH, __intnl_VRCUdonUdonBehaviour_1
        COPY
        PUSH, __const_SystemString_1
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomEvent__SystemString__SystemVoid"
        PUSH, anotherExample
        PUSH, __const_VRCUdonCommonInterfacesNetworkEventTarget_1
        PUSH, __const_SystemString_3
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomNetworkEvent__VRCUdonCommonInterfacesNetworkEventTarget_SystemString__SystemVoid"
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
.code_end
```

```asm:AnotherExample.asm
.data_start
    .export publicBoolean
    __refl_typeid: %SystemInt64, null
    __refl_typename: %SystemString, null
    __intnl_returnJump_SystemUInt32_0: %SystemUInt32, null
    publicBoolean: %SystemBoolean, null
    __const_SystemUInt32_0: %SystemUInt32, null
.data_end
.code_start
    .export RunMethod
    RunMethod:
        PUSH, __const_SystemUInt32_0
#
# UdonSharpExample.AnotherExample.RunMethod()
#
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export DoOwnerStuff
    DoOwnerStuff:
        PUSH, __const_SystemUInt32_0
#
# UdonSharpExample.AnotherExample.DoOwnerStuff()
#
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
.code_end
```

### 難読化後ソース

```csharp:Example.cs
using UdonSharp;

using UnityEngine;

using VRC.Udon.Common.Interfaces;

namespace _0xa35e927e
{
    public class Example : UdonSharpBehaviour
    {
        public void NetworkEventStuff()
        {
            _0x86b1fcff._0x59fb9616 = false;
            _0x86b1fcff._0x741c80eb();
            _0x86b1fcff.SendCustomNetworkEvent(NetworkEventTarget.Owner, "DoOwnerStuff");
        }

        private void Start()
        {
            // Same as: anotherExample.GetProgramVariable("publicBoolean");
            if (_0x86b1fcff._0x59fb9616)
                _0x86b1fcff._0x741c80eb();
        }

        // UdonSharpBehaviour Class (Affects the Inspector)
        [SerializeField]
        private AnotherExample _0x86b1fcff;
        // VRChat Event
        public override void Interact()
        {
            _0x30909886();
        }

        public void _0x30909886()
        {
            // This will be sent to all clients and run locally on each one (including the one sending)
            SendCustomNetworkEvent(NetworkEventTarget.All, "NetworkEventStuff");
        }
    }
}
```

```csharp:AnotherExample.cs
using UdonSharp;

namespace _0xa35e927e
{
    public class AnotherExample : UdonSharpBehaviour
    {
        public bool _0x59fb9616;

        public void DoOwnerStuff()
        {
        // some stuff
        }

        public void _0x741c80eb()
        {
        // some stuff
        }
    }
}
```

```asm:Example.asm
.data_start
    .export _0x86b1fcff
    __refl_typeid: %SystemInt64, null
    __refl_typename: %SystemString, null
    __intnl_returnJump_SystemUInt32_0: %SystemUInt32, null
    _0x86b1fcff: %VRCUdonUdonBehaviour, null
    __const_SystemUInt32_0: %SystemUInt32, null
    __const_SystemBoolean_0: %SystemBoolean, null
    __const_SystemString_0: %SystemString, null
    __const_SystemString_1: %SystemString, null
    __const_VRCUdonCommonInterfacesNetworkEventTarget_0: %VRCUdonCommonInterfacesNetworkEventTarget, null
    __const_SystemString_2: %SystemString, null
    __gintnl_SystemUInt32_0: %SystemUInt32, null
    __this_VRCUdonUdonBehaviour_0: %VRCUdonUdonBehaviour, this
    __const_VRCUdonCommonInterfacesNetworkEventTarget_1: %VRCUdonCommonInterfacesNetworkEventTarget, null
    __const_SystemString_3: %SystemString, null
    __intnl_VRCUdonUdonBehaviour_0: %VRCUdonUdonBehaviour, null
    __intnl_SystemObject_0: %SystemObject, null
    __intnl_SystemBoolean_0: %SystemBoolean, null
    __intnl_VRCUdonUdonBehaviour_1: %VRCUdonUdonBehaviour, null
.data_end
.code_start
    .export NetworkEventStuff
    NetworkEventStuff:
        PUSH, __const_SystemUInt32_0
#
# _0xa35e927e.Example.NetworkEventStuff()
#
        PUSH, _0x86b1fcff
        PUSH, __const_SystemString_0
        PUSH, __const_SystemBoolean_0
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SetProgramVariable__SystemString_SystemObject__SystemVoid"
        PUSH, _0x86b1fcff
# Cow dirty
        PUSH, _0x86b1fcff
        PUSH, __intnl_VRCUdonUdonBehaviour_0
        COPY
        PUSH, __const_SystemString_1
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomEvent__SystemString__SystemVoid"
        PUSH, _0x86b1fcff
        PUSH, __const_VRCUdonCommonInterfacesNetworkEventTarget_0
        PUSH, __const_SystemString_2
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomNetworkEvent__VRCUdonCommonInterfacesNetworkEventTarget_SystemString__SystemVoid"
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export _start
    _start:
        PUSH, __const_SystemUInt32_0
#
# _0xa35e927e.Example.Start()
#
        PUSH, _0x86b1fcff
        PUSH, __const_SystemString_0
        PUSH, __intnl_SystemObject_0
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__GetProgramVariable__SystemString__SystemObject"
        PUSH, __intnl_SystemObject_0
        PUSH, __intnl_SystemBoolean_0
        COPY
        PUSH, __intnl_SystemBoolean_0
        JUMP_IF_FALSE, 0x00000100
        PUSH, _0x86b1fcff
# Cow dirty
        PUSH, _0x86b1fcff
        PUSH, __intnl_VRCUdonUdonBehaviour_1
        COPY
        PUSH, __const_SystemString_1
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomEvent__SystemString__SystemVoid"
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export _interact
    _interact:
        PUSH, __const_SystemUInt32_0
#
# _0xa35e927e.Example.Interact()
#
        PUSH, __gintnl_SystemUInt32_0
# Calling _0xa35e927e.Example._0x30909886()
        JUMP, 0x00000148
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export _0x30909886
    _0x30909886:
        PUSH, __const_SystemUInt32_0
#
# _0xa35e927e.Example._0x30909886()
#
        PUSH, __this_VRCUdonUdonBehaviour_0
        PUSH, __const_VRCUdonCommonInterfacesNetworkEventTarget_1
        PUSH, __const_SystemString_3
        EXTERN, "VRCUdonCommonInterfacesIUdonEventReceiver.__SendCustomNetworkEvent__VRCUdonCommonInterfacesNetworkEventTarget_SystemString__SystemVoid"
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
.code_end
```

```asm:AnotherExample.asm
.data_start
    .export _0x59fb9616
    __refl_typeid: %SystemInt64, null
    __refl_typename: %SystemString, null
    __intnl_returnJump_SystemUInt32_0: %SystemUInt32, null
    _0x59fb9616: %SystemBoolean, null
    __const_SystemUInt32_0: %SystemUInt32, null
.data_end
.code_start
    .export DoOwnerStuff
    DoOwnerStuff:
        PUSH, __const_SystemUInt32_0
#
# _0xa35e927e.AnotherExample.DoOwnerStuff()
#
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
    .export _0x741c80eb
    _0x741c80eb:
        PUSH, __const_SystemUInt32_0
#
# _0xa35e927e.AnotherExample._0x741c80eb()
#
        PUSH, __intnl_returnJump_SystemUInt32_0
        COPY
        JUMP_INDIRECT, __intnl_returnJump_SystemUInt32_0
.code_end
```
