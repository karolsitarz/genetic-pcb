import { roundTo } from "util/number";
import { times } from "util/array";

export const roulette = <T>(list: [T, number][], take = 2) => {
  const sum = list.reduce((acc, [, weight]) => acc + weight, 0);
  const { roulette } = list.reduce(
    ({ roulette, progress }, [item, weight]) => {
      const topBound = roundTo(weight / sum, 4);
      if (topBound === 0) return { roulette, progress };
      return {
        roulette: [...roulette, [item, topBound]] as typeof list,
        progress: progress + topBound,
      };
    },
    { roulette: [] as typeof list, progress: 0 }
  );

  return times(take, () => {
    const random = Math.random();
    const [item] = roulette.find(([, weight]) => weight > random) || roulette[0];
    return item;
  });
};
