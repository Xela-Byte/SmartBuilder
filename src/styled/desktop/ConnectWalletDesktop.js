import styled from "styled-components";
import { Centering, colors } from "../UniversalStyles";

export const ConnectWalletDesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  top: -5%;
  position: absolute;
  background: ${colors.black};
  color: ${colors.white};
  border-radius: 20px;
  border-top: 1px solid ${colors.orange};
  & > p {
    font-size: 14px;
    text-align: center;
  }
  & > p > span {
    color: ${colors.orange};
  }
  & > p > i {
  font-weight: 600;
  font-style: normal;
  }
`;

export const ConnectWalletDesktopHeader = styled.div`
  width: 100%;
  height: 15%;
  padding: 5%;
  ${Centering}
  & > p {
    margin-left: auto;
    text-align: center;
  }
  & > img {
    width: 25px;
    height: 25px;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const ConnectWalletDesktopTab = styled.div`
  width: 90%;
  padding: 20px;
  gap: 10%;
  margin: 5% auto 0;
  background: ${colors.white};
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  & > img {
    width: 40px;
    height: 40px;
  }
  & > p {
    color: ${colors.black};
  }
  & > p:nth-child(2) {
    font-size: 18px;
    margin-left: 5%;
  }
  &:nth-child(3) > p:last-child {
    margin-left: 20%;
  }
  &:nth-child(4) > p:last-child {
    margin-left: 10%;
  }
`;

export const ConnectWalletDesktopConfirmBtn = styled.div`
  width: 30%;
  padding: 10px;
  background: ${colors.orange};
  color: ${colors.white};
  margin: 20px auto;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
`;
