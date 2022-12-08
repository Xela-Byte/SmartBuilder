import { css } from "styled-components";

export const Centering = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const colors = {
  black: "#000000",
  orange: "#F5A22F",
  white: "#FFFFFF",
  grey: "#D9D9D9B2",
};

export const ToastifyProps = {
  position: "top-right",
  autoClose: 5000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  style: {
    borderRadius: "10px",
    fontFamily: "Cairo",
  },
};
