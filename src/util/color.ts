export const COLORS = ["red", "yellow", "green", "blue", "purple", "pink"];

export const INTENSITY = [500, 300, 900];

export const getColor = (i: number): [string, number] => [
  COLORS[i % COLORS.length],
  INTENSITY[Math.floor(i / COLORS.length) % INTENSITY.length],
];
