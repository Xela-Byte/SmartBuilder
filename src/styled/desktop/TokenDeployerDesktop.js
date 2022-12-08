import styled from "styled-components";
import { Centering, colors } from "../UniversalStyles";

export const TokenDeployerDesktopContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 5%;
  background: ${colors.black};
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
  }
`;

export const TokenDeployerDesktopHeader = styled.div`
  width: 100%;
  height: 10%;
  ${Centering}
  gap: 10px;
  padding: 0px 50px 0px 10px;
  & > p {
    font-size: 2vh;
    margin-left: 45%;
    color: ${colors.white};
  }
  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .arrow-down {
    width: 15px;
    height: 15px;
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export const TokenDeployerDesktopSubHeader = styled.div`
  width: 100%;
  height: 20%;
  color: ${colors.white};
  ${Centering}
  display: flex;
  flex-direction: column;
  gap: 5%;
  & > p:first-child {
    font-size: 4vh;
  }
  & > p {
    font-size: 2vh;
  }
`;

export const TokenDeployerDesktopTokenTypeContainer = styled.div`
  width: 40%;
  height: 80%;
  padding-top: 5%;
  position: relative;
  margin: 2% auto;
  ${Centering}
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid ${colors.orange};
`;

export const TokenDeployerDesktopTokenType = styled.div`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: ${colors.white};
  background: ${colors.grey};
  margin-bottom: 15px;
  text-align: center;
  & > p:first-child {
    font-size: 2.5vh;
  }
  & > p:last-child {
    font-size: 1.5vh;
  }
`;

export const TokenDeployerDesktopDeployBtn = styled.div`
  background: ${(props) => (props.colored ? colors.orange : "transparent")};
  border-radius: ${(props) => (props.colored ? "20px" : "0")};
  color: ${colors.white};
  padding: 10px;
  width: fit-content;
  ${Centering}
  font-size: 2vh;
  cursor: pointer;
  & > img {
    width: 15px;
    height: 15px;
    margin: 5px;
  }
`;

export const TokenDeployerDesktopConnectBtn = styled.div`
  width: 10%;
  padding: 10px;
  background: ${colors.orange};
  color: ${colors.white};
  border-radius: 20px;
  text-align: center;
  font-size: 2vh;
  cursor: pointer;
  margin-left: auto;
`;
