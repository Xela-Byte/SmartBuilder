import styled from "styled-components";
import { colors, Centering } from "../UniversalStyles";

export const NavbarDesktopContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: ${colors.white};
  position: fixed;
  display: flex;
  top: 0;
  z-index: 9999;
`;

export const NavbarDesktopLogo = styled.div`
  width: 10%;
  margin-right: 25%;
  ${Centering}
`;

export const NavbarDesktopTab = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 50px;
  cursor: pointer;
  ${Centering}
`;

export const NavbarDesktopBtn = styled.div`
  width: 100%;
  padding: 10px;
  background: ${colors.orange};
  color: ${colors.white};
  border-radius: 20px;
  text-align: center;
  font-size: 2vh;
`;
