import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedwidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} fixedwidth={fixedwidth} onClick={onClick}>
    {children}
  </StyledButton>
);
