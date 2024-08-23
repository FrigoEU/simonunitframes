/** @noSelfInFile */

import { config } from "../config";
import { defensiveCdInfo, externalDefFromPlayerInfo } from "../sources";
import { applyAuraToAuraframe, createAuraFrame } from "./auras";

export function drawFriendlyCooldownSection(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  sources: defensiveCdInfo & externalDefFromPlayerInfo
) {
  const defensiveCdFrame = createAuraFrame(
    namePrefix + "DefensiveCd",
    container,
    { r: 0, g: 0, b: 0 },
    true
  );
  defensiveCdFrame.SetPoint(
    "TOPLEFT",
    container,
    "TOPLEFT",
    4,
    -config.unitFrame_cooldownTopGap
  );
  defensiveCdFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize
  );

  sources.defensiveCooldownActive.observe((aura) =>
    applyAuraToAuraframe(aura, defensiveCdFrame)
  );

  const externalDefCdFrame = createAuraFrame(
    namePrefix + "ExternalDefCd",
    container,
    { r: 0, g: 0, b: 0 },
    true
  );
  externalDefCdFrame.SetPoint(
    "TOPLEFT",
    container,
    "TOPLEFT",
    4 + config.unitFrame_bigIconGap + config.unitFrame_bigIconSize,
    -config.unitFrame_cooldownTopGap
  );
  externalDefCdFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize
  );

  sources.externalDefFromPlayerActive.observe((aura) =>
    applyAuraToAuraframe(aura, externalDefCdFrame)
  );
}
