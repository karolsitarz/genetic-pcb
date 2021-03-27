import styled from "@emotion/styled";

export const CanvasContainer = styled.div`
  width: 75%;
  max-width: 75vh;

  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
  }

  > div > div {
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
