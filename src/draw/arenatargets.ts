/** @noSelfInFile */

import { config } from "../context";
import { healthinfo, observeAll, sources } from "../sources";
import { applyAuraToAuraframe, createAuraFrame } from "./shared";

export function drawArenaTargetFrames(
  config: config,
  namePrefix: string,
  parent: SimpleFrame,
  sources: healthinfo,
  arena: Pick<sources, "arena1" | "arena2" | "arena3">,
) {
  const arenaDps1TargetFrame = createAuraFrame(
    namePrefix + "arenaDps1Target",
    parent,
    { r: 0, g: 0, b: 0 },
  );
  arenaDps1TargetFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );
  arenaDps1TargetFrame.SetPoint("TOPRIGHT", parent, "TOPRIGHT", -4, 4);

  const arenaDps2TargetFrame = createAuraFrame(
    namePrefix + "arenaDps2Target",
    parent,
    { r: 0, g: 0, b: 0 },
  );
  arenaDps2TargetFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );
  arenaDps2TargetFrame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
    4,
  );

  observeAll(
    [
      sources.guid,
      arena.arena1.arenaDpsIndex,
      arena.arena1.class,
      arena.arena1.target,
      arena.arena1.offensiveCooldownActive,
    ],
    ([
      unitGuid,
      arenaDpsIndex,
      class_,
      targetGuid,
      offensiveCooldownActive,
    ]) => {
      const frame =
        arenaDpsIndex === null
          ? null
          : arenaDpsIndex === 1
            ? arenaDps1TargetFrame
            : arenaDps2TargetFrame;
      if (!frame) {
        return;
      }
      if (unitGuid !== targetGuid) {
        return;
      }

      if (offensiveCooldownActive) {
        applyAuraToAuraframe(offensiveCooldownActive, frame);
        frame.border.SetVertexColor(255, 0, 0);
      } else {
        frame.icon.SetTexture(
          "Interface\\AddOns\\DefaultUIScript\\ClassIcons\\" + class_ + ".tga",
        );
        frame.icon.SetAllPoints(frame);
      }
    },
  );

  return { arenaDps1TargetFrame, arenaDps2TargetFrame };
}
