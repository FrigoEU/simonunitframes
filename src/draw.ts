import { context, unitFrameStruct } from "./context";
import { unitIsPlayerPartyRaid } from "./unit";
import { checkAllCasesHandled } from "./utils";

export function setHealthbarColor(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  struct: unitFrameStruct,
) {
  const [_, className] = UnitClass(unit);
  const color = C_ClassColor.GetClassColor(className);
  struct.healthbar.SetStatusBarColor(color.r, color.g, color.b, 1);
}

export function setMaxHealth(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  struct: unitFrameStruct,
) {
  struct.healthbar.SetMinMaxValues(0, UnitHealthMax(unit));
}

export function setHealth(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  struct: unitFrameStruct,
) {
  struct.healthbar.SetValue(UnitHealth(unit));
}

export function createHealthbarFrames(
  context: context,
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  container: SimpleFrame,
) {
  const containerName = getContainerFrameNameForUnit(unit);

  const cooldownSection = CreateFrame(
    "FRAME",
    containerName + "CooldownSection",
    container,
  );
  cooldownSection.SetSize(
    context.config.unitFrame_fullWidth,
    context.config.unitFrame_fullHeight *
      context.config.unitFrame_cooldownSectionPercentage,
  );
  cooldownSection.SetPoint("TOPRIGHT", container, "TOPRIGHT", 0, 0);

  const cooldownSectionBg = cooldownSection.CreateTexture(
    containerName + "CooldownSectionBackground",
  );
  cooldownSectionBg.SetTexture(barTexturePath);
  cooldownSectionBg.SetAllPoints(cooldownSection);
  cooldownSectionBg.SetVertexColor(
    context.config.unitFrame_cooldownBackgroundColor.r,
    context.config.unitFrame_cooldownBackgroundColor.g,
    context.config.unitFrame_cooldownBackgroundColor.b,
    1,
  );
  cooldownSectionBg.SetHorizTile(false); // Don't "tile" horizontally
  cooldownSectionBg.SetVertTile(false); // Don't "tile" vertically

  const healthbar = CreateFrame(
    "STATUSBAR",
    containerName + "Healthbar",
    container,
  ) as SimpleStatusBar;
  healthbar.SetSize(
    context.config.unitFrame_fullWidth,
    context.config.unitFrame_fullHeight *
      (1 - context.config.unitFrame_cooldownSectionPercentage),
  );
  healthbar.SetPoint("TOPLEFT", container, "TOPLEFT", 0, 0);
  healthbar.SetStatusBarTexture(barTexturePath);
  healthbar.GetStatusBarTexture().SetHorizTile(false); // Don't "tile" horizontally
  healthbar.GetStatusBarTexture().SetVertTile(false); // Don't "tile" vertically
  healthbar.SetMinMaxValues(0, 100);
  healthbar.SetValue(100);

  const healthbarBgColor = { r: 1, g: 1, b: 1, a: 0.3 };
  const healthbarBackground = healthbar.CreateTexture(
    containerName + "HealthbarBackground",
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

  return { healthbar, healthbarBackground };
}

const barTexturePath = "Interface\\TargetingFrame\\UI-StatusBar";

export function createUnitFrame(
  context: context,
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
): unitFrameStruct {
  const containerName = getContainerFrameNameForUnit(unit);
  const parent = unitIsPlayerPartyRaid(unit)
    ? context.friendlyFramesParent
    : context.arenaFramesParent;
  const container = CreateFrame(
    "Frame",
    containerName + "Container",
    parent,
    "BackdropTemplate",
  );
  const { x, y } = getUnitGridIndex(unit);
  const point = unitIsPlayerPartyRaid(unit) ? "TOPRIGHT" : "TOPLEFT";
  container.SetPoint(
    point,
    parent,
    point,
    x *
      (context.config.unitFrame_horizontalGap +
        context.config.unitFrame_fullWidth),
    y *
      (context.config.unitFrame_verticalGap +
        context.config.unitFrame_fullHeight),
  );

  container.SetClampedToScreen(true); // Frame can't move offscreen

  const { healthbar, healthbarBackground } = createHealthbarFrames(
    context,
    unit,
    container,
  );

  return { container, healthbar, healthbarBackground };
}

export function getContainerFrameNameForUnit(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
) {
  return "SoupContainerFrame" + unit;
}

//
// PLAYER = 0
// PARTY1 = 2
// PARTY2 = 3
// PARTY3 = 4
// PARTY4 = 5
//
// TODO raid
function getUnitGridIndex(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
): { x: any; y: any } {
  if (unit === "player") {
    return { x: 0, y: 0 };
  } else if (unit.startsWith("party")) {
    const i = parseInt(unit.substring(5, 6));
    return { x: 0, y: i };
  } else if (unit.startsWith("arena")) {
    const i = parseInt(unit.substring(5, 6));
    return { x: 0, y: i - 1 };
  } else if (unit.startsWith("raid")) {
    const i = parseInt(unit.substring(4, 6));
    // WRONG! Still need to figure out how to best do this
    // should be
    // RaidGroup2 RaidGgroup1 RaidGroupOfPlayer
    return { x: Math.floor(i / 5), y: i % 5 };
  } else {
    return checkAllCasesHandled(unit);
  }
}
