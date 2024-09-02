import { dangerousDebuffs } from "./auras";

export function sortDots(a: AuraData, b: AuraData): -1 | 1 {
  const prioA = dangerousDebuffs.includes(a.name) ? 99999999 : a.spellId;
  const prioB = dangerousDebuffs.includes(b.name) ? 99999999 : b.spellId;

  return prioA > prioB ? 1 : -1;
}
