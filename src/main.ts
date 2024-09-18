/** @noSelfInFile */

import {
  dangerousDebuffs,
  getBuffIndex,
  hotIndexes,
  hotIndexToHotName,
  ignoredDebuffs,
} from "./auras";
import { makeConfig } from "./config";
import { playerCanDispelFromParty } from "./dispellable";
import {
  drawArenaTargetedByFrames,
  drawPartyTargetedByFrames,
} from "./draw/arenatargets";
import { drawFriendlyCooldownSection } from "./draw/cooldowns";
import { drawDotFrames } from "./draw/dots";
import { drawHealthbarFrames } from "./draw/healthbar";
import { drawHighlightFrames } from "./draw/highlight";
import { drawHotFrames } from "./draw/hots";
import { setPosition } from "./draw/position";
import { drawArenaSpecs } from "./draw/spec";
import { runNonUnitFrameStuff } from "./nonunitframestuff";
import { startCheckingRange } from "./rangecheck";
import { sortDots } from "./sortdots";
import { arenaInfo, healthinfo, makeSources, Source, sources } from "./sources";
import { startTest } from "./testmode";
import {
  allSupportedTranslatedUnits,
  allSupportedUnits,
  calcRaidGroupIndex,
  supportedUnit,
  translateUnit,
  unitIsArena,
  unitIsParty,
  unitIsPlayer,
  unitIsPlayerPartyRaid,
  unitIsRaidUnit,
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
  "UNIT_TARGET" as const,

  // "UNIT_SPELLCAST_SUCCEEDED" as const,

  "ARENA_OPPONENT_UPDATE" as const,
  "ARENA_PREP_OPPONENT_SPECIALIZATIONS" as const,

  // "UNIT_HEAL_PREDICTION" as const
  // "UNIT_PORTRAIT_UPDATE" as const,
];

const sources = start();

SLASH_TEST1 = "/simontest";
let testing = false;
SlashCmdList["TEST"] = function () {
  testing = !testing;
  testing ? startTest(sources) : stopTest();
};

export function stopTest() {
  print("stopping testing!");
  // Just resetting everything
  handleWowEvent(sources, "PLAYER_ENTERING_WORLD", null, null);
}

const redrawAfterCombatQueue: [healthinfo, SimpleFrame][] = [];

function start() {
  // Making all sources immediately
  const sources = makeSources();
  const config = makeConfig();

  // Drawing ALL frames immediately
  const friendlyFramesParent = CreateFrame(
    "Frame",
    "SimonPartyFrame",
    UIParent
  );
  friendlyFramesParent.SetClampedToScreen(true);
  friendlyFramesParent.SetPoint(
    "TOPRIGHT",
    UIParent,
    "CENTER",
    -config.partyAndArenaContainersOffsetX,
    config.partyAndArenaContainersOffsetY
  );
  friendlyFramesParent.SetSize(1, 1);
  friendlyFramesParent.Show();

  const arenaFramesParent = CreateFrame("Frame", "SimonArenaFrame", UIParent);
  arenaFramesParent.SetClampedToScreen(true);
  arenaFramesParent.SetPoint(
    "TOPRIGHT",
    UIParent,
    "CENTER",
    config.partyAndArenaContainersOffsetX,
    config.partyAndArenaContainersOffsetY
  );
  arenaFramesParent.SetSize(1, 1);
  arenaFramesParent.Show();

  const nameP_ = "SimonUnitFrames";

  // Initial rendering and wiring up of sources
  for (let unit of allSupportedTranslatedUnits) {
    const nameP = nameP_ + unit;
    const parent = unitIsArena(unit) ? arenaFramesParent : friendlyFramesParent;

    const container = CreateFrame("Frame", nameP, parent, "BackdropTemplate");
    container.SetSize(config.unitFrame_fullWidth, config.unitFrame_fullHeight);
    container.SetClampedToScreen(true); // Frame can't move offscreen
    setPosition(config, parent, container, unit);

    if (unitIsPlayerPartyRaid(unit)) {
      const unitSource = sources[unit];
      drawHealthbarFrames(
        config,
        nameP,
        container,
        unitSource,
        "friendly",
        unit
      );
      drawHighlightFrames(config, nameP, container, unitSource, sources.player);
      drawFriendlyCooldownSection(config, nameP, container, unitSource);
      drawHotFrames(config, nameP, container, unitSource);
      drawDotFrames(config, nameP, container, unitSource);
    }
    if (unitIsPlayer(unit) || unitIsParty(unit)) {
      const unitSource = sources[unit];
      drawPartyTargetedByFrames(config, nameP, container, unitSource, sources);
    }

    if (unitIsArena(unit)) {
      const unitSource = sources[unit];
      drawHealthbarFrames(config, nameP, container, unitSource, "arena", unit);
      drawArenaTargetedByFrames(config, nameP, container, unitSource, sources);
      drawArenaSpecs(config, nameP, container, unitSource);
    }

    const unitSource = sources[unit];
    unitSource.exists.observe((exists) => {
      if (UnitAffectingCombat("player") === true) {
        // Can't show/hide frames in combat (because we use SecureButtonTemplate)
        redrawAfterCombatQueue.push([unitSource, container]);
      } else {
        if (exists === true) {
          container.Show();
        } else {
          container.Hide();
        }
      }
    });
  }

  const eventFrame = CreateFrame("Frame");

  for (let eventName of eventsWeListenTo) {
    eventFrame.RegisterEvent(eventName);
  }
  eventFrame.SetScript("OnEvent", (self, ev, arg1, arg2) =>
    handleWowEvent(sources, ev, arg1, arg2)
  );

  startCheckingRange(sources);

  return sources;
}

// Adding type safety to events
// plus dispatching the correct functions for each wow event
function handleWowEvent(
  sources: sources,
  eventName: (typeof eventsWeListenTo)[number],
  arg1: any,
  arg2: any
) {
  if (testing) {
    print(`Testmode: Ignoring event ${eventName}`);
    return;
  }
  switch (eventName) {
    case "PLAYER_ENTERING_WORLD": {
      runNonUnitFrameStuff();
      sources.player.name.set(UnitName("player")[0]);
      sources.playerGroupIndexZeroBased.set(calcRaidGroupIndex(sources) || 0);
      // print("player group index: " + sources.playerGroupIndexZeroBased.get());
      updateInfo(sources, "all", "all");
    }
    case "GROUP_ROSTER_UPDATE": {
      sources.playerGroupIndexZeroBased.set(calcRaidGroupIndex(sources) || 0);
      // print("player group index: " + sources.playerGroupIndexZeroBased.get());
      updateInfo(sources, "all", "all");
    }
    case "ARENA_OPPONENT_UPDATE":
    case "ARENA_PREP_OPPONENT_SPECIALIZATIONS": {
      updateInfo(sources, "arena1", "all");
      updateInfo(sources, "arena2", "all");
      updateInfo(sources, "arena3", "all");
    }
    case "PLAYER_REGEN_ENABLED": {
      updateInfo(sources, "all", "all");
      for (let redrawTarget of redrawAfterCombatQueue) {
        if (redrawTarget[0].exists.get() === true) {
          redrawTarget[1].Show();
        } else {
          redrawTarget[1].Hide();
        }
      }
      redrawAfterCombatQueue.length = 0;
    }
    case "UNIT_HEALTH": {
      updateInfo(sources, arg1 as UnitId, { tag: "health" });
    }
    case "UNIT_MAXHEALTH": {
      updateInfo(sources, arg1 as UnitId, { tag: "maxhealth" });
    }
    case "UNIT_POWER_UPDATE":
    case "UNIT_MAXPOWER": {
      updateInfo(sources, arg1 as UnitId, { tag: "power" });
    }
    case "UNIT_ABSORB_AMOUNT_CHANGED": {
      updateInfo(sources, arg1 as UnitId, { tag: "absorb" });
    }
    case "UNIT_NAME_UPDATE": {
      updateInfo(sources, arg1 as UnitId, { tag: "character" });
    }
    case "PLAYER_FOCUS_CHANGED": {
      return updateInfo(sources, "all", { tag: "focus" });
    }
    case "PLAYER_TARGET_CHANGED": {
      return updateInfo(sources, "all", { tag: "target" });
    }
    case "UNIT_TARGET": {
      return updateInfo(sources, arg1 as UnitId, { tag: "target" });
    }
    case "UNIT_AURA": {
      const unitId = arg1 as UnitId;
      if (isNil(arg2)) {
        return updateInfo(sources, unitId, {
          tag: "aura",
          auraUpdateInfo: null,
        });
      } else {
        return updateInfo(sources, unitId, {
          tag: "aura",
          auraUpdateInfo: arg2,
        });
      }
    }
    // case "UNIT_SPELLCAST_SUCCEEDED": {
    //   const unitId = arg1 as UnitId;
    //   const spellName = arg2 as string;
    //   const spellId = arg5 as spellID;

    //   return updateInfo(sources, unitId, {
    //     tag: "spellcast",
    //     spellName: spellName,
    //     spellId,
    //   });
    // }
    default: {
      return checkAllCasesHandled(eventName, "eventName");
    }
  }
}

const allFrameparts = [
  { tag: "maxhealth" } as const,
  { tag: "health" } as const,
  { tag: "power" } as const,
  { tag: "absorb" } as const,
  { tag: "character" } as const,
  { tag: "target" } as const,
  { tag: "focus" } as const,
  // {
  //   tag: "spellcast",
  //   spellName: "" as string,
  //   spellId: -1 as spellID,
  // } as const,
  { tag: "aura", auraUpdateInfo: null as null | UnitAuraUpdateInfo } as const,
];
type framepart = (typeof allFrameparts)[number];

// Updating internal datamodel from WoW Events
function updateInfo(
  sources: sources,
  target: "all" | UnitId,
  part_in: "all" | framepart
) {
  const units =
    target === "all"
      ? allSupportedUnits
      : [allSupportedUnits.find((u) => u === target) ?? null].filter(
          (u) => !isNil(u)
        );

  const infos = part_in === "all" ? allFrameparts : [part_in];

  for (let unit of units) {
    // Translating raid units
    //
    // Trickiest part of the whole app
    // Translating real raidunit names to "our" raid unit names because I want to always show the party and then max 1 more raid party
    const translatedUnit = translateUnit(sources, unit);
    if (translatedUnit === null) {
      continue;
    }
    const unitSource = sources[translatedUnit];
    if (unitIsArena(translatedUnit) && GetInstanceInfo()[1] !== "arena") {
      unitSource.exists.set(false);
      continue;
    }
    if (
      UnitExists(unit) ||
      // UnitExists doesn't work very well for arenax
      (unitIsArena(translatedUnit) &&
        getIndexFromArenaUnit(translatedUnit) <= getArenaSize())
    ) {
      unitSource.exists.set(true);
    } else {
      unitSource.exists.set(false);
      continue;
    }
    // if (unit.startsWith("raid")) {
    //   print(unit + " -> " + translatedUnit + " -> " + UnitClass(unit)[0]);
    //   print();
    // }

    for (let info of infos) {
      if (info.tag === "health") {
        unitSource.health.current.set(UnitHealth(unit));
      } else if (info.tag === "maxhealth") {
        unitSource.health.max.set(UnitHealthMax(unit));
      } else if (info.tag === "character") {
        const cl = UnitClass(unit)[1];
        if (isNil(cl) && unitIsArena(translatedUnit)) {
          const [_a, _b, _c, icon, _e, cl] = GetSpecializationInfoByID(
            GetArenaOpponentSpec(getIndexFromArenaUnit(translatedUnit))!
          );
          if ("specIcon" in unitSource) {
            unitSource.specIcon.set(icon);
          }
          unitSource.class.set(cl as className);
        } else {
          unitSource.class.set(cl as className);
        }
        unitSource.guid.set(UnitGUID(unit) || "");
        unitSource.name.set(UnitName(unit)[0] || "");
        unitSource.unitId.set(unit);
        if ("arenaDpsIndex" in unitSource && unitIsArena(translatedUnit)) {
          unitSource.arenaDpsIndex.set(calcArenaDpsIndex(translatedUnit));
        }
      } else if (info.tag === "power" || info.tag === "absorb") {
        // TODO!
      } else if (info.tag === "target") {
        if ("target" in unitSource) {
          unitSource.target.set(UnitGUID(unit + "target") || null);
          // print(
          //   `target ${unitSource.class.get()} - ${unitSource.target.get()}`
          // );
        }
      } else if (info.tag === "focus") {
        if (unit === "player") {
          sources.player.focus.set(UnitGUID("focus") || null);
        }
        // } else if (info.tag === "spellcast") {
        //   if ("offensiveCooldownActive" in unitSource) {
        //     if (offensiveSpellsWeTrack.includes(info.spellName)) {
        //       const spellInfo = GetSpellInfo(info.spellName);
        //       if (spellInfo) {
        //         // Testing
        //         unitSource.offensiveCooldownActive.set({
        //           name: info.spellName,
        //           icon: spellInfo[2] as unknown as number,
        //           duration: 6,
        //           expirationTime: 6,
        //           applications: 0,
        //           auraInstanceID: -1,
        //         } as AuraData);
        //       }
        //     }
        //   }
      } else if (info.tag === "aura") {
        if (
          isNil(info.auraUpdateInfo) ||
          info.auraUpdateInfo.isFullUpdate === true
        ) {
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
      } else {
        checkAllCasesHandled(info);
      }
    }
  }
}

function calcArenaDpsIndex(translatedUnit: "arena1" | "arena2" | "arena3") {
  if (arenaUnitIsHealer(translatedUnit)) {
    return null;
  } else {
    if (translatedUnit === "arena1") {
      return 1;
    } else if (translatedUnit === "arena2") {
      if (arenaUnitIsHealer("arena1")) {
        return 1;
      } else {
        return 2;
      }
    } else if (translatedUnit === "arena3") {
      if (arenaUnitIsHealer("arena1") || arenaUnitIsHealer("arena2")) {
        return 2;
      } else {
        return null; // Triple DPS, not supported
      }
    } else {
      return checkAllCasesHandled(translatedUnit);
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
  return false;
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
        processNewHelpfulAura(sources.player.class.get(), unitSource, aura);
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
  unitSource: sources[keyof sources],
  aura: AuraData
) {
  const hotIndex = getBuffIndex(
    { name: playerClass },
    aura.sourceUnit,
    aura.name,
    aura.spellId as spellID
  );
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

function getIndexFromArenaUnit(
  unit: "arena1" | "arena2" | "arena3"
): 1 | 2 | 3 {
  return parseInt(unit.substring(5, 6)) as 1 | 2 | 3;
}
function getArenaSize(): number {
  if (UnitExists("arena3") || UnitExists("party2")) {
    return 3;
  }
  if (UnitExists("arena2") || UnitExists("party1")) {
    return 2;
  }
  return 0;
}

function arenaUnitIsHealer(unit: "arena1" | "arena2" | "arena3"): boolean {
  const exists = UnitExists(unit);
  if (!exists) {
    return false;
  }
  const specId = GetArenaOpponentSpec(getIndexFromArenaUnit(unit))!;
  const [_a, _b, _c, _d, role] = GetSpecializationInfoForSpecID(specId);
  if (role === "HEALER") {
    return true;
  }
  return false;
}
