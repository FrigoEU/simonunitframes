/** @noSelfInFile */

// https://github.com/jordonwow/bigdebuffs/blob/master/BigDebuffs.lua#L206

import { isNil } from "./utils";

export function playerCanDispelFromParty(
  dispelType: "Curse" | "Magic" | "Poison" | "Disease",
): boolean {
  const specIndex = GetSpecialization() || (1 as specIndex);
  const spec = GetSpecializationInfo(specIndex);
  if (!isNil(spec)) {
    const specDispels = specCanDispel[spec[0]];
    if (specDispels && specDispels[dispelType] === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const specCanDispel: {
  [specId: specializationId]: {
    Magic?: boolean;
    Curse?: boolean | (() => boolean);
    Poison?: boolean | (() => boolean);
    Disease?: boolean | (() => boolean);
  };
} = {
  [62 as specializationId]: {
    // Arcane Mage
    Curse: true,
  },
  [63 as specializationId]: {
    // Fire Mage
    Curse: true,
  },
  [64 as specializationId]: {
    // Frost Mage
    Curse: true,
  },
  [65 as specializationId]: {
    // Holy Paladin
    Magic: true,
    Poison: true,
    Disease: true,
  },
  [66 as specializationId]: {
    // Protection Paladin
    Poison: true,
    Disease: true,
  },
  [70 as specializationId]: {
    // Retribution Paladin
    Poison: true,
    Disease: true,
  },
  [102 as specializationId]: {
    // Balance Druid
    Curse: true,
    Poison: true,
  },
  [103 as specializationId]: {
    // Feral Druid
    Curse: true,
    Poison: true,
  },
  [104 as specializationId]: {
    // Guardian Druid
    Curse: true,
    Poison: true,
  },
  [105 as specializationId]: {
    // Restoration Druid
    // TODO Check GladiusEx fork for talent detection!
    Magic: true,
    Curse: true,
    Poison: true,
  },
  [256 as specializationId]: {
    // Discipline Priest
    Magic: true,
    Disease: true,
  },
  [257 as specializationId]: {
    // Holy Priest
    Magic: true,
    Disease: true,
  },
  [258 as specializationId]: {
    // Shadow Priest
    Magic: true,
    Disease: true,
  },
  [262 as specializationId]: {
    // Elemental Shaman
    Curse: true,
  },
  [263 as specializationId]: {
    // Enhancement Shaman
    Curse: true,
  },
  [264 as specializationId]: {
    // Restoration Shaman
    Magic: true,
    Curse: true,
  },
  [268 as specializationId]: {
    // Brewmaster Monk
    Poison: true,
    Disease: true,
  },
  [269 as specializationId]: {
    // Windwalker Monk
    Poison: true,
    Disease: true,
  },
  [270 as specializationId]: {
    // Mistweaver Monk
    Magic: true,
    Poison: true,
    Disease: true,
  },
  [1467 as specializationId]: {
    // Devastation Evoker
    Poison: true,
    Disease: () => IsUsableSpell(GetSpellInfo(374251 as spellID)[0])[0],
    Curse: () => IsUsableSpell(GetSpellInfo(374251 as spellID)[0])[0],
  },
  [1468 as specializationId]: {
    // Preservation Evoker
    Magic: true,
    Poison: true,
    Disease: () => IsUsableSpell(GetSpellInfo(374251 as spellID)[0])[0],
    Curse: () => IsUsableSpell(GetSpellInfo(374251 as spellID)[0])[0],
  },
  [1473 as specializationId]: {
    // Augmentation Evoker
    Poison: true,
    Disease: () => IsUsableSpell(GetSpellInfo(374251 as spellID)[0])[0],
    Curse: () => IsUsableSpell(GetSpellInfo(374251 as spellID)[0])[0],
  },
  [577 as specializationId]: {
    // DH?
    Magic: false,
    // Magic: () => GetSpellInfo(205604 as spellID)[0],
  },
  [581 as specializationId]: {
    // DH?
    Magic: false,
    // Magic: () => GetSpellInfo(205604 as spellID)[0],
  },
};
