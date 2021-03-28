export type Tuple<T> = [T, T];

export const compareTuples = <T>(a: Tuple<T>, b: Tuple<T>): boolean =>
  a[0] === b[0] && a[1] === b[1];
