import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  box-shadow: ${(props) => props.theme.cssShadow.shadowOne};

  .navbar-content {
    // border: 1px solid red;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 0;
  }

  .navbar-logo {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.2px;
    line-height: 1.25;
  }
`;

export default StyledNavbar;
