import { config } from "../config";
import { arenaInfo, healthinfo } from "../sources";
import { createAuraFrame } from "./auras";

export function drawArenaSpecs(
  config: config,
  namePrefix: string,
  parent: SimpleFrame,
  sources: arenaInfo
) {
  const frame = createAuraFrame(namePrefix + "SpecIcon", parent, {
    defaultBorder: null,
    showCount: false,
  });
  frame.SetPoint("BOTTOMRIGHT", parent, "BOTTOMRIGHT", 0, 0);
  frame.SetSize(
    config.unitFrame_smallIconSize * 0.75,
    config.unitFrame_smallIconSize * 0.75
  );

  sources.specIcon.observe((icon) => {
    if (icon) {
      frame.icon.SetTexture(icon);
    }
  });
}
