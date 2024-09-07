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
// const unitsDone: UnitId[] = [];
export function translateUnit(
  sources: sources,
  unit: UnitId
): null | supportedUnit {
  if (
    unit === "player" ||
    unit === "party1" ||
    unit === "party2" ||
    unit === "party3" ||
    unit === "party4" ||
    unit === "arena1" ||
    unit === "arena2" ||
    unit === "arena3"
  ) {
    return unit;
  }

  if (!unit.startsWith("raid")) {
    return null;
  }
  const raidIndex = UnitInRaid(unit);
  if (isNil(raidIndex)) {
    return null;
  }
  const [name, rank, subgroup_] = GetRaidRosterInfo(raidIndex);
  if (isNil(name)) {
    return null;
  }
  const playerSubGroup = sources.playerGroupIndexZeroBased.get();
  const subgroup = subgroup_ - 1;
  const unitGroupIndexZerobased =
    ((parseInt(unit.substring(4, 6)) - 1) % 5) + 1;
  let myraidIndex = null;
  if (subgroup === playerSubGroup) {
    // we ignore group if we are in it
    // return null;
  } else if (subgroup < playerSubGroup) {
    myraidIndex = subgroup * 5 + unitGroupIndexZerobased;
    // return ("myraid" + myraidIndex.toString()) as supportedUnit;
  } else if (subgroup > playerSubGroup) {
    myraidIndex = (subgroup - 1) * 5 + unitGroupIndexZerobased;
    // return ("myraid" + myraidIndex.toString()) as supportedUnit;
  } else {
    // return null;
  }
  if (myraidIndex === null) {
    return null;
  } else {
    const res = ("myraid" + myraidIndex.toString()) as supportedUnit;
    // if (!unitsDone.includes(unit)) {
    //   print(
    //     `${unit} | playerSub: ${playerSubGroup} | sub ${subgroup} | unitGroupIndex ${unitGroupIndexZerobased} | res: ${res}`
    //   );
    //   unitsDone.push(unit);
    // }
    return res;
  }

  // doesn't work because raid leader screws with it unless he's in party 1
  // raid5 -> 5
  // if (
  //   unit === "raid1" ||
  //   unit === "raid2" ||
  //   unit === "raid3" ||
  //   unit === "raid4" ||
  //   unit === "raid5"
  // ) {
  //   if (sources.playerGroupIndexZeroBased.get() === 0) {
  //     return null;
  //   } else {
  //     return ("myraid" + unitRaidIndex1Based.toString()) as supportedUnit;
  //   }
  // }

  // if (
  //   unit === "raid6" ||
  //   unit === "raid7" ||
  //   unit === "raid8" ||
  //   unit === "raid9" ||
  //   unit === "raid10"
  // ) {
  //   if (sources.playerGroupIndexZeroBased.get() === 0) {
  //     return ("myraid" + (unitRaidIndex1Based - 5).toString()) as supportedUnit;
  //   } else if (sources.playerGroupIndexZeroBased.get() === 1) {
  //     return null;
  //   } else if (sources.playerGroupIndexZeroBased.get() === 2) {
  //     return ("myraid" + unitRaidIndex1Based.toString()) as supportedUnit;
  //   }
  // }

  // if (
  //   unit === "raid11" ||
  //   unit === "raid12" ||
  //   unit === "raid13" ||
  //   unit === "raid14" ||
  //   unit === "raid15"
  // ) {
  //   if (
  //     sources.playerGroupIndexZeroBased.get() === 0 ||
  //     sources.playerGroupIndexZeroBased.get() === 1
  //   ) {
  //     return ("myraid" + (unitRaidIndex1Based - 5).toString()) as supportedUnit;
  //   } else {
  //     return null;
  //   }
  // }
  // return null;
}

export function calcRaidGroupIndex(sources: sources): null | number {
  const playerName = sources.player.name.get();
  // print(`player: ${playerName}`);
  for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    const [name, rank, subgroup] = GetRaidRosterInfo(i);
    // if (name) {
    //   print(`${i}. raid name: ${name}, subgroup ${subgroup}`);
    // }
    if (name && name === playerName) {
      // print(`Found: subgroup ${subgroup} - 1`);
      return subgroup - 1;
    }
  }
  return null;
}
