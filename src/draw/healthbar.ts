/** @noSelfInFile */

import { config } from "../config";
import { healthinfo, observeAll } from "../sources";
import { supportedUnit, unitIsPlayerPartyRaid } from "../unit";
import { createBackdropTemplateFrame } from "./auras";

export function drawHealthbarFrames(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  sources: healthinfo,
  side: "friendly" | "arena",
  unit: supportedUnit
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
    container
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

  if (unitIsPlayerPartyRaid(unit)) {
    const buttonSection = CreateFrame(
      "BUTTON",
      namePrefix + "HealthbarButton",
      container,
      "SecureUnitButtonTemplate"
    );
    buttonSection.SetAllPoints(container);
    (buttonSection as any).RegisterForClicks("AnyUp");
    buttonSection.SetAttribute("*type1", "focus");
    buttonSection.SetAttribute("*type2", "togglemenu");
    sources.unitId.observe((unitId) => {
      // Have to use real unit as attribute,
      // which can change in case of raid
      if (unitId !== null) {
        buttonSection.SetAttribute("unit", unitId);
      }
    });
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

  const namestr = healthbar.CreateFontString();
  namestr.SetPoint("BOTTOMRIGHT", healthbar, "BOTTOMRIGHT", -4, 48);
  namestr.SetFont("Fonts\\FRIZQT__.TTF", 12, "");

  sources.class.observe((className) => {
    const color = C_ClassColor.GetClassColor(className);
    healthbar.SetStatusBarColor(color.r, color.g, color.b, 1);
  });

  sources.isInRange.observe((inRange) => {
    if (inRange === true) {
      container.SetAlpha(1);
    } else {
      container.SetAlpha(0.4);
    }
  });

  sources.health.max.observe((maxhealth) => {
    healthbar.SetMinMaxValues(0, maxhealth);
  });
  observeAll([sources.health.current, sources.name], ([currhealth, n]) => {
    healthbar.SetValue(currhealth);
    namestr.SetText(
      n +
        " " +
        Math.floor(currhealth / 1000)
          .toString()
          .padStart(6, " ") +
        "K"
    );
  });

  return healthbar;
}
