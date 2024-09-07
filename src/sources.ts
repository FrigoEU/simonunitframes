/** @noSelfInFile */

import { hotName } from "./auras";

export type healthinfo = {
  guid: Source<WOWGUID>;
  exists: Source<boolean>;
  class: Source<className>;
  name: Source<string>;
  unitId: Source<null | UnitId>;
  isInHealingRange: Source<boolean>;
  health: {
    max: Source<number>;
    current: Source<number>;
  };
};
function makeHealthInfo(): healthinfo {
  return {
    exists: new Source(false),
    guid: new Source(""),
    class: new Source("WARRIOR" as className),
    name: new Source(""),
    unitId: new Source(null as null | UnitId),
    isInHealingRange: new Source(true),
    health: {
      max: new Source(100),
      current: new Source(100),
    },
  };
}

export type targetInfo = {
  target: Source<null | WOWGUID>;
};
function makeTargetInfo(): targetInfo {
  return { target: new Source(null as null | WOWGUID) };
}

export type focusInfo = {
  focus: Source<null | WOWGUID>;
};
function makeFocusInfo(): focusInfo {
  return { focus: new Source(null as null | WOWGUID) };
}

export type defensiveCdInfo = {
  defensiveCooldownActive: Source<null | AuraData>;
};
function makeDefensiveCdInfo(): defensiveCdInfo {
  return { defensiveCooldownActive: new Source(null as null | AuraData) };
}

export type offensiveCdInfo = {
  offensiveCooldownActive: Source<null | AuraData>;
};
function makeOffensiveCdInfo(): offensiveCdInfo {
  return { offensiveCooldownActive: new Source(null as null | AuraData) };
}

export type arenaInfo = {
  arenaDpsIndex: Source<null | 1 | 2>;
};
function makeArenaInfo(): arenaInfo {
  return { arenaDpsIndex: new Source(null as null | 1 | 2) };
}

export type externalDefFromPlayerInfo = {
  externalDefFromPlayerActive: Source<null | AuraData>;
};
function makeExternalDefFromPlayerInfo(): externalDefFromPlayerInfo {
  return { externalDefFromPlayerActive: new Source(null as null | AuraData) };
}

export type hotInfo = { [i in hotName]: Source<null | AuraData> };
function makeHotInfo(): hotInfo {
  return {
    hot0: new Source(null as null | AuraData),
    hot1: new Source(null as null | AuraData),
    hot2: new Source(null as null | AuraData),
    hot3: new Source(null as null | AuraData),
    hot4: new Source(null as null | AuraData),
    hot5: new Source(null as null | AuraData),
    hot6: new Source(null as null | AuraData),
    hot7: new Source(null as null | AuraData),
  };
}

export type dotInfo = {
  dots: Source<AuraData[]>;
};
function makeDotInfo(): dotInfo {
  return { dots: new Source([] as AuraData[]) };
}

export type sources = {
  playerGroupIndexZeroBased: Source<number>;

  player: healthinfo &
    targetInfo &
    focusInfo &
    defensiveCdInfo &
    externalDefFromPlayerInfo &
    offensiveCdInfo &
    hotInfo &
    dotInfo;
} & {
  [party in "party1" | "party2" | "party3" | "party4"]: healthinfo &
    targetInfo &
    defensiveCdInfo &
    externalDefFromPlayerInfo &
    offensiveCdInfo &
    hotInfo &
    dotInfo;
} & {
  // Index is calculated, not the real UnitID!
  [raid in
    | "myraid1"
    | "myraid2"
    | "myraid3"
    | "myraid4"
    | "myraid5"
    | "myraid6"
    | "myraid7"
    | "myraid8"
    | "myraid9"
    | "myraid10"]: healthinfo &
    defensiveCdInfo &
    externalDefFromPlayerInfo &
    hotInfo &
    dotInfo;
} & {
  [arena in "arena1" | "arena2" | "arena3"]: healthinfo &
    targetInfo &
    defensiveCdInfo &
    offensiveCdInfo &
    arenaInfo;
};

export function makeSources(): sources {
  return {
    playerGroupIndexZeroBased: new Source(0),
    player: {
      ...makeHealthInfo(),
      ...makeTargetInfo(),
      ...makeFocusInfo(),
      ...makeDefensiveCdInfo(),
      ...makeExternalDefFromPlayerInfo(),
      ...makeOffensiveCdInfo(),
      ...makeHotInfo(),
      ...makeDotInfo(),
    },
    party1: makePartySources(),
    party2: makePartySources(),
    party3: makePartySources(),
    party4: makePartySources(),

    myraid1: makeRaidSources(),
    myraid2: makeRaidSources(),
    myraid3: makeRaidSources(),
    myraid4: makeRaidSources(),
    myraid5: makeRaidSources(),

    myraid6: makeRaidSources(),
    myraid7: makeRaidSources(),
    myraid8: makeRaidSources(),
    myraid9: makeRaidSources(),
    myraid10: makeRaidSources(),

    arena1: makeArenaSources(),
    arena2: makeArenaSources(),
    arena3: makeArenaSources(),
  };

  function makePartySources(): sources["party1"] {
    return {
      ...makeHealthInfo(),
      ...makeTargetInfo(),
      ...makeDefensiveCdInfo(),
      ...makeExternalDefFromPlayerInfo(),
      ...makeOffensiveCdInfo(),
      ...makeHotInfo(),
      ...makeDotInfo(),
    };
  }

  function makeRaidSources(): sources["myraid1"] {
    return {
      ...makeHealthInfo(),
      ...makeDefensiveCdInfo(),
      ...makeExternalDefFromPlayerInfo(),
      ...makeHotInfo(),
      ...makeDotInfo(),
    };
  }

  function makeArenaSources(): sources["arena1"] {
    return {
      ...makeHealthInfo(),
      ...makeTargetInfo(),
      ...makeDefensiveCdInfo(),
      ...makeOffensiveCdInfo(),
      ...makeArenaInfo(),
    };
  }
}

export class Source<T> implements Source<T> {
  private value: T;
  private observers: ((currentVal: T) => void)[];

  constructor(value: T) {
    this.value = value;
    this.observers = [];
  }
  public get(): T {
    return this.value;
  }
  public set(newval: T): void {
    if (this.value !== newval) {
      this.value = newval;
      this.observers.forEach(function (obs) {
        obs(newval);
      });
    }
  }
  public observe(f: (currentVal: T) => void) {
    this.observers.push(f);
    f(this.get());
    // return () => {
    //   this.observers = this.observers.filter((f2) => f2 !== f);
    // };
  }
}

export function observeAll<SOURCES extends Array<Source<any>>>(
  sources: [...SOURCES],
  cb: (ts: {
    [K in keyof SOURCES]: SOURCES[K] extends Source<infer S> ? S : never;
  }) => void
) {
  for (let source of sources) {
    source.observe(() => {
      cb(sources.map((source) => source.get()) as any);
    });
  }
}
