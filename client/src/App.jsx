import { Routes, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";
import Home from "./page/Home/Home";
import Register from "./page/Register/Register";
import SignUp from "./page/Signup/SignUp";
import theme from "./config/theme";

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          ol,
          ul {
            list-style: none;
          }

          img {
            display: block;
            width: 100%;
          }

          body {
            font-family: "Inter", sans-serif;
            line-height: 175%;
            background-color: ${theme.colors.primaryColor};
            color: ${theme.colors.secondaryColor};
            height: 100vh;
          }

          button,
          input {
            font-family: inherit;
          }

          a {
            text-decoration: none;
          }
        `}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
