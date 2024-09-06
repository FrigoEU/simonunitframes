/** @noSelfInFile */

import { config } from "../config";
import {
  allSupportedTranslatedUnits,
  unitIsArena,
  unitIsParty,
  unitIsPlayerPartyRaid,
  unitIsRaidUnit,
} from "../unit";
import { checkAllCasesHandled } from "../utils";

export function setPosition(
  config: config,
  parent: SimpleFrame,
  frame: SimpleFrame,
  unit: (typeof allSupportedTranslatedUnits)[number]
) {
  const point = unitIsPlayerPartyRaid(unit) ? "TOPRIGHT" : "TOPLEFT";
  const { x, y } = getUnitGridIndex(unit);
  frame.SetPoint(
    point,
    parent,
    point,
    x * (config.unitFrame_horizontalGap + config.unitFrame_fullWidth),
    -y * (config.unitFrame_verticalGap + config.unitFrame_fullHeight)
  );
}

//
// RAID1 = 1,0   PLAYER = 0,0
// RAID2 = 1,1   PARTY1 = 0,1
// RAID3 = 1,2   PARTY2 = 0,2
// RAID4 = 1,3   PARTY3 = 0,3
// RAID5 = 1,4   PARTY4 = 0,4
function getUnitGridIndex(unit: (typeof allSupportedTranslatedUnits)[number]): {
  x: any;
  y: any;
} {
  if (unit === "player") {
    return { x: 0, y: 0 };
  } else if (unitIsParty(unit)) {
    const i = parseInt(unit.substring(5, 6));
    return { x: 0, y: i };
  } else if (unitIsArena(unit)) {
    const i = parseInt(unit.substring(5, 6));
    return { x: 0, y: i - 1 };
  } else if (unitIsRaidUnit(unit)) {
    const unitRaidIndex = parseInt(unit.substring(6, 8)) - 1;
    return {
      x: -1,
      y: unitRaidIndex % 5,
    };
  } else {
    return checkAllCasesHandled(unit, "getUnitGridIndex");
  }
}
