/** @noSelfInFile */

export function isNil<T>(t: T | null | undefined): t is null | undefined {
  return t === null || t === undefined;
}

export function checkAllCasesHandled(a: never, extrainfo?: string): never {
  error( `Can't be here ${extrainfo || ""}: ${a}`);
}
