/** @noSelfInFile */

import { dangerousDebuffs } from "../auras";
import { config } from "../config";
import { dotInfo } from "../sources";
import { isNil } from "../utils";
import { applyAuraToAuraframe, createAuraFrame, myAuraFrame } from "./shared";

export function drawDotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: dotInfo,
) {
  // Max 6 dots?
  const dotAuraFrames: myAuraFrame[] = ([0, 1, 2, 3, 4, 5] as const).map(i => {
    const dotAuraFrame = createAuraFrame(nameP + "Dot" + i, parent, {
      r: 0,
      g: 0,
      b: 0,
    });
    dotAuraFrame.SetSize(
      config.unitFrame_smallIconSize,
      config.unitFrame_smallIconSize,
    );
    dotAuraFrame.SetPoint(
      "BOTTOMRIGHT",
      parent,
      "BOTTOMRIGHT",
      -4 - i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
      4,
    );

    return dotAuraFrame;
  })


  sources.dots.observe((dots) => {
    dotAuraFrames.forEach(f => f.Hide());
    dots.forEach((dotinfo, i) => {
      const dotAuraFrame = dotAuraFrames[i];
      if (!isNil(dotAuraFrame)) {
        dotAuraFrame.Show();
        applyAuraToAuraframe(dotinfo, dotAuraFrame);
      }
      if (dangerousDebuffs.includes(dotinfo.name)) {
        dotAuraFrame.SetScale(1.5);
      } else {
        dotAuraFrame.SetScale(1);
      }
    });
  });
}
