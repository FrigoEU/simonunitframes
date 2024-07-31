/** @noSelfInFile */

import { context, makeContext } from "./context";
import {
  createUnitFrame,
  setHealth,
  setHealthbarColor,
  setMaxHealth,
} from "./draw";
import {
  allPlayerPartyAndRaidUnits,
  allPlayerPartyRaidAndArenaUnits,
  unitIsArena,
  unitIsPlayerPartyRaid,
} from "./unit";
import { checkAllCasesHandled, isNil } from "./utils";

const eventsWeListenTo = [
  "PLAYER_ENTERING_WORLD" as const,
  "UNIT_NAME_UPDATE" as const,
  "UNIT_HEALTH" as const,
  "UNIT_MAXHEALTH" as const,
  "GROUP_ROSTER_UPDATE" as const,
  "PLAYER_REGEN_ENABLED" as const,
  // "UNIT_PET" as const,
  "UNIT_AURA" as const,
  "UNIT_POWER_UPDATE" as const,
  "UNIT_MAXPOWER" as const,
  "UNIT_ABSORB_AMOUNT_CHANGED" as const,
  "PLAYER_FOCUS_CHANGED" as const,
  "PLAYER_TARGET_CHANGED" as const,

  "ARENA_OPPONENT_UPDATE" as const,
  "ARENA_PREP_OPPONENT_SPECIALIZATIONS" as const,
  // "UNIT_TARGET" as const, // Could be useful for arena targets

  // "UNIT_HEAL_PREDICTION" as const
  // "UNIT_PORTRAIT_UPDATE" as const,
];

start();

function start() {
  const context = makeContext();

  const eventFrame = CreateFrame("Frame");

  for (let eventName of eventsWeListenTo) {
    eventFrame.RegisterEvent(eventName);
  }
  eventFrame.SetScript("OnEvent", (ev, arg1, arg2) =>
    handleWowEvent(context, ev, arg1, arg2),
  );
}

let friendlyFramesFullUpdateQueued = false;
let hostileFramesFullUpdateQueued = false;

// Adding type safety to events
// plus dispatching the correct functions for each wow event
function handleWowEvent(
  this: void,
  context: context,
  eventName: (typeof eventsWeListenTo)[number],
  arg1: any,
  arg2: any,
) {
  switch (eventName) {
    case "PLAYER_ENTERING_WORLD": {
      print("hello, world");
      updateFriendlyFrames(context, "all", "all");
      updateFriendlyFrames(context, "all", "all");
      updateFriendlyAuras(context, "all", "all");
      return;
    }
    case "GROUP_ROSTER_UPDATE": {
      if (InCombatLockdown()) {
        friendlyFramesFullUpdateQueued = true;
      } else {
        updateFriendlyFrames(context, "all", "all");
        updateFriendlyAuras(context, "all", "all");
      }
      return;
    }
    case "ARENA_OPPONENT_UPDATE":
    case "ARENA_PREP_OPPONENT_SPECIALIZATIONS": {
      if (InCombatLockdown()) {
        hostileFramesFullUpdateQueued = true;
      } else {
        updateFriendlyFrames(context, "all", "all");
      }
      return;
    }
    case "PLAYER_REGEN_ENABLED": {
      if (friendlyFramesFullUpdateQueued) {
        updateFriendlyFrames(context, "all", "all");
        updateFriendlyAuras(context, "all", "all");
        friendlyFramesFullUpdateQueued = false;
      }
      if (hostileFramesFullUpdateQueued) {
        updateFriendlyFrames(context, "all", "all");
        hostileFramesFullUpdateQueued = false;
      }
      return;
    }
    case "UNIT_HEALTH":
    case "UNIT_MAXHEALTH":
    case "UNIT_POWER_UPDATE":
    case "UNIT_MAXPOWER":
    case "UNIT_ABSORB_AMOUNT_CHANGED":
    case "UNIT_NAME_UPDATE": {
      const unitId = arg1 as UnitId;
      const domain =
        eventName === "UNIT_HEALTH"
          ? "health"
          : eventName === "UNIT_MAXHEALTH"
            ? "maxhealth"
            : eventName === "UNIT_POWER_UPDATE" || eventName === "UNIT_MAXPOWER"
              ? "power"
              : eventName === "UNIT_ABSORB_AMOUNT_CHANGED"
                ? "absorb"
                : eventName === "UNIT_NAME_UPDATE"
                  ? "character"
                  : checkAllCasesHandled(eventName);

      if (unitIsPlayerPartyRaid(unitId)) {
        updateFriendlyFrames(context, unitId, domain);
      }
      if (unitIsArena(unitId)) {
        updateFriendlyFrames(context, unitId, domain);
      }
      return;
    }
    case "PLAYER_FOCUS_CHANGED":
    case "PLAYER_TARGET_CHANGED": {
      return updateFriendlyFrames(context, "all", "highlight");
    }
    case "UNIT_AURA": {
      const unitId = arg1 as UnitId;
      if (unitIsPlayerPartyRaid(unitId)) {
        if (isNil(arg2)) {
          return updateFriendlyAuras(context, unitId, "all");
        } else {
          return updateFriendlyAuras(
            context,
            unitId,
            arg2 as UnitAuraUpdateInfo,
          );
        }
      }
      return;
    }
    default: {
      return checkAllCasesHandled(eventName);
    }
  }
}

const allFrameparts = [
  "health" as const,
  "maxhealth" as const,
  "power" as const,
  "absorb" as const,
  "character" as const,
  "highlight" as const,
];
type framepart = (typeof allFrameparts)[number];

function updateFriendlyFrames(
  context: context,
  target: "all" | UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer | UnitIdArena,
  part_in: "all" | framepart,
) {
  const units = target === "all" ? allPlayerPartyRaidAndArenaUnits : [target];
  const frameParts = part_in === "all" ? allFrameparts : [part_in];
  for (let unit of units) {
    const ufstruct = context.unitFrames[unit] || createUnitFrame(context, unit);
    if (!UnitExists(unit)) {
      ufstruct.container.Hide();
      return;
    } else {
      ufstruct.container.Show();
    }

    for (let framePart of frameParts) {
      if (framePart === "health") {
        setHealth(unit, ufstruct);
      } else if (framePart === "maxhealth") {
        setMaxHealth(unit, ufstruct);
      } else if (framePart === "character") {
        setHealthbarColor(unit, ufstruct);
        // setHealthbarText(unit, ufstruct) TODO!;
      } else if (framePart === "power" || framePart === "absorb") {
        // TODO!
      } else if (framePart === "highlight") {
      }
    }
  }
}

function updateFriendlyAuras(
  context: context,
  target: "all" | UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer,
  range: "all" | UnitAuraUpdateInfo,
) {
  const units = target === "all" ? allPlayerPartyAndRaidUnits : [target];
}
