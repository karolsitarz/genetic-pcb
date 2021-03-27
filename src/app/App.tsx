import { CanvasContainer } from "app/App.styled";
import { useEffect, useState } from "react";
import { RangeInput } from "components/RangeInput";
import { COLORS, getColor, INTENSITY } from "util/color";

const compareTuples = (a: [number, number], b: [number, number]): boolean =>
  a[0] === b[0] && a[1] === b[1];

export const App = () => {
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(8);
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [connectors, setConnectors] = useState<[[number, number], [number, number]][]>([]);

  const indexToCoordinates = (i: number): [number, number] => {
    const x = i % width;
    const y = Math.floor(i / width);
    return [x, y];
  };

  useEffect(() => {
    const newConnectors = connectors.filter(
      ([start, end]) => start[0] < width && start[1] < height && end[0] < width && end[1] < height
    );
    setConnectors(newConnectors);
  }, [width, height]);

  const handleConnectorClick = (position: [number, number], hasConnector: boolean) => () => {
    if (hasConnector) return;
    if (connectors.length === COLORS.length * INTENSITY.length) return;

    if (selected && compareTuples(selected, position)) return setSelected(null);
    if (!selected) return setSelected(position);
    setConnectors([...connectors, [selected, position]]);
    setSelected(null);
  };

  return (
    <main className="w-screen h-screen flex items-stretch">
      <section className="flex-1 bg-gray-200 flex items-center justify-center flex-col">
        <CanvasContainer className="bg-white relative rounded-3xl">
          <canvas className="absolute left-0 top-0 bottom-0 right-0 w-full h-full" />
          <div
            className="absolute left-0 top-0 bottom-0 right-0 w-full h-full grid place-items-center"
            style={{
              gridTemplateColumns: `repeat(${width}, 1fr)`,
              gridTemplateRows: `repeat(${height}, 1fr)`,
            }}
          >
            {[...new Array(width * height)].map((_, i) => {
              const coordinates = indexToCoordinates(i);
              const connector = connectors?.findIndex(
                ([start, end]) =>
                  compareTuples(start, coordinates) || compareTuples(end, coordinates)
              );
              const hasConnector = connector != null && connector >= 0;
              const [color, intensity] = hasConnector
                ? getColor(connector)
                : selected && compareTuples(selected, coordinates)
                ? ["gray", 600]
                : ["gray", 300];

              return (
                <div
                  key={i}
                  className={`${hasConnector ? "" : "group cursor-pointer"}`}
                  onClick={handleConnectorClick(coordinates, hasConnector)}
                >
                  <div
                    className={`bg-${color}-${intensity} ${
                      hasConnector
                        ? `ring-4 ring-${color}-${intensity - 200}`
                        : "group-hover:bg-gray-600"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </CanvasContainer>
      </section>
      <aside className="max-w-sm w-6/12 bg-gray-300 flex flex-col items-center p-8">
        <label className="w-full">
          <h1 className="font-bold text-lg">Width</h1>
          <RangeInput value={width} onChange={setWidth} min={5} max={20} />
        </label>
        <label className="w-full mt-4">
          <h1 className="font-bold text-lg">Height</h1>
          <RangeInput value={height} onChange={setHeight} min={5} max={20} />
        </label>
      </aside>
    </main>
  );
};
