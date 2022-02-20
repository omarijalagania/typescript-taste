import styled from "styled-components";
import { device } from "./sizes";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
