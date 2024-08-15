/** @noSelfInFile */

export type healthinfo = {
  guid: Source<WOWGUID>;
  exists: Source<boolean>;
  class: Source<className>;
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

export type auraInfo = {
  name: string;
  icon: fileID;
  duration: number;
  expiration: number;
  stacks: number;
  source: UnitId;
  spellId: spellID;
};

export type defensiveCdInfo = {
  defensiveCooldownActive: Source<null | auraInfo>;
};
function makeDefensiveCdInfo(): defensiveCdInfo {
  return { defensiveCooldownActive: new Source(null as null | auraInfo) };
}

export type offensiveCdInfo = {
  offensiveCooldownActive: Source<null | auraInfo>;
};
function makeOffensiveCdInfo(): offensiveCdInfo {
  return { offensiveCooldownActive: new Source(null as null | auraInfo) };
}

export type arenaInfo = {
  arenaDpsIndex: Source<null | 1 | 2>;
};
function makeArenaInfo(): arenaInfo {
  return { arenaDpsIndex: new Source(null as null | 1 | 2) };
}

export type externalDefFromPlayerInfo = {
  externalDefFromPlayerActive: Source<null | auraInfo>;
};
function makeExternalDefFromPlayerInfo(): externalDefFromPlayerInfo {
  return { externalDefFromPlayerActive: new Source(null as null | auraInfo) };
}

export type hotInfo = {
  hot0: Source<null | auraInfo>;
  hot1: Source<null | auraInfo>;
  hot2: Source<null | auraInfo>;
  hot3: Source<null | auraInfo>;
  hot4: Source<null | auraInfo>;
  hot5: Source<null | auraInfo>;
  hot6: Source<null | auraInfo>;
};
function makeHotInfo(): hotInfo {
  return {
    hot0: new Source(null as null | auraInfo),
    hot1: new Source(null as null | auraInfo),
    hot2: new Source(null as null | auraInfo),
    hot3: new Source(null as null | auraInfo),
    hot4: new Source(null as null | auraInfo),
    hot5: new Source(null as null | auraInfo),
    hot6: new Source(null as null | auraInfo),
  };
}

export type dotInfo = {
  dots: Source<auraInfo[]>;
};
function makeDotInfo(): dotInfo {
  return { dots: new Source([] as auraInfo[]) };
}

export type sources = {
  numberOfPlayersInGroupOrRaid: Source<number>;
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
    | "myraid5"]: healthinfo &
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
    numberOfPlayersInGroupOrRaid: new Source(1),
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
    // return () => {
    //   this.observers = this.observers.filter((f2) => f2 !== f);
    // };
  }
}

export function observeAll<SOURCES extends Array<Source<any>>>(
  sources: [...SOURCES],
  cb: (ts: {
    [K in keyof SOURCES]: SOURCES[K] extends Source<infer S> ? S : never;
  }) => void,
) {
  for (let source of sources) {
    source.observe(() => {
      cb(sources.map((source) => source.get()) as any);
    });
  }
}
