export type Pair<T> = [T, T];

export const compareTuples = <T>(a: Pair<T>, b: Pair<T>): boolean => a[0] === b[0] && a[1] === b[1];

export const repeat = <T>(times: number, fun: (index: number) => T) =>
  [...new Array(times)].map((_, i) => fun(i));
