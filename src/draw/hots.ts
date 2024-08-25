/** @noSelfInFile */

import { config } from "../config";
import { hotInfo } from "../sources";
import { checkAllCasesHandled } from "../utils";
import { applyAuraToAuraframe, createAuraFrame } from "./auras";

export function drawHotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: hotInfo,
) {
  for (let i of [0, 1, 2, 3, 4, 5, 6] as const) {
    const hotAuraFrame = createAuraFrame(nameP + "Hot" + i, parent, {
      defaultBorder: { r: 0, g: 0, b: 0 },
      showCount: false,
    });

    if (!config.hots_show_timer_text) {
      (hotAuraFrame.cooldown as any).noCooldownCount = true; // so omniCC doesn't show anything
    }

    hotAuraFrame.SetSize(
      config.unitFrame_smallIconSize,
      config.unitFrame_smallIconSize,
    );
    hotAuraFrame.SetPoint(
      "BOTTOMLEFT",
      parent,
      "BOTTOMLEFT",
      4 + i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
      4,
    );
    const hotname = hotIndexToHotName(i);

    sources[hotname].observe((hotinfo) =>
      applyAuraToAuraframe(hotinfo, hotAuraFrame),
    );
  }
}

export function hotIndexToHotName(
  i: 0 | 1 | 2 | 3 | 4 | 5 | 6,
): "hot0" | "hot1" | "hot2" | "hot3" | "hot4" | "hot5" | "hot6" {
  return i === 0
    ? ("hot0" as const)
    : i === 1
      ? ("hot1" as const)
      : i === 2
        ? "hot2"
        : i === 3
          ? "hot3"
          : i === 4
            ? "hot4"
            : i === 5
              ? "hot5"
              : i === 6
                ? "hot6"
                : checkAllCasesHandled(i);
}
