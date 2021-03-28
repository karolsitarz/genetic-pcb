import { generatePath, Path } from "logic/path";
import { Connector } from "logic/problem";

export type Individual = {
  paths: Path[];
};

export const generateIndividual = (
  width: number,
  height: number,
  connectors: Connector[]
): Individual => {
  const paths = connectors.map((connector, index) => generatePath(connector, width, height, index));
  return { paths };
};
