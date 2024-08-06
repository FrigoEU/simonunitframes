/** @noSelfInFile */

import { config } from "../context";
import { focusInfo, healthinfo, observeAll, targetInfo } from "../sources";

export function drawHighlightFrames(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  unitSources: healthinfo,
  playerSources: targetInfo & focusInfo,
) {
  const highlightContainerFrame = CreateFrame(
    "Frame",
    namePrefix + "BorderContainer",
    container,
    "BackdropTemplate",
  ) as SimpleFrame & {
    // Fixing missing typings
    SetBackdropBorderColor: (
      r: number,
      g: number,
      b: number,
      a: number,
    ) => void;
  };
  highlightContainerFrame.SetAllPoints(container);
  highlightContainerFrame.SetFrameStrata("HIGH");

  const highlightFrame = CreateFrame("Frame", namePrefix + "Border", container);
  highlightFrame.SetAllPoints(container);
  highlightFrame.SetFrameStrata("HIGH");

  const highlightTexture = highlightFrame.CreateTexture(undefined, "OVERLAY");
  highlightTexture.SetAllPoints(highlightFrame);

  observeAll(
    [unitSources.guid, playerSources.target, playerSources.focus],
    ([unitGuid, targetGuid, focusGuid]) => {
      const color =
        unitGuid === focusGuid
          ? config.unitFrame_focusHighlightColor
          : unitGuid === targetGuid
            ? config.unitFrame_targetHighlightColor
            : null;

      if (color) {
        highlightContainerFrame.SetBackdropBorderColor(
          color.r,
          color.g,
          color.b,
          color.a,
        );
      } else {
        highlightContainerFrame.SetBackdropBorderColor(0, 0, 0, 0);
      }
    },
  );
}
