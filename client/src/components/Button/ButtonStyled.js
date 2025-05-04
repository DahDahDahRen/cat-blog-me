import styled from "@emotion/styled";

const getHeight = (props) => {
  if (props.size === "small") return "32px";
  if (props.size === "large") return "48px";
};

const getPadding = (props) => {
  if (props.size === "small") return "0 6px";
  if (props.size === "large") return "0 14px";
};

const getFontSize = (props) => {
  if (props.size == "small") return "14px";
  if (props.size == "large") return "16px";
};

const getBorderRadius = (props) => {
  if (props.size === "small") return "6px";
  if (props.size === "large") return "8px";
};

const StyledButton = styled.button`
  cursor: pointer;

  height: ${(props) => getHeight(props)};
  padding: ${(props) => getPadding(props)};
  border-radius: ${(props) => getBorderRadius(props)};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: ${(props) => getFontSize(props)};
  text-align: center;

  background-color: ${(props) => props.theme.colors.accentColor};
  color: ${(props) => props.theme.ntrColors.white};
  box-shadow: ${(props) => props.theme.cssShadow.shadowOne};

  border: none;
`;

export default StyledButton;
