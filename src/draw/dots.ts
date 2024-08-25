/** @noSelfInFile */

import { dangerousDebuffs } from "../auras";
import { config } from "../config";
import { dotInfo } from "../sources";
import { isNil } from "../utils";
import { applyAuraToAuraframe, createAuraFrame, myAuraFrame } from "./auras";

export function drawDotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: dotInfo,
) {
  // Max 5 dots?
  const dotAuraFrames: myAuraFrame[] = ([0, 1, 2, 3, 4] as const).map((i) => {
    const dotAuraFrame = createAuraFrame(nameP + "Dot" + i, parent, {
      defaultBorder: { r: 0, g: 0, b: 0 },
      showCount: false,
    });

    if (!config.dots_show_timer_text) {
      (dotAuraFrame.cooldown as any).noCooldownCount = true; // so omniCC doesn't show anything
    }

    dotAuraFrame.SetSize(
      config.unitFrame_smallIconSize,
      config.unitFrame_smallIconSize,
    );
    dotAuraFrame.SetPoint(
      "TOPRIGHT",
      parent,
      "TOPRIGHT",
      -4 - i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
      -(
        config.unitFrame_cooldownSectionPercentage_friendly *
          config.unitFrame_fullHeight +
        4
      ),
    );

    return dotAuraFrame;
  });

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
            : { r: 0, g: 0, b: 0 },
        );
      }
    });
  });
}
