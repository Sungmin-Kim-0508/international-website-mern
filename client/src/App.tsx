import React from "react";
import { createGlobalStyle } from "styled-components";
import { Home } from "pages";
import { BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;
