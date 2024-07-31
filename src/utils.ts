export function isNil<T>(t: T | null | undefined): t is null | undefined {
  return t === null || t === undefined;
}

export function checkAllCasesHandled(a: never): never {
  throw new Error(`Can't be here: ${JSON.stringify(a)}`);
}
