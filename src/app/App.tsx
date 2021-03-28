import { CanvasContainer } from "app/App.styled";
import { useEffect, useState } from "react";
import { RangeInput } from "components/RangeInput";
import { COLORS, getColor, INTENSITY } from "util/color";
import { FiTrash2 } from "react-icons/fi";

const compareTuples = (a: [number, number], b: [number, number]): boolean =>
  a[0] === b[0] && a[1] === b[1];

export const App = () => {
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(8);
  const [population, setPopulation] = useState(100);
  const [mutation, setMutation] = useState(10);
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [connectors, setConnectors] = useState<[[number, number], [number, number]][]>([]);
  const [isRunning, setIsRunning] = useState(false);

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
    if (isRunning) return;
    if (hasConnector) return;
    if (connectors.length === COLORS.length * INTENSITY.length) return;

    if (selected && compareTuples(selected, position)) return setSelected(null);
    if (!selected) return setSelected(position);
    setConnectors([...connectors, [selected, position]]);
    setSelected(null);
  };

  const handleDeleteConnection = (i: number) => () => {
    const before = connectors.slice(0, i);
    const after = connectors.slice(i + 1);
    setConnectors([...before, ...after]);
  };

  return (
    <main className="w-screen h-screen flex items-stretch">
      <section className="flex-1 bg-gray-200 flex items-center justify-center flex-col">
        <CanvasContainer className="bg-white relative rounded-xl">
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
              const isSelected = selected && compareTuples(selected, coordinates);
              const [color, intensity] = hasConnector
                ? getColor(connector)
                : isSelected
                ? ["gray", 600]
                : ["gray", 300];

              return (
                <button
                  key={i}
                  className={`${!hasConnector && !isRunning ? "group" : "cursor-default"}`}
                  onClick={handleConnectorClick(coordinates, hasConnector)}
                  disabled={isRunning || hasConnector}
                >
                  <div
                    className={`bg-${color}-${intensity} ${
                      isSelected ? "ring-4 ring-gray-300" : ""
                    } ${hasConnector ? `ring-4 ring-${color}-100` : "group-hover:bg-gray-600"}`}
                  />
                </button>
              );
            })}
          </div>
        </CanvasContainer>
      </section>
      {!isRunning && (
        <aside className="max-w-sm w-6/12 bg-gray-300 flex flex-col p-8">
          <section>
            <label className="block">
              <h1 className="font-bold text-gray-700">Width</h1>
              <RangeInput value={width} onChange={setWidth} min={5} max={20} />
            </label>

            <label className="mt-4 block">
              <h1 className="font-bold text-gray-700">Height</h1>
              <RangeInput value={height} onChange={setHeight} min={5} max={20} />
            </label>

            <div className="mt-4">
              <h1 className="font-bold text-gray-700">Connections</h1>
              <div className="bg-gray-200 rounded px-4 h-40 overflow-y-auto mt-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
                {!connectors?.length && (
                  <div className="text-center text-gray-400 text-sm h-full w-full flex justify-center items-center">
                    No connections found
                  </div>
                )}
                {connectors.map(([start, end], i) => {
                  const [color, intensity] = getColor(i);
                  return (
                    <div key={`${start[0]}-${start[1]}`} className="flex items-center py-2 group">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ring-2 bg-${color}-${intensity} ring-${color}-100`}
                      />
                      <span className="text-sm text-gray-600">
                        ({start[0]}, {start[1]}) - ({end[0]}, {end[1]})
                      </span>
                      <button
                        className="p-1 ml-auto hover:opacity-100 opacity-50 transition-opacity focus:outline-none"
                        onClick={handleDeleteConnection(i)}
                      >
                        <FiTrash2 className="group-hover:opacity-100 opacity-30 transition-opacity" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="mt-10">
            <label className="block">
              <h1 className="font-bold text-gray-700">Population</h1>
              <RangeInput
                value={population}
                onChange={setPopulation}
                min={50}
                max={1000}
                step={50}
              />
            </label>

            <label className="mt-4 block">
              <h1 className="font-bold text-gray-700">Mutation chance</h1>
              <RangeInput value={mutation} onChange={setMutation} min={1} max={80} step={1}>
                {(value) => <>{value}%</>}
              </RangeInput>
            </label>
          </section>
          {connectors?.length < 2 && (
            <button
              className="rounded-lg bg-gray-400 text-gray-100 font-bold p-3 mt-10 shadow-lg"
              disabled
            >
              Start
            </button>
          )}
          {connectors?.length >= 2 && (
            <button
              className="rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-gray-100 font-bold p-3 mt-10 shadow-lg"
              onClick={() => setIsRunning(true)}
            >
              Start
            </button>
          )}
        </aside>
      )}
      {isRunning && (
        <aside className="max-w-sm w-6/12 bg-gray-300 flex justify-center flex-col p-8">
          <button
            className="rounded-lg bg-gray-500 hover:bg-gray-600 transition-colors focus:outline-none text-gray-100 font-bold p-3 mt-10 shadow-lg"
            onClick={() => setIsRunning(false)}
          >
            Stop
          </button>
        </aside>
      )}
    </main>
  );
};
