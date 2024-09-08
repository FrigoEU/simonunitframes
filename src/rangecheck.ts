import { sources } from "./sources";
import {
  allSupportedUnits,
  translateUnit,
  unitIsPlayerPartyRaid,
} from "./unit";

export function startCheckingRange(sources: sources) {
  C_Timer.NewTicker(2, () => {
    for (let unit of allSupportedUnits) {
      const translatedUnit = translateUnit(sources, unit);
      if (
        UnitIsVisible(unit) &&
        translatedUnit &&
        unitIsPlayerPartyRaid(translatedUnit)
      ) {
        const unitSource = sources[translatedUnit];
        if (unitSource.exists.get() === true) {
          const playerClass = sources.player.class.get();
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
                  : "Heal"; // TODO?
          unitSource.isInRange.set(
            C_Spell.IsSpellInRange(spell, unit) || false
          );
        }
      }
    }
  });
}
