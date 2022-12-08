import styled from "styled-components";
import { Centering, colors } from "../UniversalStyles";

export const ConnectWalletContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 999;
  overflow-y: hidden;
  color: ${colors.white};
`;

export const ConnectWalletContent = styled.div`
  width: 100%;
  height: 60%;
  position: fixed;
  border: 1px solid white;
  border-radius: 35px 35px 0 0;
  top: 32vh;
  bottom: 8vh;
  background: rgba(0, 0, 0, 0.9);
`;

export const ConnectWalletHeader = styled.div`
  width: 100%;
  height: 15%;
  padding: 5%;
  display: flex;
  & > img {
    width: 25px;
    height: 25px;
    margin-left: auto;
  }
`;

export const ConnectWalletTab = styled.div`
  width: 90%;
  padding: 20px;
  gap: 5%;
  margin: 5% auto 0;
  background: ${colors.white};
  display: flex;
  border-radius: 10px;
  & > img {
    width: 40px;
    height: 40px;
  }
  & > div {
    width: 70%;
  }
  & > div > p {
    color: ${colors.black};
  }
  & > div > p:first-child {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 2px;
  }
`;

export const ConnectWalletFooter = styled.div`
  width: 100%;
  height: 15%;
  ${Centering}
  font-size: 14px;
  & > p > span {
    color: ${colors.orange};
  }
  & > p > i {
    font-weight: 600;
  }
`;
