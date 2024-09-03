/** @noSelfInFile */

export type config = ReturnType<typeof makeConfig>;

export function makeConfig() {
  return {
    // bartexturepath: "Interface\\RAIDFRAME\\Raid-Bar-Hp-Fill",
    bartexturepath: "Interface\\ChatFrame\\ChatFrameBackground",

    partyAndArenaContainersOffsetY: 0,
    partyAndArenaContainersOffsetX: 500,

    hots_show_timer_text: false,
    dots_show_timer_text: false,
    def_cds_show_timer_text: false,
    off_cds_show_timer_text: false,

    unitFrame_fullHeight: 110,
    unitFrame_fullWidth: 250,

    unitFrame_verticalGap: 8,
    unitFrame_horizontalGap: 20,

    unitFrame_healthbarBgColor: { r: 28, g: 28, b: 28, a: 1 },

    unitFrame_cooldownSectionPercentage_friendly: 0.42,
    unitFrame_cooldownSectionPercentage_arena: 0.5,
    unitFrame_cooldownBackgroundColor: { r: 116, g: 116, b: 116, a: 1 },
    unitFrame_cooldownTopGap: 4,

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

    unitFrame_bigIconSize: 38,
    unitFrame_bigIconGap: 6,

    unitFrame_smallIconSize: 28,
    unitFrame_smallIconGap: 2,
  };
}
