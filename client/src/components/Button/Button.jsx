import StyledButton from "./ButtonStyled";

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
