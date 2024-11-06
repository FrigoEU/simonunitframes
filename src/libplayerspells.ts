import { isNil } from "./utils";

type libPlayerSpellsFlag = number & { readonly __tag: "libPlayerSpellsFlag" };
type libPlayerSpellsFlags = number & { readonly __tag: "libPlayerSpellsFlags" };

const libPlayerSpells = LibStub("LibPlayerSpells-1.0") as {
  GetSpellInfo: (s: spellID) => LuaMultiReturn<
    [
      libPlayerSpellsFlags, // flags
      number, // providers
      number | number[], // modifiedSpells
    ]
  >;
  constants: {
    AURA: libPlayerSpellsFlag;
    CROWD_CTRL: libPlayerSpellsFlag;
    DISORIENT: libPlayerSpellsFlag;
    INCAPACITATE: libPlayerSpellsFlag;
    ROOT: libPlayerSpellsFlag;
    STUN: libPlayerSpellsFlag;
    TAUNT: libPlayerSpellsFlag;
  };
};

export function getCcFlags(spellId: spellID): null | libPlayerSpellsFlags {
  const [flags] = libPlayerSpells.GetSpellInfo(spellId);
  if (!isNil(flags)) {
    return flags;
  } else {
    return null;
  }
}

export function isCc(spellId: spellID): boolean {
  const [flags] = libPlayerSpells.GetSpellInfo(spellId);
  if (!isNil(flags)) {
    return bit.band(flags, libPlayerSpells.constants.CROWD_CTRL) !== 0;
  } else {
    return false;
  }
}

export function isCc_(flags: libPlayerSpellsFlags | null): boolean {
  if (!isNil(flags)) {
    return bit.band(flags, libPlayerSpells.constants.CROWD_CTRL) !== 0;
  } else {
    return false;
  }
}

export function isStun(spellId: spellID): boolean {
  const [flags] = libPlayerSpells.GetSpellInfo(spellId);
  if (!isNil(flags)) {
    return bit.band(flags, libPlayerSpells.constants.STUN) !== 0;
  } else {
    return false;
  }
}

export function isStun_(flags: libPlayerSpellsFlags | null): boolean {
  if (!isNil(flags)) {
    return bit.band(flags, libPlayerSpells.constants.STUN) !== 0;
  } else {
    return false;
  }
}
