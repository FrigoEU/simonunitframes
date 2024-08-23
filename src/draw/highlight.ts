/** @noSelfInFile */

import { config } from "../config";
import { focusInfo, healthinfo, observeAll, targetInfo } from "../sources";
import { createBackdropTemplateFrame } from "./auras";

export function drawHighlightFrames(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  unitSources: healthinfo,
  playerSources: targetInfo & focusInfo,
) {
  const highlightContainerFrame = createBackdropTemplateFrame(
    namePrefix + "BorderContainer",
    container,
  );

  highlightContainerFrame.SetFrameStrata("LOW");
  highlightContainerFrame.SetPoint("TOPLEFT", container, "TOPLEFT", -4, 4);
  highlightContainerFrame.SetPoint("BOTTOMRIGHT", container, "BOTTOMRIGHT", 4, -4);

  highlightContainerFrame.SetBackdrop({
    bgFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeSize: 3,
    tile: true,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  })
  highlightContainerFrame.SetBackdropColor(0, 0, 0, 0);
  highlightContainerFrame.SetBackdropBorderColor(0, 0, 0, 1);

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
        highlightContainerFrame.Show()
      } else {
        highlightContainerFrame.SetBackdropBorderColor(0, 0, 0, 0);
        highlightContainerFrame.Hide()
      }
    },
  );
}
