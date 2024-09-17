import { dangerousDebuffs } from "./auras";
import { isNil } from "./utils";

export function sortDots(a: AuraData, b: AuraData): -1 | 1 {
  if (isNil(a)) {
    return -1;
  }
  if (isNil(b)) {
    return 1;
  }
  const prioA = dangerousDebuffs.includes(a.name) ? 9999999 : a.spellId;
  const prioB = dangerousDebuffs.includes(b.name) ? 9999999 : b.spellId;

  return prioA > prioB ? -1 : 1;
}
