import styled from "styled-components";
import { colors, Centering } from "../UniversalStyles";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 8vh;
  background: ${colors.black};
  position: fixed;
  ${Centering}
  bottom: 0;
  gap: 2%;
  z-index: 9999;
`;

export const NavbarTab = styled.div`
  width: fit-content;
  height: 100%;
  ${Centering}
  & > p {
    font-size: 13px;
    color: ${colors.white};
  }
`;
