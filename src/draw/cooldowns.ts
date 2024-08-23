/** @noSelfInFile */

import { config } from "../config";
import { defensiveCdInfo, externalDefFromPlayerInfo } from "../sources";
import { applyAuraToAuraframe, createAuraFrame } from "./shared";

export function drawFriendlyCooldownSection(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  sources: defensiveCdInfo & externalDefFromPlayerInfo,
) {
  const cooldownSection = CreateFrame(
    "FRAME",
    namePrefix + "CooldownSection",
    container,
  );
  cooldownSection.SetFrameStrata("MEDIUM");
  cooldownSection.SetFrameLevel(100);
  cooldownSection.SetSize(
    config.unitFrame_fullWidth,
    config.unitFrame_fullHeight * config.unitFrame_cooldownSectionPercentage,
  );
  cooldownSection.SetPoint("TOPRIGHT", container, "TOPRIGHT", 0, 0);

  const cooldownSectionBg = cooldownSection.CreateTexture(
    namePrefix + "CooldownSectionBackground",
  );
  cooldownSectionBg.SetTexture(config.bartexturepath);
  cooldownSectionBg.SetAllPoints(cooldownSection);
  cooldownSectionBg.SetVertexColor(
    config.unitFrame_cooldownBackgroundColor.r / 255,
    config.unitFrame_cooldownBackgroundColor.g / 255,
    config.unitFrame_cooldownBackgroundColor.b / 255,
    config.unitFrame_cooldownBackgroundColor.a,
  );
  // cooldownSectionBg.SetHorizTile(false); // Don't "tile" horizontally
  // cooldownSectionBg.SetVertTile(false); // Don't "tile" vertically

  const defensiveCdFrame = createAuraFrame(
    namePrefix + "DefensiveCd",
    cooldownSection,
    { r: 0, g: 0, b: 0 },
  );
  defensiveCdFrame.SetPoint("TOPLEFT", cooldownSection, "TOPLEFT", 4, -config.unitFrame_cooldownTopGap);
  defensiveCdFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );

  sources.defensiveCooldownActive.observe((aura) =>
    applyAuraToAuraframe(aura, defensiveCdFrame),
  );

  const externalDefCdFrame = createAuraFrame(
    namePrefix + "ExternalDefCd",
    cooldownSection,
    { r: 0, g: 0, b: 0 },
  );
  externalDefCdFrame.SetPoint(
    "TOPLEFT",
    cooldownSection,
    "TOPLEFT",
    4 + config.unitFrame_bigIconGap + config.unitFrame_bigIconSize,
    -config.unitFrame_cooldownTopGap,
  );
  externalDefCdFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );

  sources.externalDefFromPlayerActive.observe((aura) =>
    applyAuraToAuraframe(aura, externalDefCdFrame),
  );
}
