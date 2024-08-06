chmod +x ./updatetypes.sh

Maybe use git submodules?

```
$ git clone --depth=1 https://github.com/tomrus88/BlizzardInterfaceCode.git

$ git clone --depth=1 https://github.com/LuaDist/dkjson

$ ./updatetypes.sh
```

# Architecture

Adding sources so we split up state and visualisations. This makes it cleaner, allows us to easily update from multiple events, and visualize information that came from different events together (eg: arena target + offensive cooldowns).

## Creating frames/sources:

1. Draw all frames immediately, connect all sources immediately
-> This would make it easy and static. But addon load time of this is not great?
-> Measure impact: Warmup (https://github.com/tomchapin/Warmup | https://www.curseforge.com/wow/addons/warmup)
-> We should probably start with this and only change this if necessary
