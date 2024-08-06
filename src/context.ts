/** @noSelfInFile */

export type config = {
  unitFrame_fullHeight: number;
  unitFrame_fullWidth: number;

  unitFrame_verticalGap: number;
  unitFrame_horizontalGap: number;

  unitFrame_cooldownSectionPercentage: number;
  unitFrame_cooldownBackgroundColor: { r: number; g: number; b: number };

  unitFrame_bigIconSize: number;
  unitFrame_bigIconGap: number;

  unitFrame_smallIconSize: number;
  unitFrame_smallIconGap: number;

  unitFrame_targetHighlightColor: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  unitFrame_focusHighlightColor: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
};

export type context = {
  playerClass: { name: className; classId: number };

  friendlyFramesParent: SimpleFrame;
  arenaFramesParent: SimpleFrame;
  unitFrames: {
    [unit in "party3" | "party4" | UnitIdRaidPlayer]:
      | null
      | (unitFrameStruct & buffFrames);
  } & {
    [unit in UnitIdArena]: null | unitFrameStruct;
  } & {
    player: null | (unitFrameStruct & arenaTargetFrames & buffFrames);
    party1: null | (unitFrameStruct & arenaTargetFrames & buffFrames);
    party2: null | (unitFrameStruct & arenaTargetFrames & buffFrames);
  };

  arenaInfo: null | {
    arena1: null | { role: role; spec: specializationId; icon: iconFilePath };
    arena2: null | { role: role; spec: specializationId; icon: iconFilePath };
    arena3: null | { role: role; spec: specializationId; icon: iconFilePath };
  };

  config: config;
};

export type arenaTargetFrames = {
  arenaDps1TargetFrame: myAuraFrame;
  arenaDps2TargetFrame: myAuraFrame;
};

export type buffFrames = {
  defensiveCooldownAuraFrame: myAuraFrame;
  externalDefensiveBuffAuraFrame: myAuraFrame;
  hotAuraFrames: myAuraFrame[];
};

export type myAuraFrame = SimpleFrame & {
  // Comes from template, via parentKey
  icon: SimpleTexture;
  count: SimpleFontString;
  name: SimpleFontString;
  border: SimpleTexture;
  cooldown: SimpleFrame & CooldownFrame;
};

export type unitFrameStruct = {
  container: SimpleFrame;
  healthbar: SimpleStatusBar;
  healthbarBackground: SimpleTexture;
  highlightContainerFrame: SimpleFrame;
  cooldownSection: SimpleFrame;
};

export function makeConfig(): config {
  return {
    unitFrame_fullHeight: 150,
    unitFrame_fullWidth: 400,

    unitFrame_verticalGap: 8,
    unitFrame_horizontalGap: 20,

    unitFrame_cooldownSectionPercentage: 0.4,
    unitFrame_cooldownBackgroundColor: { r: 86, g: 86, b: 86 },

    unitFrame_targetHighlightColor: {
      r: 0,
      g: 0,
      b: 200,
      a: 1,
    },
    unitFrame_focusHighlightColor: {
      r: 255,
      g: 20,
      b: 147,
      a: 1,
    },

    unitFrame_bigIconSize: 48,
    unitFrame_bigIconGap: 8,

    unitFrame_smallIconSize: 32,
    unitFrame_smallIconGap: 6,
  };
}

export function makeContext(): context {
  const [_, classname, classId] = UnitClass("player");
  const context: context = {
    playerClass: { name: classname as className, classId },

    friendlyFramesParent: CreateFrame("Frame", "GladiusExPartyFrame", UIParent),
    arenaFramesParent: CreateFrame("Frame", "GladiusExArenaFrame", UIParent),
    unitFrames: {
      player: null,
      party1: null,
      party2: null,
      party3: null,
      party4: null,

      arena1: null,
      arena2: null,
      arena3: null,

      raid1: null,
      raid2: null,
      raid3: null,
      raid4: null,
      raid5: null,
      raid6: null,
      raid7: null,
      raid8: null,
      raid9: null,
      raid10: null,

      raid11: null,
      raid12: null,
      raid13: null,
      raid14: null,
      raid15: null,
      raid16: null,
      raid17: null,
      raid18: null,
      raid19: null,
      raid20: null,

      raid21: null,
      raid22: null,
      raid23: null,
      raid24: null,
      raid25: null,
      raid26: null,
      raid27: null,
      raid28: null,
      raid29: null,
      raid30: null,

      raid31: null,
      raid32: null,
      raid33: null,
      raid34: null,
      raid35: null,
      raid36: null,
      raid37: null,
      raid38: null,
      raid39: null,
      raid40: null,
    },
    config: makeConfig(),
    arenaInfo: null,
  };

  context.friendlyFramesParent.Hide();
  context.arenaFramesParent.Hide();

  return context;
}

export function updateArenaInfo(context: context) {
  if (!context.arenaInfo) {
    context.arenaInfo = {
      arena1: null,
      arena2: null,
      arena3: null,
    };
  }
  const ai = context.arenaInfo;
  for (let [index, unit] of [
    [1, "arena1"],
    [2, "arena2"],
    [3, "arena3"],
  ] as const) {
    const spec = GetArenaOpponentSpec(index);
    if (spec) {
      const specInfo = GetSpecializationInfoForSpecID(
        spec[0],
      ) as unknown as null | specInfo;
      if (specInfo) {
        ai[unit] = {
          spec: specInfo[0],
          icon: specInfo[3],
          role: specInfo[5],
        };
      }
    }
  }
}
