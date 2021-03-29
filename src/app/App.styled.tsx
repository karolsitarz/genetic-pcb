import styled from "@emotion/styled";

type Props = {
  width: number;
  height: number;
};

export const CanvasContainer = styled.div<Props>`
  width: 100%;

  &::before {
    content: "";
    display: block;
    padding-bottom: ${({ height, width }) => (height * 100) / width}%;
  }

  > div {
    width: calc(100% * ${({ width }) => `${width} / ${width + 1}`});
    height: calc(100% * ${({ height }) => `${height} / ${height + 1}`});
    left: calc(100% / ${({ width }) => width + 1} / 2);
    top: calc(100% / ${({ height }) => height + 1} / 2);

    > button {
      width: calc(100% / ${({ width }) => width});
      height: calc(100% / ${({ height }) => height});      
      display: inline-flex;
      align-items: center;
      justify-content: center;

      div {
        width: 75%;
        border-radius: 50%;
        max-width: 0.75rem;
        &::after {
          content: "";
          padding-bottom: 100%;
          display: block;
        }
      }
    }
`;
