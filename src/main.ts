/** @noSelfInFile */

import { getBuffIndex, offensiveSpellsWeTrack } from "./auras";
import { makeConfig } from "./config";
import { playerCanDispelFromParty } from "./dispellable";
import { drawArenaTargetFrames } from "./draw/arenatargets";
import { drawFriendlyCooldownSection } from "./draw/cooldowns";
import { drawDotFrames } from "./draw/dots";
import { drawHealthbarFrames } from "./draw/healthbar";
import { drawHighlightFrames } from "./draw/highlight";
import { drawHotFrames, hotIndexToHotName } from "./draw/hots";
import { setPosition } from "./draw/position";
import { makeSources, Source, sources } from "./sources";
import {
  allSupportedTranslatedUnits,
  allSupportedUnits,
  supportedUnit,
  unitIsArena,
  unitIsParty,
  unitIsPlayer,
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
  "UNIT_TARGET" as const,

  "UNIT_SPELLCAST_SUCCEEDED" as const,

  "ARENA_OPPONENT_UPDATE" as const,
  "ARENA_PREP_OPPONENT_SPECIALIZATIONS" as const,

  // "UNIT_HEAL_PREDICTION" as const
  // "UNIT_PORTRAIT_UPDATE" as const,
];

start();

function start() {
  // Making all sources immediately
  const sources = makeSources();
  const config = makeConfig();

  // Drawing ALL frames immediately
  const friendlyFramesParent = CreateFrame(
    "Frame",
    "GladiusExPartyFrame",
    UIParent,
  );
  const arenaFramesParent = CreateFrame(
    "Frame",
    "GladiusExArenaFrame",
    UIParent,
  );

  const nameP_ = "SimonUnitFrames";
  for (let unit of allSupportedTranslatedUnits) {
    const nameP = nameP_ + unit;
    const parent = unitIsArena(unit) ? arenaFramesParent : friendlyFramesParent;

    const container = CreateFrame("Frame", nameP, parent, "BackdropTemplate");
    container.SetSize(config.unitFrame_fullWidth, config.unitFrame_fullHeight);
    container.SetClampedToScreen(true); // Frame can't move offscreen
    setPosition(config, parent, container, unit);

    if (unitIsPlayerPartyRaid(unit)) {
      const unitSource = sources[unit];
      drawHealthbarFrames(config, nameP, container, unitSource);
      drawHighlightFrames(config, nameP, container, unitSource, sources.player);
      drawFriendlyCooldownSection(config, nameP, container, unitSource);
      drawHotFrames(config, nameP, container, unitSource);
      drawDotFrames(config, nameP, container, unitSource);
    }
    if (unitIsPlayer(unit) || unitIsParty(unit)) {
      const unitSource = sources[unit];
      drawArenaTargetFrames(config, nameP, container, unitSource, sources);
    }

    if (unitIsArena(unit)) {
      const unitSource = sources[unit];
      drawHealthbarFrames(config, nameP, container, unitSource);
    }
  }

  const eventFrame = CreateFrame("Frame");

  for (let eventName of eventsWeListenTo) {
    eventFrame.RegisterEvent(eventName);
  }
  eventFrame.SetScript("OnEvent", (ev, arg1, arg2, arg3, arg4, arg5) =>
    handleWowEvent(sources, ev, arg1, arg2, arg3, arg4, arg5),
  );
}

// Adding type safety to events
// plus dispatching the correct functions for each wow event
function handleWowEvent(
  this: void,
  sources: sources,
  eventName: (typeof eventsWeListenTo)[number],
  arg1: any,
  arg2: any,
  _arg3: any,
  _arg4: any,
  arg5: any,
) {
  switch (eventName) {
    case "PLAYER_ENTERING_WORLD": {
      print("hello, world");
      const playerRaidIndex = UnitInRaid("player");
      sources.playerGroupIndexZeroBased.set(
        isNil(playerRaidIndex) ? 0 : Math.floor(playerRaidIndex / 5),
      );
      updateInfo(sources, "all", "all");
      return;
    }
    case "GROUP_ROSTER_UPDATE": {
      const playerRaidIndex = UnitInRaid("player");
      sources.playerGroupIndexZeroBased.set(
        isNil(playerRaidIndex) ? 0 : Math.floor(playerRaidIndex / 5),
      );
      updateInfo(sources, "all", "all");
      return;
    }
    case "ARENA_OPPONENT_UPDATE":
    case "ARENA_PREP_OPPONENT_SPECIALIZATIONS": {
      updateInfo(sources, "arena1", "all");
      updateInfo(sources, "arena2", "all");
      updateInfo(sources, "arena3", "all");
      return;
    }
    case "PLAYER_REGEN_ENABLED": {
      updateInfo(sources, "all", "all");
      return;
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
    case "UNIT_SPELLCAST_SUCCEEDED": {
      const unitId = arg1 as UnitId;
      const spellName = arg2 as string;
      const spellId = arg5 as spellID;

      return updateInfo(sources, unitId, {
        tag: "spellcast",
        spellName: spellName,
        spellId,
      });
    }
    default: {
      return checkAllCasesHandled(eventName);
    }
  }
}

const allFrameparts = [
  { tag: "health" } as const,
  { tag: "maxhealth" } as const,
  { tag: "power" } as const,
  { tag: "absorb" } as const,
  { tag: "character" } as const,
  { tag: "target" } as const,
  { tag: "focus" } as const,
  {
    tag: "spellcast",
    spellName: "" as string,
    spellId: -1 as spellID,
  } as const,
  { tag: "aura", auraUpdateInfo: null as null | UnitAuraUpdateInfo } as const,
];
type framepart = (typeof allFrameparts)[number];

function updateInfo(
  sources: sources,
  target: "all" | UnitId,
  part_in: "all" | framepart,
) {
  const units =
    target === "all"
      ? allSupportedUnits
      : [allSupportedUnits.find((u) => u === target) ?? null].filter(
          (u) => !isNil(u),
        );

  const infos = part_in === "all" ? allFrameparts : [part_in];

  for (let unit of units) {
    // Translating raid units
    //
    // Trickiest part of the whole app
    // Translating real raidunit names to "our" raid unit names because I want to always show the party and then max 1 more raid party
    const targetForSource = translateUnit(sources, unit);
    if (targetForSource === null) {
      continue;
    }
    const unitSource = sources[targetForSource];
    if (!UnitExists(unit)) {
      unitSource.exists.set(false);
    } else {
      unitSource.exists.set(true);
    }

    for (let info of infos) {
      if (info.tag === "health") {
        unitSource.health.current.set(UnitHealth(unit));
      } else if (info.tag === "maxhealth") {
        unitSource.health.max.set(UnitHealthMax(unit));
      } else if (info.tag === "character") {
        const cl = UnitClass(unit)[1];
        unitSource.class.set(cl as className);
        unitSource.guid.set(UnitGUID(unit) || "");
      } else if (info.tag === "power" || info.tag === "absorb") {
        // TODO!
      } else if (info.tag === "target") {
        if ("target" in unitSource) {
          unitSource.target.set(UnitGUID(unit + "target") || null);
        }
      } else if (info.tag === "focus") {
        if (unit === "player") {
          sources.player.focus.set(UnitGUID("focus") || null);
        }
      } else if (info.tag === "spellcast") {
        if ("offensiveCooldownActive" in unitSource) {
          if (offensiveSpellsWeTrack.includes(info.spellName)) {
            const spellInfo = GetSpellInfo(info.spellName);
            if (spellInfo) {
              // Testing
              unitSource.offensiveCooldownActive.set({
                name: info.spellName,
                icon: spellInfo[2] as unknown as number,
                duration: 6,
                expirationTime: 6,
                applications: 0,
                auraInstanceID: -1,
              } as AuraData);
            }
          }
        }
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
            unitSource.hot0.set(null);
            unitSource.hot1.set(null);
            unitSource.hot2.set(null);
            unitSource.hot3.set(null);
            unitSource.hot4.set(null);
            unitSource.hot5.set(null);
            unitSource.hot6.set(null);
          }

          AuraUtil.ForEachAura(
            unit,
            "HELPFUL",
            (aura) =>
              handleNewHelpfulAura(
                sources.player.class.get(),
                unitSource,
                aura,
              ),
            true,
          );

          if ("dots" in unitSource) {
            const newDots = [] as AuraData[];
            AuraUtil.ForEachAura(
              unit,
              "HARMFUL",
              function handleNewHarmfulAura(aura: AuraData) {
                if (
                  aura.dispelName !== null &&
                  (aura.dispelName === "Curse" ||
                    aura.dispelName === "Magic" ||
                    aura.dispelName === "Disease" ||
                    aura.dispelName === "Poison") &&
                  playerCanDispelFromParty(aura.dispelName)
                ) {
                  newDots.push(aura);
                }
              },
              true,
            );
            newDots.sort((a, b) => (a.spellId > b.spellId ? -1 : 1));
            unitSource.dots.set(newDots);
          }
        } else {
          const auraUpdateInfo = info.auraUpdateInfo;
          if (!isNil(auraUpdateInfo.updatedAuraInstanceIDs)) {
            for (let auraInstanceID of auraUpdateInfo.updatedAuraInstanceIDs) {
              updateAuraIf(
                unit,
                auraInstanceID,
                unitSource.defensiveCooldownActive,
              );

              if ("externalDefFromPlayerActive" in unitSource) {
                updateAuraIf(
                  unit,
                  auraInstanceID,
                  unitSource.externalDefFromPlayerActive,
                );
              }
              if ("offensiveCooldownActive" in unitSource) {
                updateAuraIf(
                  unit,
                  auraInstanceID,
                  unitSource.offensiveCooldownActive,
                );
              }
              if ("hot0" in unitSource) {
                updateAuraIf(unit, auraInstanceID, unitSource.hot0);
                updateAuraIf(unit, auraInstanceID, unitSource.hot1);
                updateAuraIf(unit, auraInstanceID, unitSource.hot2);
                updateAuraIf(unit, auraInstanceID, unitSource.hot3);
                updateAuraIf(unit, auraInstanceID, unitSource.hot4);
                updateAuraIf(unit, auraInstanceID, unitSource.hot5);
                updateAuraIf(unit, auraInstanceID, unitSource.hot6);
              }
              if ("dots" in unitSource) {
                const curr = unitSource.dots.get();
                const found = curr.find(
                  (old) => old.auraInstanceID !== auraInstanceID,
                );
                if (found) {
                  const newaura = C_UnitAuras.GetAuraDataByAuraInstanceID(
                    unit,
                    auraInstanceID,
                  );
                  if (newaura) {
                    const afterFilter = curr.filter(
                      (old) => old.auraInstanceID !== auraInstanceID,
                    );
                    afterFilter.push(newaura);
                    afterFilter.sort((a, b) =>
                      a.spellId > b.spellId ? -1 : 1,
                    );
                    unitSource.dots.set(afterFilter);
                  }
                }
              }
            }
          }
          if (!isNil(auraUpdateInfo.removedAuraInstanceIDs)) {
            for (let auraInstanceID of auraUpdateInfo.removedAuraInstanceIDs) {
              clearAuraIf(auraInstanceID, unitSource.defensiveCooldownActive);

              if ("externalDefFromPlayerActive" in unitSource) {
                clearAuraIf(
                  auraInstanceID,
                  unitSource.externalDefFromPlayerActive,
                );
              }
              if ("offensiveCooldownActive" in unitSource) {
                clearAuraIf(auraInstanceID, unitSource.offensiveCooldownActive);
              }
              if ("hot0" in unitSource) {
                clearAuraIf(auraInstanceID, unitSource.hot0);
                clearAuraIf(auraInstanceID, unitSource.hot1);
                clearAuraIf(auraInstanceID, unitSource.hot2);
                clearAuraIf(auraInstanceID, unitSource.hot3);
                clearAuraIf(auraInstanceID, unitSource.hot4);
                clearAuraIf(auraInstanceID, unitSource.hot5);
                clearAuraIf(auraInstanceID, unitSource.hot6);
              }
              if ("dots" in unitSource) {
                const curr = unitSource.dots.get();
                const afterFilter = curr.filter(
                  (old) => old.auraInstanceID !== auraInstanceID,
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
                handleNewHelpfulAura(
                  sources.player.class.get(),
                  unitSource,
                  aura,
                );
              }
              if (
                "dots" in unitSource &&
                aura.isHarmful &&
                !isNil(aura.dispelName) &&
                (aura.dispelName === "Curse" ||
                  aura.dispelName === "Magic" ||
                  aura.dispelName === "Disease" ||
                  aura.dispelName === "Poison") &&
                playerCanDispelFromParty(aura.dispelName)
              ) {
                const curr = unitSource.dots.get();
                curr.push(aura);
                curr.sort((a, b) => (a.spellId > b.spellId ? -1 : 1));
                unitSource.dots.set(curr);
              }
            }
          }
        }
      } else {
        checkAllCasesHandled(info);
      }
    }
  }
}

function translateUnit(
  sources: sources,
  target_: "all" | UnitId,
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
    } else {
      return null;
    }
  }
  return null;
}

function handleNewHelpfulAura(
  playerClass: className,
  unitSource: sources[keyof sources],
  aura: AuraData,
) {
  const hotIndex = getBuffIndex(
    { name: playerClass },
    aura.sourceUnit,
    aura.name,
    aura.spellId as spellID,
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

function clearAuraIf(
  auraInstanceID: number | undefined,
  s: Source<AuraData | null>,
) {
  const curr = s.get();
  if (curr && curr.auraInstanceID === auraInstanceID) {
    s.set(null);
  }
}
function updateAuraIf(
  unit: UnitId,
  auraInstanceID: number,
  s: Source<AuraData | null>,
) {
  const curr = s.get();
  if (curr && curr.auraInstanceID === auraInstanceID) {
    const newaura = C_UnitAuras.GetAuraDataByAuraInstanceID(
      unit,
      auraInstanceID,
    );
    if (newaura) {
      s.set(newaura);
    }
  }
}
