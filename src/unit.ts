export function unitIsPlayerPartyRaid(
  u: UnitId,
): u is UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer {
  if (u === "player" || u.startsWith("party") || u.startsWith("raid")) {
    return true;
  } else {
    return false;
  }
}

export function unitIsArena(u: UnitId): u is UnitIdArena {
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

export const allPlayerPartyRaidAndArenaUnits: (
  | UnitIdPlayer
  | UnitIdParty
  | UnitIdRaidPlayer
  | UnitIdArena
)[] = [
  ...allPlayerPartyAndRaidUnits,
  ...[
    "arena1" as UnitIdArena,
    "arena2" as UnitIdArena,
    "arena3" as UnitIdArena,
  ],
];
