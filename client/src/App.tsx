import React from "react";
import { createGlobalStyle } from "styled-components";
import { Home, SignIn } from "pages";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "commons/router";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Open Sans", Arial, sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
