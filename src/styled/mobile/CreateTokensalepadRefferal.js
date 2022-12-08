import styled from "styled-components";
import { colors } from "../UniversalStyles";

export const CreateTokenRefferalContainer = styled.div`
  width: 100%;
  height: 130vh;
  overflow-y: scroll;
  background: ${colors.black};
  @media screen and (max-height: 680px) {
    height: 120vh;
  }
`;
