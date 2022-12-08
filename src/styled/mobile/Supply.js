import styled from "styled-components";
import { colors, Centering } from "../UniversalStyles";

export const SupplyContainer = styled.div`
  width: 100%;
  height: 74vh;
  background: ${colors.black};
`;

export const SupplyForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 5%;
  overflow-y: scroll;
  .hyper-supply {
    gap: 8%;
    height: 40%;
  }
  .supplyInputContainer {
    width: 100%;
    display: grid;
    row-gap: 10%;
    column-gap: 5%;
    grid-template-columns: auto auto;
  }
  .supplyInput {
    width: 100%;
    ${Centering}
  }

  .supplyInput > input {
    width: 45%;
    padding: 0.5rem;
    background: transparent;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
    margin-left: auto;
    color: ${colors.white};
  }
`;

export const SupplyInputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3%;
  margin-bottom: 20px;
  .supplyLabel {
    font-size: 2vh;
  }
  & > label {
    width: fit-content;
    font-size: 3.5vh;
  }
  & > input {
    width: 65%;
    padding: 0.5rem;
    background: transparent;
    outline: none;
    border: 1px solid white;
    color: ${colors.white};
    border-radius: 5px;
    margin-left: auto;
  }
`;

export const SupplyFooter = styled.div`
  width: 100%;
  height: 20%;
  gap: 30%;
  ${Centering}
  flex-direction: column;
  & > p {
    font-size: 11px;
    text-align: center;
  }
  & > p:last-child {
    font-size: 18px;
  }
`;

export const SupplyCreateTokenBtn = styled.button`
  width: 40%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: ${colors.grey};
  color: ${colors.white};
  font-size: 16px;
  margin-left: 30%;
`;
