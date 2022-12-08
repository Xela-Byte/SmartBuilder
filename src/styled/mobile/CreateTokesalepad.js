import styled from "styled-components";
import { colors, Centering } from "../UniversalStyles";

export const CreateTokenContainer = styled.div`
  width: 100%;
  height: 110vh;
  overflow-y: scroll;
  background: ${colors.black};
  @media screen and (max-height: 680px) {
    height: 120vh;
  }
`;

export const CreateTokenInfoContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 3%;
  text-align: center;
  & > p {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const CreateTokenForm = styled.form`
  width: 100%;
  height: 50vh;
  padding: 3%;
`;

export const CreateTokenInputContainer = styled.div`
  width: 100%;
  ${Centering}
  flex-direction: column;
  margin-bottom: 15px;
  gap: 10px;
  & > p {
    font-size: 23px;
  }
  & > input {
    width: 90%;
    background: transparent;
    padding: 0.7rem;
    outline: none;
    color: white;
    border-radius: 10px;
    border: 1px solid white;
  }
  & > input::placeholder {
    text-align: center;
  }
  & > div {
    width: 100%;
    ${Centering}
    gap: 5%;
  }
  & > div > p {
    font-size: 20px;
  }
  & > div > input {
    width: 60%;
    background: transparent;
    padding: 0.7rem;
    color: white;
    border-radius: 10px;
    outline: none;
    border: 1px solid white;
  }
  & > div > input::placeholder {
    text-align: center;
  }
`;

export const CreateTokenFeeOptionContainer = styled.div`
  width: 100%;
`;

export const DeployButton = styled.button`
  width: 40%;
  border-radius: 5px;
  background: ${colors.grey};
  margin-left: 30%;
  color: white;
  font-size: 5vw;
  border: none;
  padding: 10px;
`;
