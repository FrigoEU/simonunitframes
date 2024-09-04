/** @noSelfInFile */

import { hotIndex, hotIndexes, hotIndexToHotName } from "../auras";
import { config } from "../config";
import { hotInfo } from "../sources";
import { checkAllCasesHandled } from "../utils";
import {
  applyAuraToAuraframe,
  createAuraFrame,
  hideAuraCooldownText,
} from "./auras";

export function drawHotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: hotInfo
) {
  for (let i of hotIndexes) {
    const hotAuraFrame = createAuraFrame(nameP + "Hot" + i, parent, {
      defaultBorder: { r: 0, g: 0, b: 0 },
      showCount: false,
    });

    if (!config.hots_show_timer_text) {
      hideAuraCooldownText(hotAuraFrame);
    }

    hotAuraFrame.SetSize(
      config.unitFrame_smallIconSize,
      config.unitFrame_smallIconSize
    );
    // Layout =
    // 4 5 6 7
    // 0 1 2 3
    if (i <= 3) {
      hotAuraFrame.SetPoint(
        "BOTTOMLEFT",
        parent,
        "BOTTOMLEFT",
        4 +
          i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
        4
      );
    } else {
      hotAuraFrame.SetPoint(
        "BOTTOMLEFT",
        parent,
        "BOTTOMLEFT",
        4 +
          (i - 4) *
            (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
        4 + (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize)
      );
    }
    const hotname = hotIndexToHotName(i);

    sources[hotname].observe((hotinfo) =>
      applyAuraToAuraframe(hotinfo, hotAuraFrame)
    );
  }
}
