/** @noSelfInFile */

import { config } from "../context";
import { defensiveCdInfo, externalDefFromPlayerInfo } from "../sources";
import { applyAuraToAuraframe, createAuraFrame } from "./shared";

const barTexturePath = "Interface\\TargetingFrame\\UI-StatusBar";

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
  cooldownSection.SetSize(
    config.unitFrame_fullWidth,
    config.unitFrame_fullHeight * config.unitFrame_cooldownSectionPercentage,
  );
  cooldownSection.SetPoint("TOPRIGHT", container, "TOPRIGHT", 0, 0);

  const cooldownSectionBg = cooldownSection.CreateTexture(
    namePrefix + "CooldownSectionBackground",
  );
  cooldownSectionBg.SetTexture(barTexturePath);
  cooldownSectionBg.SetAllPoints(cooldownSection);
  cooldownSectionBg.SetVertexColor(
    config.unitFrame_cooldownBackgroundColor.r,
    config.unitFrame_cooldownBackgroundColor.g,
    config.unitFrame_cooldownBackgroundColor.b,
    1,
  );
  cooldownSectionBg.SetHorizTile(false); // Don't "tile" horizontally
  cooldownSectionBg.SetVertTile(false); // Don't "tile" vertically

  const defensiveCdFrame = createAuraFrame(
    namePrefix + "DefensiveCd",
    cooldownSection,
    { r: 0, g: 0, b: 0 },
  );
  defensiveCdFrame.SetPoint("TOPLEFT", cooldownSection, "TOPLEFT", 4, -4);
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
    -4,
  );
  externalDefCdFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );

  sources.externalDefFromPlayerActive.observe((aura) =>
    applyAuraToAuraframe(aura, defensiveCdFrame),
  );
}
