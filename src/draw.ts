/** @noSelfInFile */

import { buffFrames, context, myAuraFrame, unitFrameStruct } from "./context";
import {
  unitIsArena,
  unitIsParty,
  unitIsPlayerPartyRaid,
  unitIsRaidUnit,
} from "./unit";
import { checkAllCasesHandled, isNil } from "./utils";

export function updateHealthbarColor(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  struct: unitFrameStruct,
) {
  const [_, className] = UnitClass(unit);
  const color = C_ClassColor.GetClassColor(className);
  struct.healthbar.SetStatusBarColor(color.r, color.g, color.b, 1);
}

export function updateHighlight(
  context: context,
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  struct: unitFrameStruct,
) {
  // Fixing missing typings
  const frame = struct.highlightContainerFrame as SimpleFrame & {
    SetBackdropBorderColor: (
      r: number,
      g: number,
      b: number,
      a: number,
    ) => void;
  };
  const targetGuid = UnitGUID("target");
  const focusGuid = UnitGUID("focus");
  const unitGuid = UnitGUID(unit);

  const color =
    unitGuid === focusGuid
      ? context.config.unitFrame_focusHighlightColor
      : unitGuid === targetGuid
        ? context.config.unitFrame_targetHighlightColor
        : null;

  if (color) {
    frame.SetBackdropBorderColor(color.r, color.g, color.b, color.a);
  } else {
    frame.SetBackdropBorderColor(0, 0, 0, 0);
  }
}

export function updateMaxHealth(
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

export function createHighlightFrames(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  container: SimpleFrame,
) {
  const containerName = getContainerFrameNameForUnit(unit);
  const highlightContainerFrame = CreateFrame(
    "Frame",
    containerName + "BorderContainer",
    container,
    "BackdropTemplate",
  );
  highlightContainerFrame.SetAllPoints(container);
  highlightContainerFrame.SetFrameStrata("HIGH");

  const highlightFrame = CreateFrame(
    "Frame",
    containerName + "Border",
    container,
  );
  highlightFrame.SetAllPoints(container);
  highlightFrame.SetFrameStrata("HIGH");

  const highlightTexture = highlightFrame.CreateTexture(undefined, "OVERLAY");
  highlightTexture.SetAllPoints(highlightFrame);

  return { highlightContainerFrame };
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

  return { healthbar, healthbarBackground, cooldownSection };
}

const barTexturePath = "Interface\\TargetingFrame\\UI-StatusBar";

export function updatePosition(
  context: context,
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  struct: unitFrameStruct,
) {
  const point = unitIsPlayerPartyRaid(unit) ? "TOPRIGHT" : "TOPLEFT";
  const { x, y } = getUnitGridIndex(unit);
  struct.container.SetPoint(
    point,
    struct.container.GetParent(),
    point,
    x *
      (context.config.unitFrame_horizontalGap +
        context.config.unitFrame_fullWidth),
    y *
      (context.config.unitFrame_verticalGap +
        context.config.unitFrame_fullHeight),
  );
}

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
  container.SetClampedToScreen(true); // Frame can't move offscreen

  const { healthbar, healthbarBackground, cooldownSection } =
    createHealthbarFrames(context, unit, container);

  const { highlightContainerFrame } = createHighlightFrames(unit, container);

  return {
    container,
    healthbar,
    healthbarBackground,
    highlightContainerFrame,
    cooldownSection,
  };
}

export function getContainerFrameNameForUnit(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
) {
  return "SoupContainerFrame" + unit;
}

//
// RAID6 = 1,0   PLAYER = 0,0
// RAID7 = 1,1   PARTY1 = 0,1
// RAID8 = 1,2   PARTY2 = 0,2
// RAID9 = 1,3   PARTY3 = 0,3
// RAID10= 1,4   PARTY4 = 0,4
function getUnitGridIndex(
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
): { x: any; y: any } {
  if (unit === "player") {
    return { x: 0, y: 0 };
  } else if (unitIsParty(unit)) {
    const i = parseInt(unit.substring(5, 6));
    return { x: 0, y: i };
  } else if (unitIsArena(unit)) {
    const i = parseInt(unit.substring(5, 6));
    return { x: 0, y: i - 1 };
  } else if (unitIsRaidUnit(unit)) {
    // 1-indexed, we calculate 0-indexed
    const unitRaidIndex = parseInt(unit.substring(4, 6)) - 1;
    const playerRaidIndex = UnitInRaid("player");
    if (isNil(playerRaidIndex)) {
      throw new Error("Got " + unit + " but not in raid");
    }
    const playerGroup = Math.floor(playerRaidIndex / 5);
    const unitGroup = Math.floor(unitRaidIndex / 5);
    // should be
    // RaidGroup2 RaidGgroup1 RaidGroupOfPlayer
    return {
      // We always show the party + player
      // so we skip the raidgroup of the player
      x: unitGroup > playerGroup ? unitGroup - 1 : unitGroup,
      y: unitRaidIndex % 5,
    };
  } else {
    return checkAllCasesHandled(unit);
  }
}

export function createArenaTargetFrames(
  context: context,
  unit: "player" | "party1" | "party2",
  parent: SimpleFrame,
): { arenaDps1TargetFrame: myAuraFrame; arenaDps2TargetFrame: myAuraFrame } {
  const containerName = getContainerFrameNameForUnit(unit);
  const arenaDps1TargetFrame = createAuraFrame(
    containerName + "arenaDps1Target",
    parent,
  );
  arenaDps1TargetFrame.SetSize(
    context.config.unitFrame_bigIconSize,
    context.config.unitFrame_bigIconSize,
  );
  arenaDps1TargetFrame.SetPoint("TOPRIGHT", parent, "TOPRIGHT", -4, 4);

  const arenaDps2TargetFrame = createAuraFrame(
    containerName + "arenaDps2Target",
    parent,
  );
  arenaDps2TargetFrame.SetSize(
    context.config.unitFrame_bigIconSize,
    context.config.unitFrame_bigIconSize,
  );
  arenaDps2TargetFrame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4 -
      (context.config.unitFrame_bigIconSize +
        context.config.unitFrame_bigIconGap),
    4,
  );

  return { arenaDps1TargetFrame, arenaDps2TargetFrame };
}

export function createBuffFrames(
  context: context,
  unit: UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer,
  healthbarFrame: SimpleFrame,
  cooldownSectionFrame: SimpleFrame,
): buffFrames {
  const defensiveCooldownAuraFrame = createAuraFrame(
    unit + "DefCd",
    cooldownSectionFrame,
  );
  defensiveCooldownAuraFrame.SetPoint(
    "TOPRIGHT",
    cooldownSectionFrame,
    "TOPRIGHT",
    4,
    4,
  );
  defensiveCooldownAuraFrame.SetSize(
    context.config.unitFrame_bigIconSize,
    context.config.unitFrame_bigIconSize,
  );
  const externalDefensiveBuffAuraFrame = createAuraFrame(
    unit + "External",
    cooldownSectionFrame,
  );
  externalDefensiveBuffAuraFrame.SetPoint(
    "TOPRIGHT",
    cooldownSectionFrame,
    "TOPRIGHT",
    4 +
      context.config.unitFrame_bigIconSize +
      context.config.unitFrame_bigIconGap,
    4,
  );
  externalDefensiveBuffAuraFrame.SetSize(
    context.config.unitFrame_bigIconSize,
    context.config.unitFrame_bigIconSize,
  );
  const hotAuraFrames = [];
  for (let i of [0, 1, 2, 3, 4]) {
    const hotAuraFrame = createAuraFrame(unit + "Hot" + i, healthbarFrame);
    hotAuraFrame.SetSize(
      context.config.unitFrame_smallIconSize,
      context.config.unitFrame_smallIconSize,
    );
    hotAuraFrame.SetPoint(
      "BOTTOMLEFT",
      healthbarFrame,
      "BOTTOMLEFT",
      4 +
        i *
          (context.config.unitFrame_smallIconGap +
            context.config.unitFrame_smallIconSize),
      -4,
    );
    hotAuraFrames.push(hotAuraFrame);
  }

  return {
    defensiveCooldownAuraFrame,
    externalDefensiveBuffAuraFrame,
    hotAuraFrames,
  };
}

export function createAuraFrame(
  name: string,
  parent: SimpleFrame,
): myAuraFrame {
  return CreateFrame(
    "Button",
    name,
    parent,
    "GladiusExAuraFrame",
  ) as ReturnType<typeof createAuraFrame>;
}

export function drawHot(
  uf: unitFrameStruct & buffFrames,
  hotIndex: "defcd" | "externaldefbuff" | 0 | 1 | 2 | 3 | 4,
  icon: number,
  stacks: number,
  _spellId: spellID,
  duration: number,
  expires: number,
) {
  const auraF =
    hotIndex === "defcd"
      ? uf.defensiveCooldownAuraFrame
      : hotIndex === "externaldefbuff"
        ? uf.externalDefensiveBuffAuraFrame
        : uf.hotAuraFrames[hotIndex];
  if (!auraF) {
    print("hotIndex is too large");
  }
  auraF.icon.SetTexture(icon as any /* ? */);
  if (duration > 0) {
    CooldownFrame_Set(auraF.cooldown, expires - duration, duration, 1);
    auraF.cooldown.Show();
  } else {
    CooldownFrame_Set(auraF.cooldown, 0, 0, 0);
    auraF.cooldown.Hide();
  }

  // cooldown swipe
  // auraF.cooldown.SetSwipeTexture("");
  auraF.cooldown.SetDrawSwipe(true);
  auraF.cooldown.SetReverse(false);
  const swipecolor = { r: 0, g: 0, b: 0, a: 0.8 };
  auraF.cooldown.SetSwipeColor(
    swipecolor.r,
    swipecolor.g,
    swipecolor.b,
    swipecolor.a,
  );

  // stacks
  auraF.count.SetText(stacks > 1 ? stacks.toString() : (null as any));

  // border
  const hotBorderColor = { r: 0, g: 0, b: 0 };
  auraF.border.SetVertexColor(
    hotBorderColor.r,
    hotBorderColor.g,
    hotBorderColor.b,
  );
  auraF.border.Show();

  // show
  auraF.Show();
}
