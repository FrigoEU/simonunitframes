/** @noSelfInFile */

export type config = ReturnType<typeof makeConfig>;

export function makeConfig() {
  return {
    // bartexturepath: "Interface\\RAIDFRAME\\Raid-Bar-Hp-Fill",
    bartexturepath: "Interface\\ChatFrame\\ChatFrameBackground",

    partyAndArenaContainersOffsetY: 40,
    partyAndArenaContainersOffsetX: 600,

    hots_show_timer_text: false,
    dots_show_timer_text: false,
    def_cds_show_timer_text: false,
    off_cds_show_timer_text: false,
    off_cds_show: true,

    arenatarget_show_icons: false,

    unitFrame_fullHeight: 112,
    unitFrame_fullWidth: 250,

    unitFrame_verticalGap: 8,
    unitFrame_horizontalGap: 20,

    unitFrame_healthbarBgColor: { r: 28, g: 28, b: 28, a: 1 },
    // unitFrame_absorbsBgColor: { r: 255, g: 0, b: 0, a: 1 },
    // unitFrame_absorbsBgColor: { r: 255, g: 255, b: 255, a: 0.6 },
    unitFrame_absorbsBgColor: { r: 255, g: 216, b: 0, a: 0.3 },

    unitFrame_cooldownSectionPercentage_friendly: 0.4,
    unitFrame_cooldownSectionPercentage_arena: 0.4,
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

    unitFrame_smallIconSize: 27,
    unitFrame_smallIconGap: 2,

    unitFrame_dotScale: 0.8,

    unitFrame_hugeIconSize: 80,
  };
}
