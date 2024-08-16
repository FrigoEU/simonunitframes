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

export const dangerousDebuffs = [
  "Feral Frenzy",
  "Final Reckoning",
  "Vendetta",
  "Deathmark",
  "Summon Demonic Tyrant",
  "Unstable Affliction",
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

  "Ascendance",
  "Bloodlust",

  "Trueshot Aura",
  "Bestial Wrath",

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

export function getBuffIndex(
  playerClass: { name: className },
  source: string | null | undefined,
  name: string,
  spellId: spellID,
): null | "defcd" | "externaldefbuff" | "offcd" | 0 | 1 | 2 | 3 | 4 | 5 | 6 {
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
    if (playerClass.name === "EVOKER") {
      if (name === "Time Dilation") {
        return "externaldefbuff";
      }
      if (spellId === 366155) {
        return 0; // Reversion
      }
      if (spellId === 367364) {
        return 1; // Echo Reversion
      }
      if (spellId === 355941) {
        return 2; // Dream Breath
      }
      if (spellId === 376788) {
        return 3; // Echo Dream Breath
      }
      if (name === "Spiritbloom") {
        return 4;
      }
      if (name === "Echo") {
        return 5;
      }
      if (name === "Lifebind") {
        return 6;
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
  if (offensiveCdsWeTrack.includes(name.toLowerCase())) {
    return "offcd";
  }
  return null;
}
