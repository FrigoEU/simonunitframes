import { sources } from "./sources";
import {
  allSupportedUnits,
  translateUnit,
  unitIsArena,
  unitIsPlayerPartyRaid,
} from "./unit";

export function startCheckingRange(sources: sources) {
  C_Timer.NewTicker(0.2, () => {
    const playerClass = sources.player.class.get();
    for (let unit of allSupportedUnits) {
      const translatedUnit = translateUnit(sources, unit);
      if (
        UnitIsVisible(unit) &&
        translatedUnit &&
        unitIsArena(translatedUnit) &&
        playerClass === "DRUID"
      ) {
        const unitSource = sources[translatedUnit];
        unitSource.isInRangeOfCyclone.set(
          C_Spell.IsSpellInRange("Cyclone", unit) || false
        );
      }
      if (
        UnitIsVisible(unit) &&
        translatedUnit &&
        unitIsPlayerPartyRaid(translatedUnit)
      ) {
        const unitSource = sources[translatedUnit];
        if (unitSource.exists.get() === true) {
          const isFriendly = unitIsPlayerPartyRaid(translatedUnit);
          const spell =
            playerClass === "DRUID"
              ? isFriendly
                ? "Rejuvenation"
                : "Wrath"
              : playerClass === "EVOKER"
                ? isFriendly
                  ? "Reversion"
                  : "Disintegrate"
                : playerClass === "SHAMAN"
                  ? isFriendly
                    ? "Riptide"
                    : "Flame Shock"
                  : playerClass === "PRIEST"
                    ? isFriendly
                      ? "Renew"
                      : "Mind Blast"
                    : "Heal"; // TODO?
          unitSource.isInRange.set(
            C_Spell.IsSpellInRange(spell, unit) || false
          );
        }
      }
    }
  });
}
