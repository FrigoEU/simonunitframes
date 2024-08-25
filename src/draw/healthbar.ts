/** @noSelfInFile */

import { config } from "../config";
import { healthinfo, observeAll } from "../sources";
import { createBackdropTemplateFrame } from "./auras";

export function drawHealthbarFrames(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  sources: healthinfo,
  side: "friendly" | "arena",
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | null
) {
  const healthbar = CreateFrame(
    "STATUSBAR",
    namePrefix + "Healthbar",
    container
  ) as SimpleStatusBar;
  healthbar.SetSize(config.unitFrame_fullWidth, config.unitFrame_fullHeight);
  healthbar.SetFrameStrata("MEDIUM");
  healthbar.SetFrameLevel(50);
  healthbar.SetPoint("TOPLEFT", container, "TOPLEFT", 0, 0);
  healthbar.SetStatusBarTexture(config.bartexturepath);
  // healthbar.GetStatusBarTexture().SetHorizTile(false); // Don't "tile" horizontally
  // healthbar.GetStatusBarTexture().SetVertTile(false); // Don't "tile" vertically
  healthbar.SetMinMaxValues(0, 100);
  healthbar.SetValue(100);

  const border = createBackdropTemplateFrame(
    namePrefix + "HealthbarBorder",
    healthbar
  );
  border.SetFrameStrata("MEDIUM");
  border.SetFrameLevel(200);
  border.SetAllPoints(healthbar);
  border.SetBackdrop({
    bgFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeSize: 2,
    tile: true,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
  border.SetBackdropColor(0, 0, 0, 0);
  border.SetBackdropBorderColor(0, 0, 0, 1);

  const healthbarBackground = healthbar.CreateTexture(
    namePrefix + "HealthbarBackground",
    "BACKGROUND"
  );
  healthbarBackground.SetAllPoints(healthbar);
  healthbarBackground.SetTexture(config.bartexturepath);
  healthbarBackground.SetVertexColor(
    config.unitFrame_healthbarBgColor.r / 255,
    config.unitFrame_healthbarBgColor.g / 255,
    config.unitFrame_healthbarBgColor.b / 255,
    config.unitFrame_healthbarBgColor.a
  );
  // healthbarBackground.SetHorizTile(false); // Don't "tile" horizontally
  // healthbarBackground.SetVertTile(false); // Don't "tile" vertically

  const topSection = CreateFrame(
    "FRAME",
    namePrefix + "CooldownSection",
    container,
    "SecureUnitButtonTemplate"
  );
  topSection.SetFrameStrata("MEDIUM");
  topSection.SetFrameLevel(100);
  topSection.SetSize(
    config.unitFrame_fullWidth,
    config.unitFrame_fullHeight *
      (side === "friendly"
        ? config.unitFrame_cooldownSectionPercentage_friendly
        : config.unitFrame_cooldownSectionPercentage_arena)
  );
  topSection.SetPoint("TOPRIGHT", container, "TOPRIGHT", 0, 0);

  if (unit) {
    const buttonSection = CreateFrame(
      "BUTTON",
      namePrefix + "CooldownSection",
      container,
      "SecureUnitButtonTemplate"
    );
    buttonSection.SetAllPoints(container);
    buttonSection.SetAttribute("unit", unit);
    (buttonSection as any).RegisterForClicks("AnyUp");
    buttonSection.SetAttribute("*type1", "focus");
    buttonSection.SetAttribute("*type2", "togglemenu");
  }

  const topSectionBg = topSection.CreateTexture(
    namePrefix + "CooldownSectionBackground"
  );
  topSectionBg.SetTexture(config.bartexturepath);
  topSectionBg.SetAllPoints(topSection);
  topSectionBg.SetVertexColor(
    config.unitFrame_cooldownBackgroundColor.r / 255,
    config.unitFrame_cooldownBackgroundColor.g / 255,
    config.unitFrame_cooldownBackgroundColor.b / 255,
    config.unitFrame_cooldownBackgroundColor.a
  );

  const healthStr = healthbar.CreateFontString();
  healthStr.SetPoint("BOTTOMRIGHT", healthbar, "BOTTOMRIGHT", 4, 4);

  sources.class.observe((className) => {
    const color = C_ClassColor.GetClassColor(className);
    healthbar.SetStatusBarColor(color.r, color.g, color.b, 1);
  });

  sources.health.max.observe((maxhealth) => {
    healthbar.SetMinMaxValues(0, maxhealth);
  });
  sources.health.current.observe((currhealth) => {
    healthbar.SetValue(currhealth);
    healthStr.SetText((currhealth / 1000).toString() + "K");
  });

  return healthbar;
}
