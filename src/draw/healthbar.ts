/** @noSelfInFile */

import { config } from "../config";
import { healthinfo, observeAll } from "../sources";
import { supportedUnit, unitIsPlayerPartyRaid } from "../unit";
import { isNil } from "../utils";
import { createBackdropTemplateFrame } from "./auras";

export function drawHealthbarFrames(
  config: config,
  size: {width: number; height: number},
  namePrefix: string,
  container: SimpleFrame,
  sources: healthinfo,
  side: "friendly" | "arena",
  unit: supportedUnit,
  opts: {drawTopBar: boolean, renderText: boolean}
) {
  const healthbar = CreateFrame(
    "STATUSBAR",
    namePrefix + "Healthbar",
    container
  ) as SimpleStatusBar;
  healthbar.SetSize(size.width, size.height);
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
    size.width,
    size.height *
      (side === "friendly"
        ? config.unitFrame_cooldownSectionPercentage_friendly
        : config.unitFrame_cooldownSectionPercentage_arena)
  );
  topSection.SetPoint("TOPRIGHT", container, "TOPRIGHT", 0, 0);

  if (unitIsPlayerPartyRaid(unit)) {
    const buttonSection = CreateFrame(
      "BUTTON",
      unit === "player"
        ? "SimonUnitFramesButton1"
        : unit.startsWith("party")
          ? "SimonUnitFramesButton" + (parseInt(unit.substring(5)) + 1)
          : namePrefix + "HealthbarButton",
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

  if (opts.drawTopBar === true){
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
  }

  const namestr = healthbar.CreateFontString();
  namestr.SetPoint("BOTTOMRIGHT", healthbar, "BOTTOMRIGHT", -4, 48);
  namestr.SetFont("Fonts\\FRIZQT__.TTF", 12, "");

  sources.class.observe((className) => {
    if (!isNil(className)) {
      const color = C_ClassColor.GetClassColor(className);
      healthbar.SetStatusBarColor(color.r, color.g, color.b, 1);
      if (className === "PRIEST") {
        namestr.SetTextColor(0.6, 0.6, 0.6);
      } else {
        namestr.SetTextColor(1, 1, 1);
      }
    }
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
    if (opts.renderText === true){
      namestr.SetText(
        n +
          " " +
          Math.floor(currhealth / 1000)
            .toString()
            .padStart(6, " ") +
          "K"
      );
    }
  });

  const absorbsFrame = CreateFrame("Frame", namePrefix + "Absorbs", container);
  absorbsFrame.SetFrameStrata("MEDIUM");
  absorbsFrame.SetFrameLevel(60);
  const absorbsTexture = absorbsFrame.CreateTexture(
    namePrefix + "AbsorbsT",
    "OVERLAY"
  );
  absorbsTexture.SetHeight(
    size.height *
      (1 - config.unitFrame_cooldownSectionPercentage_arena) -
      4 // border
  );
  absorbsTexture.SetTexture(config.bartexturepath);
  absorbsTexture.SetVertexColor(
    config.unitFrame_absorbsBgColor.r / 255,
    config.unitFrame_absorbsBgColor.g / 255,
    config.unitFrame_absorbsBgColor.b / 255,
    config.unitFrame_absorbsBgColor.a
  );

  observeAll(
    [sources.health.max, sources.health.current, sources.health.absorbs],
    ([maxhealth, currhealth, absorbs]) => {
      if (absorbs <= 0) {
        absorbsTexture.Hide();
        return;
      }
      absorbsTexture.Show();
      // print(`Absorbs: ${absorbs}`);
      const positionOfHealthbarEnd =
        (currhealth / maxhealth) * size.width;
      // print(`positionOfHealthbarEnd ${positionOfHealthbarEnd}`);
      // "absolute" positioning of absorbs bar
      absorbsTexture.SetPoint(
        "BOTTOMLEFT",
        container,
        "BOTTOMLEFT",
        positionOfHealthbarEnd,
        2 // border
      );
      const width = (absorbs / maxhealth) * size.width;
      // print(`width ${width}`);
      absorbsTexture.SetWidth(width);

      // const left = currhealth / maxhealth;
      // const right = (currhealth + absorbs) / maxhealth;
      // print(`left right ${left} ${right}`);
      // absorbsTexture.SetTexCoord(left, right, 0, 1);
    }
  );

  return healthbar;
}
