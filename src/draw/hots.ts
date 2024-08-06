/** @noSelfInFile */

import { config } from "../context";
import { hotInfo } from "../sources";
import { checkAllCasesHandled } from "../utils";
import { applyAuraToAuraframe, createAuraFrame } from "./shared";

export function drawHotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: hotInfo,
) {
  for (let i of [0, 1, 2, 3, 4] as const) {
    const hotAuraFrame = createAuraFrame(nameP + "Hot" + i, parent, {
      r: 0,
      g: 0,
      b: 0,
    });
    hotAuraFrame.SetSize(
      config.unitFrame_smallIconSize,
      config.unitFrame_smallIconSize,
    );
    hotAuraFrame.SetPoint(
      "BOTTOMLEFT",
      parent,
      "BOTTOMLEFT",
      4 + i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
      -4,
    );
    const hotname = hotIndexToHotName(i);

    sources[hotname].observe((hotinfo) =>
      applyAuraToAuraframe(hotinfo, hotAuraFrame),
    );
  }
}

export function hotIndexToHotName(
  i: 0 | 1 | 2 | 3 | 4,
): "hot0" | "hot1" | "hot2" | "hot3" | "hot4" {
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
            : checkAllCasesHandled(i);
}
