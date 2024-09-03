/** @noSelfInFile */

import { dangerousDebuffs } from "../auras";
import { config } from "../config";
import { dotInfo } from "../sources";
import { isNil } from "../utils";
import {
  applyAuraToAuraframe,
  createAuraFrame,
  hideAuraCooldownText,
  myAuraFrame,
} from "./auras";

const defaultBorder = { r: 0.5, g: 0.5, b: 0 };

export function drawDotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: dotInfo
) {
  // Max 6 dots?
  const dotAuraFrames: myAuraFrame[] = ([0, 1, 2, 3, 4, 5] as const).map(
    (i) => {
      const dotAuraFrame = createAuraFrame(nameP + "Dot" + i, parent, {
        defaultBorder,
        showCount: false,
      });

      if (!config.dots_show_timer_text) {
        hideAuraCooldownText(dotAuraFrame);
      }

      dotAuraFrame.SetSize(
        config.unitFrame_smallIconSize,
        config.unitFrame_smallIconSize
      );
      dotAuraFrame.SetPoint(
        "BOTTOMRIGHT",
        parent,
        "BOTTOMRIGHT",
        -4 -
          (i % 3) *
            (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
        4 +
          // Second row of dots
          (i >= 3
            ? config.unitFrame_smallIconGap + config.unitFrame_smallIconSize
            : 0)
      );
      // dotAuraFrame.SetPoint(
      //   "TOPRIGHT",
      //   parent,
      //   "TOPRIGHT",
      //   -4 - i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
      //   -(
      //     config.unitFrame_cooldownSectionPercentage_friendly *
      //       config.unitFrame_fullHeight +
      //     4
      //   ),
      // );

      return dotAuraFrame;
    }
  );

  sources.dots.observe((dots) => {
    dotAuraFrames.forEach((f) => f.Hide());
    dots.forEach((dotinfo, i) => {
      const dotAuraFrame = dotAuraFrames[i];
      if (!isNil(dotAuraFrame)) {
        dotAuraFrame.Show();
        applyAuraToAuraframe(dotinfo, dotAuraFrame);
        dotAuraFrame.setBorderColor(
          dangerousDebuffs.includes(dotinfo.name)
            ? { r: 255, g: 0, b: 0 }
            : null
        );
      }
    });
  });
}
