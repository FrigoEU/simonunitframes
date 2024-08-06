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
