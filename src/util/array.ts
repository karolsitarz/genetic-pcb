export type Pair<T> = [T, T];

export const compareTuples = <T>(a: Pair<T>, b: Pair<T>): boolean => a[0] === b[0] && a[1] === b[1];

export const times = <T>(n: number, fun: (index: number) => T) =>
  [...new Array(n)].map((_, i) => fun(i));

export const last = <T>(list: T[]) => list[list.length - 1];
