/** @noSelfInFile */

import { config } from "../context";
import { healthinfo } from "../sources";

const barTexturePath = "Interface\\TargetingFrame\\UI-StatusBar";

export function drawHealthbarFrames(
  config: config,
  namePrefix: string,
  container: SimpleFrame,
  sources: healthinfo,
) {
  const healthbar = CreateFrame(
    "STATUSBAR",
    namePrefix + "Healthbar",
    container,
  ) as SimpleStatusBar;
  healthbar.SetSize(
    config.unitFrame_fullWidth,
    config.unitFrame_fullHeight *
      (1 - config.unitFrame_cooldownSectionPercentage),
  );
  healthbar.SetPoint("TOPLEFT", container, "TOPLEFT", 0, 0);
  healthbar.SetStatusBarTexture(barTexturePath);
  healthbar.GetStatusBarTexture().SetHorizTile(false); // Don't "tile" horizontally
  healthbar.GetStatusBarTexture().SetVertTile(false); // Don't "tile" vertically
  healthbar.SetMinMaxValues(0, 100);
  healthbar.SetValue(100);

  sources.class.observe((className) => {
    const color = C_ClassColor.GetClassColor(className);
    healthbar.SetStatusBarColor(color.r, color.g, color.b, 1);
  });

  sources.health.max.observe((maxhealth) => {
    healthbar.SetMinMaxValues(0, maxhealth);
  });
  sources.health.current.observe((currhealth) => {
    healthbar.SetValue(currhealth);
  });

  const healthbarBgColor = { r: 1, g: 1, b: 1, a: 0.3 };
  const healthbarBackground = healthbar.CreateTexture(
    namePrefix + "HealthbarBackground",
    "BACKGROUND",
  );
  healthbarBackground.SetAllPoints(healthbar);
  healthbarBackground.SetTexture(barTexturePath);
  healthbarBackground.SetVertexColor(
    healthbarBgColor.r,
    healthbarBgColor.g,
    healthbarBgColor.b,
    healthbarBgColor.a,
  );
  healthbarBackground.SetHorizTile(false); // Don't "tile" horizontally
  healthbarBackground.SetVertTile(false); // Don't "tile" vertically

  return healthbar;
}
