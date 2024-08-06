/** @noSelfInFile */

import { isNil } from "./utils";

export function unitIsPlayer(u: supportedUnit): u is UnitIdPlayer {
  return u === "player";
}

export function unitIsParty(u: supportedUnit): u is UnitIdParty {
  return u.startsWith("party");
}

export function unitIsRaidUnit(
  u: supportedUnit,
): u is "myraid1" | "myraid2" | "myraid3" | "myraid4" | "myraid5" {
  return u.startsWith("raid");
}

export function unitIsPlayerPartyRaid(
  u: supportedUnit,
): u is
  | UnitIdPlayer
  | UnitIdParty
  | "myraid1"
  | "myraid2"
  | "myraid3"
  | "myraid4"
  | "myraid5" {
  return unitIsPlayer(u) || unitIsParty(u) || unitIsRaidUnit(u);
}

export function unitIsArena(
  u: supportedUnit,
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
