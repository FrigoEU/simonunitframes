export type context = {
  friendlyFramesParent: SimpleFrame;
  arenaFramesParent: SimpleFrame;
  unitFrames: {
    [unit in
      | UnitIdPlayer
      | UnitIdParty
      | UnitIdRaidPlayer
      | UnitIdArena]: null | unitFrameStruct;
  };
  config: {
    unitFrame_fullHeight: number;
    unitFrame_fullWidth: number;

    unitFrame_verticalGap: number;
    unitFrame_horizontalGap: number;

    unitFrame_cooldownSectionPercentage: number;
    unitFrame_cooldownBackgroundColor: { r: 86; g: 86; b: 86 };
  };
};

export type unitFrameStruct = {
  container: SimpleFrame;
  healthbar: SimpleStatusBar;
  healthbarBackground: SimpleTexture;
};

export function makeContext(): context {
  const context: context = {
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
  };

  context.friendlyFramesParent.Hide();
  context.arenaFramesParent.Hide();

  return context;
}
