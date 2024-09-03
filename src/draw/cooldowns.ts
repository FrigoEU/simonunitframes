/** @noSelfInFile */

import { config } from "../config";
import { defensiveCdInfo, externalDefFromPlayerInfo } from "../sources";
import {
  applyAuraToAuraframe,
  createAuraFrame,
  hideAuraCooldownText,
} from "./auras";

export function drawFriendlyCooldownSection(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  sources: defensiveCdInfo & externalDefFromPlayerInfo
) {
  const defensiveCdFrame = createAuraFrame(
    namePrefix + "DefensiveCd",
    container,
    { defaultBorder: { r: 0, g: 0, b: 0 }, showCount: true }
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
    { defaultBorder: { r: 0, g: 0, b: 0 }, showCount: true }
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

  if (!config.def_cds_show_timer_text) {
    hideAuraCooldownText(defensiveCdFrame);
    hideAuraCooldownText(externalDefCdFrame);
  }

  sources.externalDefFromPlayerActive.observe((aura) =>
    applyAuraToAuraframe(aura, externalDefCdFrame)
  );
}
