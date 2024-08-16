/** @noSelfInFile */

import { sources } from "./sources";

export function startTest(sources: sources) {
  sources.playerGroupIndexZeroBased.set(1);

  sources.player.health.max.set(1000);
  sources.player.health.current.set(500);
  sources.player.exists.set(true);
  sources.player.focus.set("party1guid");
  sources.player.target.set("arena1guid");
  sources.player.guid.set("playerguid");
  sources.player.class.set("DRUID");

  sources.player.defensiveCooldownActive.set(makeTestAura("Barkskin"));
  sources.player.offensiveCooldownActive.set(makeTestAura("Avatar"));
  sources.player.externalDefFromPlayerActive.set(makeTestAura("Ironbark"));
  sources.player.dots.set([
    makeTestAura("Unstable Affliction"),
    makeTestAura("Shadow Word: Pain"),
    makeTestAura("Shadow Word: Pain"),
    makeTestAura("Shadow Word: Pain"),
    makeTestAura("Shadow Word: Pain"),
    makeTestAura("Shadow Word: Pain"),
  ]);

  sources.player.hot0.set(makeTestAura("Rejuvenation"));
  sources.player.hot1.set(makeTestAura("Rejuvenation"));
  sources.player.hot2.set(makeTestAura("Rejuvenation"));
  sources.player.hot3.set(makeTestAura("Rejuvenation"));
  sources.player.hot4.set(makeTestAura("Rejuvenation"));
  sources.player.hot5.set(makeTestAura("Rejuvenation"));
  sources.player.hot6.set(makeTestAura("Rejuvenation"));

  sources.party1.health.max.set(1000);
  sources.party1.health.current.set(500);
  sources.party1.exists.set(true);
  sources.party1.target.set("arena1guid");
  sources.party1.class.set("MAGE");

  sources.party2.health.max.set(1000);
  sources.party2.health.current.set(500);
  sources.party2.exists.set(true);
  sources.party2.target.set("arena1guid");
  sources.party2.class.set("MONK");

  sources.party3.health.max.set(1000);
  sources.party3.health.current.set(200);
  sources.party3.exists.set(true);
  sources.party3.class.set("DEATHKNIGHT");

  sources.party4.health.max.set(1000);
  sources.party4.health.current.set(500);
  sources.party4.exists.set(true);
  sources.party4.class.set("ROGUE");

  sources.myraid1.health.max.set(1000);
  sources.myraid1.health.current.set(500);
  sources.myraid1.exists.set(true);
  sources.myraid1.class.set("SHAMAN");

  sources.myraid2.health.max.set(1000);
  sources.myraid2.health.current.set(500);
  sources.myraid2.exists.set(true);
  sources.myraid2.class.set("PALADIN");

  sources.myraid3.health.max.set(1000);
  sources.myraid3.health.current.set(500);
  sources.myraid3.exists.set(true);
  sources.myraid3.class.set("EVOKER");

  sources.arena1.exists.set(true);
  sources.arena1.guid.set("arena1guid");
  sources.arena1.class.set("WARRIOR");
  sources.arena1.arenaDpsIndex.set(1);
  sources.arena1.health.max.set(1000);
  sources.arena1.health.current.set(800);
  sources.arena1.target.set("playerguid");
  sources.arena1.offensiveCooldownActive.set(makeTestAura("Avatar"));

  sources.arena2.exists.set(true);
  sources.arena2.class.set("WARLOCK");
  sources.arena2.arenaDpsIndex.set(2);
  sources.arena2.health.max.set(1000);
  sources.arena2.health.current.set(800);
  sources.arena2.target.set("playerguid");

  sources.arena3.exists.set(true);
  sources.arena3.class.set("PRIEST");
  sources.arena3.arenaDpsIndex.set(null);
  sources.arena3.health.max.set(1000);
  sources.arena3.health.current.set(800);
  sources.arena3.target.set(null);
}

export function makeTestAura(
  spell:
    | "Barkskin"
    | "Rejuvenation"
    | "Avatar"
    | "Ironbark"
    | "Unstable Affliction"
    | "Shadow Word: Pain",
): AuraData {
  const spellIds: { [key in typeof spell]: spellID } = {
    Barkskin: 22812 as spellID,
    Rejuvenation: 774 as spellID,
    Avatar: 107574 as spellID,
    Ironbark: 102342 as spellID,
    "Unstable Affliction": 30108 as spellID,
    "Shadow Word: Pain": 589 as spellID,
  };

  const spellId: undefined | spellID = spellIds[spell];
  if (!spellId) {
    throw new Error("Invalid spell");
  }

  const spellInfo = GetSpellInfo(spellId);

  return {
    applications: 1,
    auraInstanceID: 123,
    canApplyAura: false, // N/A
    charges: 0, // N/A
    dispelName: "Magic" as const,
    duration: 10,
    expirationTime: 7,
    icon: spellInfo[2] as any,
    isBossAura: false,
    isFromPlayerOrPlayerPet: false,
    isHarmful: true, // N/A
    isHelpful: true, // N/A
    isNameplateOnly: true, // N/A
    isRaid: true, // N/A
    isStealable: true, // N/A
    maxCharges: 0, // N/A
    name: spell,
    nameplateShowAll: false, // N/A
    nameplateShowPersonal: false, // N/A
    points: [],
    sourceUnit: "player", // N/A
    spellId: spellId,
    timeMod: 0, // N/A
  };
}
