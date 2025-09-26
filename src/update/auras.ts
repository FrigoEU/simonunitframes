import {
  ccsWeTrack,
  dangerousDebuffs,
  getBuffIndex,
  hotIndexes,
  hotIndexToHotName,
  ignoredDebuffs,
  stunsWeTracks,
} from "../aura_lists";
import { playerCanDispelFromParty } from "../dispellable";
import { sortDots } from "../sortdots";
import {
  arenaInfo,
  defensiveCdInfo,
  dotInfo,
  externalDefFromPlayerInfo,
  focusInfo,
  healthinfo,
  hotInfo,
  offensiveCdInfo,
  Source,
  sources,
  targetInfo,
} from "../sources";
import { allSupportedUnits } from "../unit";
import { isNil } from "../utils";

export function handleAuraUpdates(
  info: {
    readonly tag: "aura";
    readonly auraUpdateInfo: null | UnitAuraUpdateInfo;
  },
  unitSource:
    | (healthinfo &
        targetInfo &
        defensiveCdInfo &
        externalDefFromPlayerInfo &
        offensiveCdInfo &
        hotInfo &
        dotInfo)
    | (healthinfo &
        defensiveCdInfo &
        externalDefFromPlayerInfo &
        hotInfo &
        dotInfo)
    | (healthinfo & targetInfo & defensiveCdInfo & offensiveCdInfo & arenaInfo)
    | (healthinfo &
        targetInfo &
        focusInfo &
        defensiveCdInfo &
        externalDefFromPlayerInfo &
        offensiveCdInfo &
        hotInfo &
        dotInfo),
  unit: (typeof allSupportedUnits)[number],
  sources: sources
) {
  if (isNil(info.auraUpdateInfo) || info.auraUpdateInfo.isFullUpdate === true) {
    // Resetting aura's
    unitSource.defensiveCooldownActive.set(null);
    if ("externalDefFromPlayerActive" in unitSource) {
      unitSource.externalDefFromPlayerActive.set(null);
    }
    if ("offensiveCooldownActive" in unitSource) {
      unitSource.offensiveCooldownActive.set(null);
    }
    if ("hot0" in unitSource) {
      for (let hotIndex of hotIndexes) {
        const hotName = hotIndexToHotName(hotIndex);
        unitSource[hotName].set(null);
      }
    }

    AuraUtil.ForEachAura(
      unit,
      "HELPFUL",
      100,
      (aura) =>
        processNewHelpfulAura(
          sources.player.class.get(),
          unit,
          unitSource,
          aura
        ),
      true
    );

    if ("dots" in unitSource) {
      const newDots = [] as AuraData[];
      AuraUtil.ForEachAura(
        unit,
        "HARMFUL",
        100,
        function handleNewHarmfulAura(aura: AuraData) {
          // print(aura.name);
          // DevTools_Dump(aura);
          if (shouldShowDot(aura)) {
            newDots.push(aura);
          }
        },
        true
      );
      newDots.sort(sortDots);
      // print(`Setting dots ${newDots.length}`);
      unitSource.dots.set(newDots);
    }
  } else {
    processAuraUpdateInfo(info, unit, unitSource, sources);
  }
}
function processAuraUpdateInfo(
  info: {
    readonly tag: "aura";
    readonly auraUpdateInfo: null | UnitAuraUpdateInfo;
  },
  unit: (typeof allSupportedUnits)[number],
  unitSource: sources[keyof sources],
  sources: sources
) {
  const auraUpdateInfo = info.auraUpdateInfo;
  if (isNil(auraUpdateInfo)) {
    return;
  }
  if (!isNil(auraUpdateInfo.updatedAuraInstanceIDs)) {
    // print(auraUpdateInfo.updatedAuraInstanceIDs);
    for (let auraInstanceID of auraUpdateInfo.updatedAuraInstanceIDs) {
      if ("defensiveCooldownActive" in unitSource) {
        updateAuraIfCorrectId(
          unit,
          auraInstanceID,
          unitSource.defensiveCooldownActive
        );
      }

      if ("externalDefFromPlayerActive" in unitSource) {
        updateAuraIfCorrectId(
          unit,
          auraInstanceID,
          unitSource.externalDefFromPlayerActive
        );
      }
      if ("offensiveCooldownActive" in unitSource) {
        updateAuraIfCorrectId(
          unit,
          auraInstanceID,
          unitSource.offensiveCooldownActive
        );
      }
      if ("hot0" in unitSource) {
        for (let hotIndex of hotIndexes) {
          const hotName = hotIndexToHotName(hotIndex);
          updateAuraIfCorrectId(unit, auraInstanceID, unitSource[hotName]);
        }
      }
      if ("dots" in unitSource) {
        const curr = unitSource.dots.get();
        const found = curr.find((old) => old.auraInstanceID === auraInstanceID);
        if (found) {
          const newaura = C_UnitAuras.GetAuraDataByAuraInstanceID(
            unit,
            auraInstanceID
          );
          if (newaura !== undefined) {
            const afterFilter = curr.filter(
              (old) => old.auraInstanceID !== auraInstanceID
            );
            afterFilter.push(newaura);
            afterFilter.sort(sortDots);
            unitSource.dots.set(afterFilter);
          }
        }
      }
    }
  }
  if (!isNil(auraUpdateInfo.removedAuraInstanceIDs)) {
    for (let auraInstanceID of auraUpdateInfo.removedAuraInstanceIDs) {
      if ("defensiveCooldownActive" in unitSource) {
        clearAuraIfCorrectId(
          auraInstanceID,
          unitSource.defensiveCooldownActive
        );
      }

      if ("externalDefFromPlayerActive" in unitSource) {
        clearAuraIfCorrectId(
          auraInstanceID,
          unitSource.externalDefFromPlayerActive
        );
      }
      if ("offensiveCooldownActive" in unitSource) {
        clearAuraIfCorrectId(
          auraInstanceID,
          unitSource.offensiveCooldownActive
        );
      }
      if ("hot0" in unitSource) {
        for (let hotIndex of hotIndexes) {
          const hotName = hotIndexToHotName(hotIndex);
          clearAuraIfCorrectId(auraInstanceID, unitSource[hotName]);
        }
      }
      if ("dots" in unitSource) {
        const curr = unitSource.dots.get();
        const afterFilter = curr.filter(
          (old) => old.auraInstanceID !== auraInstanceID
        );
        if (curr.length !== afterFilter.length) {
          unitSource.dots.set(afterFilter);
        }
      }
    }
  }
  if (!isNil(auraUpdateInfo.addedAuras)) {
    for (let aura of auraUpdateInfo.addedAuras) {
      if (aura.isHelpful) {
        processNewHelpfulAura(
          sources.player.class.get(),
          unit,
          unitSource,
          aura
        );
      }
      // DevTools_Dump(aura);
      if ("dots" in unitSource && shouldShowDot(aura)) {
        const curr = unitSource.dots.get();
        const n = curr.concat([aura]);
        n.sort(sortDots);
        // print(`Setting dots ${n.length}`);
        unitSource.dots.set(n);
      }
    }
  }
}

function processNewHelpfulAura(
  playerClass: className,
  unit: (typeof allSupportedUnits)[number],
  unitSource: sources[keyof sources],
  aura: AuraData
) {
  const hotIndex = getBuffIndex(
    { name: playerClass },
    aura.sourceUnit,
    aura.name,
    aura.spellId as spellID
  );

  // if (unit.startsWith("arena")) {
  //   print(`Updating aura for ${unit} - ${aura.name} - ${hotIndex}`);
  // }

  // if (unit.startsWith("arena") && hotIndex === "offcd") {
  //   print(`ARENA - Found offcd for ARENA!`);
  // }
  // if (unit.startsWith("party") && hotIndex === "offcd") {
  //   print(`Updating aura for ${unit} - ${aura.name} - ${hotIndex}`);
  //   print(`PARTY - Found offcd for PARTY!`);
  // }

  if (hotIndex === null) {
    return;
  } else if (hotIndex === "defcd") {
    if ("defensiveCooldownActive" in unitSource) {
      unitSource.defensiveCooldownActive.set(aura);
    }
  } else if (hotIndex === "externaldefbuff") {
    if ("externalDefFromPlayerActive" in unitSource) {
      unitSource.externalDefFromPlayerActive.set(aura);
    }
  } else if (hotIndex === "offcd") {
    if ("offensiveCooldownActive" in unitSource) {
      unitSource.offensiveCooldownActive.set(aura);
    }
  } else {
    const hotname = hotIndexToHotName(hotIndex);
    if ("hot0" in unitSource) {
      const s = unitSource[hotname];
      s.set(aura);
    }
  }
}

function clearAuraIfCorrectId(
  auraInstanceID: number | undefined,
  s: Source<AuraData | null>
) {
  const curr = s.get();
  if (curr && curr.auraInstanceID === auraInstanceID) {
    s.set(null);
  }
}
function updateAuraIfCorrectId(
  unit: UnitId,
  auraInstanceID: number,
  s: Source<AuraData | null>
) {
  const curr = s.get();
  if (curr && curr.auraInstanceID === auraInstanceID) {
    const newaura = C_UnitAuras.GetAuraDataByAuraInstanceID(
      unit,
      auraInstanceID
    );
    if (newaura) {
      s.set(newaura);
    }
  }
}

function shouldShowDot(aura: AuraData): boolean {
  // Showing only DoT's here
  if (aura.isHarmful === false) {
    return false;
  }
  if (aura.sourceUnit === "player") {
    return false;
  }

  if (ignoredDebuffs.includes(aura.name)) {
    return false;
  }

  // Showing all PvE Auras
  if (aura.isBossAura || aura.isRaid || !aura.isFromPlayerOrPlayerPet) {
    return true;
  }

  // Showing dispellable PvP auras
  if (
    aura.dispelName !== null &&
    (aura.dispelName === "Curse" ||
      aura.dispelName === "Magic" ||
      aura.dispelName === "Disease" ||
      aura.dispelName === "Poison") &&
    playerCanDispelFromParty(aura.dispelName)
  ) {
    return true;
  }

  // Showing dangerous PvP auras
  if (dangerousDebuffs.includes(aura.name)) {
    return true;
  }

  if (stunsWeTracks.includes(aura.name) || ccsWeTrack.includes(aura.name)) {
    return true;
  }

  return false;
}
