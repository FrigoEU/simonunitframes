import { context } from "./context";
import { drawHot } from "./draw";
import { allPlayerPartyAndRaidUnits } from "./unit";
import { isNil } from "./utils";

export function updateFriendlyAuras(
  context: context,
  target: "all" | UnitIdPlayer | UnitIdParty | UnitIdRaidPlayer,
  range: "all" | UnitAuraUpdateInfo,
) {
  const units = target === "all" ? allPlayerPartyAndRaidUnits : [target];
  for (let unit of units) {
    const uf = context.unitFrames[unit];
    if (!uf) {
      continue;
    }
    if (range === "all") {
      uf.defensiveCooldownAuraFrame.Hide();
      uf.externalDefensiveBuffAuraFrame.Hide();
      uf.hotAuraFrames.forEach((f) => f.Hide());
      AuraUtil.ForEachAura(
        unit,
        "HELPFUL",
        function handleAura(
          name,
          icon,
          stacks,
          dispelType,
          fulldur,
          exp,
          source,
          _st,
          spellId,
        ) {
          const hotIndex = getBuffIndex(
            context.playerClass,
            source,
            name,
            spellId,
          );
          if (!isNil(hotIndex)) {
            drawHot(uf, hotIndex, icon, stacks, spellId, fulldur, exp);
          }
        },
      );
    } else {
      todo();
    }
  }
}

const defensiveCdsWeTrack = [
  "Barkskin",
  "Survival Instincts",
  "Die By The Sword",
  "Divine Shield",
  "Shield of Vengeance",
  "Blessing of Protection",
  "Blessing of Sacrifice",
  "Icebound Fortitude",
  "Pain Suppression",
  "Astral Shift",
  "Evasion",
  "Cloak Of Shadows",
  "Ice Block",
  "Alter Time",
  "Blur",
  "Darkness",
  "Aspect of the Turtle",
  "Anti-magic Zone",
  "Fortifying brew",
  "Dampen Harm",
  "Diffuse Magic",
  "Unending Resolve",
].map((s) => s.toLowerCase());

function getBuffIndex(
  playerClass: { name: className; classId: number },
  source: string,
  name: string,
  spellId: spellID,
): null | "defcd" | "externaldefbuff" | 0 | 1 | 2 | 3 | 4 {
  if (source === "player") {
    if (playerClass.name === "DRUID") {
      if (name === "Ironbark") {
        return "externaldefbuff";
      }
      if (name === "Lifebloom") {
        return 0;
      }
      if (name === "Rejuvenation") {
        return 1;
      }
      if (name === "Regrowth") {
        return 2;
      }
      if (name === "Cenarion Ward") {
        return 3;
      }
      if (name === "Wild Growth") {
        return 4;
      }
    }
    if (playerClass.name === "SHAMAN") {
      if (name === "Earthen Wall Totem") {
        return "externaldefbuff";
      }
      if (name === "Earth Shield") {
        return 0;
      }
      if (name === "Riptide") {
        return 1;
      }
    }
  }
  if (defensiveCdsWeTrack.includes(name.toLowerCase())) {
    return "defcd";
  }
  return null;
}
