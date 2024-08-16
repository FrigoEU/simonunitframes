chmod +x ./updatetypes.sh

Maybe use git submodules?

```
$ git clone --depth=1 https://github.com/tomrus88/BlizzardInterfaceCode.git

$ git clone --depth=1 https://github.com/LuaDist/dkjson

$ ./updatetypes.sh
```

# Architecture

Adding sources so we split up state and visualisations. This makes it cleaner, allows us to easily update from multiple events, and visualize information that came from different events together (eg: arena target + offensive cooldowns).

So: We listen to a bunch of events we're interested in and translate these into our internal datamodel about things we want to track. This happens pretty much exclusively in main.ts (for now?).

Secondly, we draw all frames statically and wire up the sources: Whenever relevant sources change, we update the frames accordingly. 

Splitting up these two phases:
* allows us to easily debug problems as we can just spit out the state of everything in one go
* it's easy to change behavior as long as rendering stays the same
* you can more easily react to multiple events together
* rendering starts from the clear internal datamodel
* all rendering (both initial and updates) is declared in one go, in one place
* performance is very good

## Creating frames/sources:

1. Draw all frames immediately, connect all sources immediately
-> This would make it easy and static. But addon load time of this is not great?
-> Measure impact: Warmup (https://github.com/tomchapin/Warmup | https://www.curseforge.com/wow/addons/warmup)
-> We should probably start with this and only change this if necessary
