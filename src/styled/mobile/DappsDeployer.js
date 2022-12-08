import styled from "styled-components";
import { Centering, colors } from "../UniversalStyles";

export const DappsDeployerMobileContainer = styled.div`
  width: 100%;
  height: auto;
  overflow-y: scroll;
  background: ${colors.black};
  color: ${colors.white};
`;

export const DappsDeployerMobileHeader = styled.div`
  width: 100%;
  height: 5%;
  padding: 5%;
  gap: 10%;
  display: flex;
  & > img {
    width: 25px;
    height: 25px;
    transform: rotate(180deg);
  }
  & > div {
    background: ${colors.white};
    width: fit-content;
    height: fit-content;
    padding: 2px 7%;
    border-radius: 20px;
  }
  & > div > p {
    color: ${colors.black};
  }
`;

export const DappsDeployerMobileSubHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  padding: 5%;
  .logo {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${colors.white};
    ${Centering}
    align-self: center;
  }
  .token {
    width: 30%;
    height: auto;
    margin-left: 15%;
    ${Centering}
    gap: 15%;
  }
  .token > img {
    width: 25px;
    height: 25px;
  }
  .token > img:first-child {
    border-radius: 50%;
  }
  .token > img:last-child {
    transform: rotate(90deg);
    width: 20px;
    height: 20px;
  }
  .connect-btn {
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 20px;
    ${Centering}
    gap: 10px;
    align-self: center;
    margin-left: auto;
    background: ${colors.orange};
  }
  .connect-btn > img {
    width: 15px;
    transform: rotate(90deg);
    height: 15px;
  }
`;

export const DappsDeployerMobileIntroContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 4%;
  text-align: center;
  & > p {
    margin-top: 5px;
    font-size: 14px;
  }
  & > p:first-child {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 600;
  }
  & > p:nth-child(2) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

export const DappsDeployerMobileDeployBtnContainer = styled.div`
  width: 100%;
  height: 10%;
  padding: 5%;
  display: flex;
`;

export const DappsDeployerMobileDeployBtn = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 3px;
  border-radius: 3px;
  color: ${colors.black};
  background: ${colors.white};
  &:last-child {
    margin-left: auto;
  }
`;
export const DappsDeployerMobileTokenTypeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 5%;
`;

export const DappsDeployerMobileTokenType = styled.div`
  width: 100%;
  padding: 10px;
  color: ${colors.white};
  background: ${colors.grey};
  margin-bottom: 15px;
  text-align: center;
  & > p {
    font-size: 14px;
  }
`;
