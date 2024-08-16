export {};

declare global {
  type spellName = string;
  type spellRank = string;
  type iconFilePath = string & { readonly __tag: "iconFilePath" };
  type backgroundTextureName = string & {
    readonly __tag: "backgroundTextureName";
  };
  type castTime = number;
  type minSpellRange = number;
  type maxSpellRange = number;
  type spellID = number & { readonly __tag: "spellID" };
  type specIndex = number & { readonly __tag: "specIndex" };
  type specializationId = number & { readonly __tag: "specializationId" };
  type specName = string;
  type role = "DAMAGER" | "TANK" | "HEALER";
  type UnitIdArena = "arena1" | "arena2" | "arena3";
  type className =
    | "WARRIOR"
    | "DEATHKNIGHT"
    | "PALADIN"
    | "MONK"
    | "PRIEST"
    | "SHAMAN"
    | "DRUID"
    | "ROGUE"
    | "MAGE"
    | "WARLOCK"
    | "HUNTER"
    | "DEMONHUNTER"
    | "EVOKER";

  type UnitIdRaidPlayer =
    | "raid1"
    | "raid2"
    | "raid3"
    | "raid4"
    | "raid5"
    | "raid6"
    | "raid7"
    | "raid8"
    | "raid9"
    | "raid10"
    | "raid11"
    | "raid12"
    | "raid13"
    | "raid14"
    | "raid15"
    | "raid16"
    | "raid17"
    | "raid18"
    | "raid19"
    | "raid20"
    | "raid21"
    | "raid22"
    | "raid23"
    | "raid24"
    | "raid25"
    | "raid26"
    | "raid27"
    | "raid28"
    | "raid29"
    | "raid30"
    | "raid31"
    | "raid32"
    | "raid33"
    | "raid34"
    | "raid35"
    | "raid36"
    | "raid37"
    | "raid38"
    | "raid39"
    | "raid40";
  type UnitIdRaidPlayerPet =
    | "raidpet1"
    | "raidpet2"
    | "raidpet3"
    | "raidpet4"
    | "raidpet5"
    | "raidpet6"
    | "raidpet7"
    | "raidpet8"
    | "raidpet9"
    | "raidpet10"
    | "raidpet11"
    | "raidpet12"
    | "raidpet13"
    | "raidpet14"
    | "raidpet15"
    | "raidpet16"
    | "raidpet17"
    | "raidpet18"
    | "raidpet19"
    | "raidpet20"
    | "raidpet21"
    | "raidpet22"
    | "raidpet23"
    | "raidpet24"
    | "raidpet25"
    | "raidpet26"
    | "raidpet27"
    | "raidpet28"
    | "raidpet29"
    | "raidpet30"
    | "raidpet31"
    | "raidpet32"
    | "raidpet33"
    | "raidpet34"
    | "raidpet35"
    | "raidpet36"
    | "raidpet37"
    | "raidpet38"
    | "raidpet39"
    | "raidpet40";
  type UnitIdParty = "party1" | "party2" | "party3" | "party4";
  type UnitIdPartyPet = "partypet1" | "partypet2" | "partypet3" | "partypet4";
  type UnitIdPlayer = "player";
  type UnitIdOther =
    | "pet"
    | "focus"
    | "mouseover"
    | "vehicle"
    | "target"
    | "none"
    | "npc"
    | "targettarget";
  type UnitId =
    | UnitIdPlayer
    | UnitIdParty
    | UnitIdArena
    | UnitIdRaidPlayer
    | UnitIdRaidPlayerPet
    | UnitIdPartyPet
    | UnitIdOther;
  type dispelType = "Magic" | "Curse" | "Poison" | "Disease";

  type auraFullDuration = number;
  type auraExpirationTime = number; // get remaining duration: expirationtime - GetTime(),

  const UIParent: SimpleFrame;

  function CreateFrame(
    this: void,
    frameType: string,
    name?: string,
    parent?: SimpleFrame,
    template?: string,
    id?: number,
  ): SimpleFrame;

  function IsUsableSpell(
    this: void,
    s: spellName | spellID,
  ): LuaMultiReturn<
    [boolean /* player cant use */, boolean /* player has insuff nomana */]
  >;
  function GetSpellInfo(
    this: void,
    s: spellName | spellID,
  ): LuaMultiReturn<
    [
      spellName,
      spellRank,
      iconFilePath /* icon */,
      castTime,
      minSpellRange,
      maxSpellRange,
    ]
  >;
  function GetSpecialization(this: void): null | specIndex;
  type specInfo = LuaMultiReturn<
    [
      specializationId,
      specName,
      string /* description */,
      iconFilePath,
      backgroundTextureName,
      role,
    ]
  >;
  function GetSpecializationInfo(this: void, index: specIndex): null | specInfo;
  function GetArenaOpponentSpec(
    this: void,
    num: 1 | 2 | 3,
  ): null | LuaMultiReturn<[specializationId, number /* gender */]>;
  // 0 if not in party / raid
  function GetNumGroupMembers(this: void): number;
  function UnitBuff(
    this: void,
    unit: UnitId,
    index: number,
  ): null | LuaMultiReturn<
    [
      string /* name */,
      fileID /* icon */,
      number /* stacks */,
      dispelType | null,
      auraFullDuration,
      auraExpirationTime, // remaining duration: expirationtime - GetTime(),
      UnitId, // Source
      boolean, // stealable
      spellID,
      boolean, // canApplyAura,
      boolean, // isBossDebuff
      boolean, // castByPlayer
      boolean, // nameplateShowAll
      number, // timeMod
    ]
  >;

  function CooldownFrame_Set(
    cooldown: CooldownFrame,
    left: number,
    duration: number,
    something: number,
  ): void;

  namespace AuraUtil {
    function ForEachAura(
      unit: UnitId,
      filter: "HELPFUL" | "HARMFUL",
      cb: (this: void, aura: AuraData) => void,
      usePackedAura: true,
    ): void;
  }

  let SLASH_TEST1: string;
  const SlashCmdList: { [key: string]: () => any };
}
