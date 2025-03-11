/** @noSelfInFile */

const defensiveCdsWeTrack = [
  "Barkskin",
  "Ironbark",
  "Obsidian Scales",
  "Renewing Blaze",
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

export const ignoredDebuffs = [
  "Temporal Displacement",
  "Shadow Embrace",
  "Earthbind",
];

export const dangerousDebuffs = [
  "Feral Frenzy",
  "Final Reckoning",
  "Vendetta",
  "Deathmark",
  "Summon Demonic Tyrant",
  "Unstable Affliction",
  "Frost Bomb",
  "Wailing Arrow",
  "Thunderous Roar",
];

const offensiveCdsWeTrack = [
  "Avatar",
  "Bladestorm",
  "Recklessness",

  "Metamorphosis",

  "Pillar of Frost",
  "Unholy Frenzy",

  "Berserk",
  "Celestial Alignment",

  "Bloodlust",

  "Trueshot Aura",
  // "Bestial Wrath",

  "Combustion",
  "Icy Veins",
  "Arcane Power",

  "Serenity",

  "Avenging Wrath",

  "Power Infusion",
  "Voidform",

  "Shadow Dance",
  "Adrenaline Rush",

  "Dark Soul: Instability",
  "Dark Soul: Misery",
].map((s) => s.toLowerCase());

export const stunsWeTracks = [
  // DK
  "Asphyxiate",

  // DH
  "Chaos Nova",

  // Druid
  "Bash",
  "Maim",

  // Evoker
  "Deep Breath",

  // Hunter
  "Initimidation",

  // Mage

  // Monk
  "Leg Sweep",

  // Paladin
  "Hammer of Justice",

  // Priest
  "Psychic Horror",

  // Rogue
  "Cheap Shot",
  "Kidney Shot",

  // Shaman
  "Capacitor Totem",
  "Lightning Lasso",

  // Warlock
  "Axe Toss",

  // Warrior
  "Storm Bolt",
];

export const ccsWeTrack = [
  // DK
  "Strangulate",

  // DH
  "Imprison",

  // Druid
  "Entangling Roots",
  "Cyclone",
  "Incapacitating Roar",
  "Mass Entanglement",

  // Evoker
  "Sleep Walk",
  "Landslide",

  // Hunter
  "Freezing Trap",
  "Entrapment",
  "Diamond Ice",
  "Silencing Shot",

  // Mage
  "Polymorph",
  "Frost Nova",
  "Dragon's Breath",
  "Ice Nova",
  "Freeze",

  // Monk
  "Paralysis",
  "Song of Chi-Ji",

  // Paladin
  "Repentance",
  "Blinding Light",

  // Priest
  "Psychic Scream",
  "Void Tendrils",
  "Silence",

  // Rogue
  "Blind",
  "Sap",
  "Garrote",

  // Shaman
  "Hex",
  "Earthgrab",

  // Warlock
  "Fear",
  "Death Coil",
  "Howl of Terror",
  "Shadowfury",

  // Warrior
  "Intimidating Shout",
];

export const hotIndexes = [
  0 as const,
  1 as const,
  2 as const,
  3 as const,
  4 as const,
  5 as const,
  6 as const,
  7 as const,
];

export type hotIndex = (typeof hotIndexes)[number];
export type hotName = `hot${hotIndex}`;

export function hotIndexToHotName(i: hotIndex): hotName {
  return ("hot" + i.toString()) as hotName;
}

export function getBuffIndex(
  playerClass: { name: className },
  source: string | null | undefined,
  name: string,
  spellId: spellID
): null | "defcd" | "externaldefbuff" | "offcd" | hotIndex {
  // Layout =
  // 4 5 6 7
  // 0 1 2 3
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
      if (name === "Rejuvenation (Germination)") {
        return 5;
      }
      if (name === "Symbiotic Blooms") {
        return 6;
      }
      if (name === "Wild Growth") {
        return 7;
      }
    }
    if (playerClass.name === "EVOKER") {
      if (name === "Time Dilation") {
        return "externaldefbuff";
      }
      if (name === "Echo") {
        return 0;
      }
      if (spellId === 366155) {
        return 1; // Reversion
      }
      if (spellId === 355941) {
        return 2; // Dream Breath
      }
      if (name === "Lifebind") {
        return 3;
      }
      if (spellId === 367364) {
        return 5; // Echo Reversion
      }
      if (spellId === 376788) {
        return 6; // Echo Dream Breath
      }
      if (name === "Spiritbloom") {
        return 7;
      }
    }
    if (playerClass.name === "MONK") {
      if (name === "Life Cocoon") {
        return "externaldefbuff";
      }
      if (name === "Renewing Mist") {
        return 0;
      }
      if (name === "Enveloping Mist") {
        return 1;
      }
      if (name === "Soothing Mist") {
        return 2;
      }
      if (name === "Sphere of Hope") {
        return 3;
      }
      if (name === "Life Cocoon") {
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
    if (playerClass.name === "PALADIN") {
      if (
        name === "Blessing of Protection" ||
        name === "Blessing of Sacrifice"
      ) {
        return "externaldefbuff";
      }
      if (name === "Beacon of Light" || name === "Beacon of Faith") {
        return 0;
      }
      if (name === "Holy Bulwark") {
        return 1;
      }
      if (name === "Sacred Weapon") {
        return 2;
      }
      if (name === "Blessing of Protection") {
        return 3;
      }
      if (name === "Blessing of Freedom") {
        return 4;
      }
    }
    if (playerClass.name === "PRIEST") {
      if (name === "Pain Suppression") {
        return "externaldefbuff";
      }
      if (name === "Power Word: Shield") {
        return 0;
      }
      if (name === "Atonement") {
        return 1;
      }
      if (name === "Renew") {
        return 2;
      }
      if (name === "Prayer of Mending") {
        return 3;
      }
    }
  }
  if (defensiveCdsWeTrack.includes(name.toLowerCase())) {
    return "defcd";
  }
  if (offensiveCdsWeTrack.includes(name.toLowerCase())) {
    return "offcd";
  }
  return null;
}
