import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Routes from "commons/router";
import { loadUser } from "rootAction";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Open Sans", Arial, sans-serif;
  }
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
