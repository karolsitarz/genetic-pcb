import { CanvasContainer } from "app/App.styled";
import { useEffect, useRef, useState } from "react";
import { RangeInput } from "components/RangeInput";
import { COLORS, getColor, INTENSITY } from "util/color";
import { FiTrash2 } from "react-icons/fi";
import { compareTuples, Pair, times } from "util/array";
import { Connector, generateProblem, Problem, runProblem } from "logic/problem";
import { BoardCanvas } from "components/BoardCanvas";
import { IoMdRefresh } from "react-icons/all";

const INITIAL_CONNECTORS = [
  [
    [1, 1],
    [1, 4],
  ],
  [
    [4, 5],
    [8, 3],
  ],
  [
    [5, 5],
    [7, 1],
  ],
  [
    [5, 0],
    [6, 4],
  ],
  [
    [6, 2],
    [8, 1],
  ],
  [
    [8, 0],
    [6, 0],
  ],
  [
    [2, 4],
    [0, 3],
  ],
  [
    [0, 4],
    [3, 6],
  ],
  [
    [2, 2],
    [0, 0],
  ],
  [
    [1, 0],
    [3, 0],
  ],
] as Connector[];

export const App = () => {
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(7);
  const [population, setPopulation] = useState(100);
  const [mutation, setMutation] = useState(10);
  const [drawEvery, setDrawEvery] = useState(1);
  const [selected, setSelected] = useState<Pair<number> | null>(null);
  const [connectors, setConnectors] = useState<Connector[]>(INITIAL_CONNECTORS);

  const [problem, setProblem] = useState<Problem | null>(null);
  const generationRef = useRef<HTMLDivElement>(null);

  window.__updateGeneration = (number) => {
    const generation = generationRef?.current;
    if (!generation) return;
    generation.innerText = number.toString();
  };

  useEffect(() => {
    if (selected) setSelected(null);

    const newConnectors = connectors.filter(
      ([start, end]) => start[0] < width && start[1] < height && end[0] < width && end[1] < height,
    );
    setConnectors(newConnectors);
  }, [width, height]);

  const handleConnectorClick = (position: Pair<number>, hasConnector: boolean) => () => {
    if (problem) return;
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

  const handleStart = () => {
    window.__isRunning = true;
    const problem = generateProblem(width, height, connectors, population, mutation);
    setProblem(problem);
  };

  useEffect(() => {
    if (!problem) return;
    runProblem(problem, drawEvery);
  }, [problem]);

  const handleStop = () => {
    window.__isRunning = false;
    setProblem(null);
  };

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
      <main className="bg-gray-200 md:bg-gray-100 min-h-screen w-full flex flex-col md:flex-row items-stretch">
        <section className="flex-grow flex items-center justify-center flex-col h-screenpeek md:h-auto sticky top-0">
          <CanvasContainer
            className="bg-white relative rounded-xl shadow-2xl"
            style={{
              maxWidth: `min(max(calc(${width} / ${height} * 80%), calc(${height} / ${width} * 70vh)), 80%, calc(${width} / ${height} * 70vh))`,
            }}
            {...{ width, height }}
          >
            <BoardCanvas {...{ width, height, isRunning: !!problem }} />
            {!problem && (
              <div className="absolute">
                {times(height, (y) =>
                  times(width, (x) => {
                    const coordinates: Pair<number> = [x, y];
                    const connector = connectors?.findIndex(
                      ([start, end]) =>
                        compareTuples(start, coordinates) || compareTuples(end, coordinates),
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
                        key={`${x}-${y}`}
                        className={`absolute ${
                          !hasConnector && !problem ? "group" : "cursor-default"
                        }`}
                        onClick={handleConnectorClick(coordinates, hasConnector)}
                        disabled={problem || hasConnector}
                        style={{
                          left: `calc(100% / ${width} * ${x})`,
                          top: `calc(100% / ${height} * ${y})`,
                        }}
                      >
                        <div
                          className={`transition-colors bg-${color}-${intensity} ${
                            isSelected ? "ring-4 ring-gray-300" : ""
                          } ${
                            hasConnector ? `ring-4 ring-${color}-100` : "group-hover:bg-gray-600"
                          }`}
                        />
                      </button>
                    );
                  }),
                )}
              </div>
            )}
          </CanvasContainer>
        </section>
        <aside className="md:max-w-xs md:w-1/2 p-8 pt-12 md:pt-8 md:border-l-2 bg-gray-100 z-10 rounded-t-3xl md:rounded-none shadow-blur md:shadow-none md:max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
          <div className="flex flex-col max-w-sm m-auto h-full">
            {!problem && (
              <>
                <section className="mb-12">
                  <h1 className="font-bold text-xl text-gray-500 mb-2">Problem</h1>
                  <RangeInput value={width} onChange={setWidth} min={5} max={20} label="Width" />
                  <RangeInput
                    value={height}
                    onChange={setHeight}
                    min={5}
                    max={20}
                    label="Height"
                    className="mt-4"
                  />

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold text-gray-700 mr-2">Connections</h1>
                      <button
                        className={`p-1 transition-opacity text-lg ${
                          !!connectors?.length
                            ? "opacity-50 hover:opacity-100"
                            : "opacity-20 cursor-default"
                        }`}
                        onClick={() => setConnectors([])}
                        disabled={!connectors?.length}
                      >
                        <IoMdRefresh />
                      </button>
                    </div>
                    <div className="border-2 bg-gray-50 rounded-lg px-4 h-40 overflow-y-auto mt-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
                      {!connectors?.length && (
                        <div className="text-center text-gray-400 text-sm h-full w-full flex justify-center items-center">
                          No connections found
                        </div>
                      )}
                      {connectors.map(([start, end], i) => {
                        const [color, intensity] = getColor(i);
                        return (
                          <div
                            key={`${start[0]}-${start[1]}`}
                            className="flex items-center py-2 group"
                          >
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
                <section className="mb-12">
                  <h1 className="font-bold text-xl text-gray-500 mb-2">Parameters</h1>
                  <RangeInput
                    value={population}
                    onChange={setPopulation}
                    min={50}
                    max={500}
                    step={50}
                    label="Population"
                  />
                  <RangeInput
                    value={mutation}
                    onChange={setMutation}
                    min={1}
                    max={80}
                    label="Mutation chance"
                    className="mt-4"
                    dangerZoneClassName="w-3/4"
                  >
                    {(value) => <>{value}%</>}
                  </RangeInput>
                </section>
                <section className="flex flex-col pb-8">
                  <h1 className="font-bold text-xl text-gray-500 mb-2">Runtime</h1>
                  <RangeInput
                    value={drawEvery}
                    onChange={setDrawEvery}
                    min={1}
                    max={10}
                    label="Draw every"
                    dangerZoneClassName="w-0"
                  />
                  {connectors?.length < 2 && (
                    <button
                      className="rounded-lg bg-gray-400 text-gray-100 font-bold p-3 shadow-lg mt-2"
                      disabled
                    >
                      Start
                    </button>
                  )}
                  {connectors?.length >= 2 && (
                    <button
                      className="rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-gray-100 font-bold p-3 shadow-lg mt-2"
                      onClick={handleStart}
                    >
                      Start
                    </button>
                  )}
                </section>
              </>
            )}
            {problem && (
              <div className="d-flex justify-center flex-col my-auto">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-gray-700">Generation</h1>
                  <div ref={generationRef} className="text-gray-500 font-bold" />
                </div>
                <button
                  className="rounded-lg bg-gray-500 hover:bg-gray-600 transition-colors focus:outline-none text-gray-100 font-bold p-3 shadow-lg w-full"
                  onClick={handleStop}
                >
                  Stop
                </button>
              </div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
};
