import styled from "styled-components";
import { colors } from "../UniversalStyles";

export const Web3PlatformContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 999;
  overflow-y: hidden;
  color: ${colors.white};
`;

export const Web3PlatformContent = styled.div`
  width: 100%;
  height: 60%;
  position: fixed;
  border: 1px solid white;
  border-radius: 35px 35px 0 0;
  top: 32vh;
  bottom: 8vh;
  background: rgba(0, 0, 0, 0.9);
`;

export const Web3PlatformHeader = styled.div`
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

export const Web3PlatformTab = styled.div`
  width: 90%;
  padding: 20px;
  gap: 5%;
  margin: 5% auto 0;
  display: flex;
  border-radius: 10px;
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  & > img:last-child {
    width: 15px;
    height: 15px;
    align-self: center;
  }
  & > div {
    width: 70%;
    display: flex;
    align-items: center;
  }
  & > div > p {
    color: ${colors.white};
  }
  & > div > p:first-child {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 2px;
  }
`;
