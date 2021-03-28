export const COLORS = ["red", "yellow", "green", "blue", "purple", "pink"];
export const HUE = [0, 38, 160, 217, 258, 330];

export const INTENSITY = [500, 300, 900];
export const LIGHTNESS = [60, 80, 40];

export const getColor = (i: number): [string, number] => [
  COLORS[i % COLORS.length],
  INTENSITY[Math.floor(i / COLORS.length) % INTENSITY.length],
];

export const getHSL = (i: number): [number, number] => [
  HUE[i % HUE.length],
  LIGHTNESS[Math.floor(i / HUE.length) % LIGHTNESS.length],
];
