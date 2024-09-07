/** @noSelfInFile */

import { sources } from "./sources";
import { checkAllCasesHandled, isNil } from "./utils";

export function unitIsPlayer(u: supportedUnit): u is UnitIdPlayer {
  return u === "player";
}

export function unitIsParty(u: supportedUnit): u is UnitIdParty {
  return u.startsWith("party");
}

export function unitIsRaidUnit(
  u: supportedUnit
): u is
  | "myraid1"
  | "myraid2"
  | "myraid3"
  | "myraid4"
  | "myraid5"
  | "myraid6"
  | "myraid7"
  | "myraid8"
  | "myraid9"
  | "myraid10" {
  return u.startsWith("myraid");
}

export function unitIsPlayerPartyRaid(
  u: supportedUnit
): u is
  | UnitIdPlayer
  | UnitIdParty
  | "myraid1"
  | "myraid2"
  | "myraid3"
  | "myraid4"
  | "myraid5"
  | "myraid6"
  | "myraid7"
  | "myraid8"
  | "myraid9"
  | "myraid10" {
  return unitIsPlayer(u) || unitIsParty(u) || unitIsRaidUnit(u);
}

export function unitIsArena(
  u: supportedUnit
): u is "arena1" | "arena2" | "arena3" {
  if (u.startsWith("arena")) {
    return true;
  } else {
    return false;
  }
}

export const allArenaUnits: UnitIdArena[] = ["arena1", "arena2", "arena3"];

export const allPlayerPartyAndRaidUnits: (
  | UnitIdPlayer
  | UnitIdParty
  | UnitIdRaidPlayer
)[] = [
  "player",
  "party1",
  "party2",
  "party3",
  "party4",
  "raid1",
  "raid2",
  "raid3",
  "raid4",
  "raid5",
  "raid6",
  "raid7",
  "raid8",
  "raid9",
  "raid10",
  "raid11",
  "raid12",
  "raid13",
  "raid14",
  "raid15",
  "raid16",
  "raid17",
  "raid18",
  "raid19",
  "raid20",
  "raid21",
  "raid22",
  "raid23",
  "raid24",
  "raid25",
  "raid26",
  "raid27",
  "raid28",
  "raid29",
  "raid30",
  "raid31",
  "raid32",
  "raid33",
  "raid34",
  "raid35",
  "raid36",
  "raid37",
  "raid38",
  "raid39",
  "raid40",
];

export type supportedUnit = (typeof allSupportedTranslatedUnits)[number];

export const allSupportedTranslatedUnits: (
  | UnitIdPlayer
  | UnitIdParty
  | "myraid1"
  | "myraid2"
  | "myraid3"
  | "myraid4"
  | "myraid5"
  | "myraid6"
  | "myraid7"
  | "myraid8"
  | "myraid9"
  | "myraid10"
  | UnitIdArena
)[] = [
  "player",

  "party1",
  "party2",
  "party3",
  "party4",

  "myraid1",
  "myraid2",
  "myraid3",
  "myraid4",
  "myraid5",
  "myraid6",
  "myraid7",
  "myraid8",
  "myraid9",
  "myraid10",

  "arena1",
  "arena2",
  "arena3",
];

export const allSupportedUnits: (
  | UnitIdPlayer
  | UnitIdParty
  | "raid1"
  | "raid2"
  | "raid3"
  | "raid4"
  | "raid5"
  | "raid6"
  | "raid7"
  | "raid8"
  | "raid9"
  | "raid10"
  | "raid11"
  | "raid12"
  | "raid13"
  | "raid14"
  | "raid15"
  | UnitIdArena
)[] = [
  "player",

  "party1",
  "party2",
  "party3",
  "party4",

  "raid1",
  "raid2",
  "raid3",
  "raid4",
  "raid5",

  "raid6",
  "raid7",
  "raid8",
  "raid9",
  "raid10",

  "raid11",
  "raid12",
  "raid13",
  "raid14",
  "raid15",

  "arena1",
  "arena2",
  "arena3",
];

export function unitIsInPlayerRaidGroup(unit: UnitIdRaidPlayer): boolean {
  const playerIndex = UnitInRaid("player");
  if (isNil(playerIndex)) {
    return false;
  }
  const playerGroup = Math.floor(playerIndex / 5);
  const unitGroup = Math.floor(parseInt(unit.substring(4, 6)) / 5);
  return playerGroup === unitGroup;
}

// We want to show always the first/second raid group, and call it raid1 - 5.
// We do that translation here
// It's kinda weird and tricky, but should do what we want in RBG's
export function translateUnit(
  sources: sources,
  target_: "all" | UnitId
): null | supportedUnit {
  if (
    target_ === "player" ||
    target_ === "party1" ||
    target_ === "party2" ||
    target_ === "party3" ||
    target_ === "party4" ||
    target_ === "arena1" ||
    target_ === "arena2" ||
    target_ === "arena3"
  ) {
    return target_;
  }

  if (
    target_ === "raid1" ||
    target_ === "raid2" ||
    target_ === "raid3" ||
    target_ === "raid4" ||
    target_ === "raid5"
  ) {
    if (sources.playerGroupIndexZeroBased.get() === 0) {
      // we ignore first raid group if we are in it
      return null;
    } else {
      return target_ === "raid1"
        ? "myraid1"
        : target_ === "raid2"
          ? "myraid2"
          : target_ === "raid3"
            ? "myraid3"
            : target_ === "raid4"
              ? "myraid4"
              : target_ === "raid5"
                ? "myraid5"
                : checkAllCasesHandled(target_);
    }
  }

  if (
    target_ === "raid6" ||
    target_ === "raid7" ||
    target_ === "raid8" ||
    target_ === "raid9" ||
    target_ === "raid10"
  ) {
    if (sources.playerGroupIndexZeroBased.get() === 0) {
      return target_ === "raid6"
        ? "myraid1"
        : target_ === "raid7"
          ? "myraid2"
          : target_ === "raid8"
            ? "myraid3"
            : target_ === "raid9"
              ? "myraid4"
              : target_ === "raid10"
                ? "myraid5"
                : checkAllCasesHandled(target_);
    } else if (sources.playerGroupIndexZeroBased.get() === 1) {
      return null;
    } else if (sources.playerGroupIndexZeroBased.get() === 2) {
      return target_ === "raid6"
        ? "myraid6"
        : target_ === "raid7"
          ? "myraid7"
          : target_ === "raid8"
            ? "myraid8"
            : target_ === "raid9"
              ? "myraid9"
              : target_ === "raid10"
                ? "myraid10"
                : checkAllCasesHandled(target_);
    }
  }

  if (
    target_ === "raid11" ||
    target_ === "raid12" ||
    target_ === "raid13" ||
    target_ === "raid14" ||
    target_ === "raid15"
  ) {
    if (
      sources.playerGroupIndexZeroBased.get() === 0 ||
      sources.playerGroupIndexZeroBased.get() === 1
    ) {
      return target_ === "raid11"
        ? "myraid6"
        : target_ === "raid12"
          ? "myraid7"
          : target_ === "raid13"
            ? "myraid8"
            : target_ === "raid14"
              ? "myraid9"
              : target_ === "raid15"
                ? "myraid10"
                : checkAllCasesHandled(target_);
    } else {
      return null;
    }
  }
  return null;
}
