export const roundTo = (number: number, places: number) =>
  Math.round(number * 10 ** places) / 10 ** places;

export const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const randomBool = () => Math.random() < 0.5;
