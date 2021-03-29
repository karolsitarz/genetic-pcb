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

  > div > button {
    width: 100%;
    height: 100%;
    display: flex;
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
