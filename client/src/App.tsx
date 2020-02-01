import React from "react";
//import "./App.css";
import { createGlobalStyle } from "styled-components";
import Typography from "./components/atoms/Typography";
import LabelDate from "components/atoms/LabelDate";
import Paragraph from "components/atoms/Paragraph";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import NavItem from "components/atoms/NavItem";
import NavBrand from "components/atoms/NavBrand";
import { BrowserRouter as Router } from "react-router-dom";
import { ContactSection } from "components";

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
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input placeholder="What's up" />
        <Typography styleType="h4" color="secondary" isItalic={true}>
          Lorem Ipsum
        </Typography>
        <LabelDate color="gray">LabelDate</LabelDate>
        <Paragraph color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
          urna vitae eros vulputate mollis eget finibus elit. Quisque sed.
        </Paragraph>
        <Button theme="primary">Button</Button>
        <Router>
          <NavBrand to="/">Home Brand</NavBrand>
          <NavItem to="/">Home</NavItem>
        </Router>
      </header>

      <ContactSection />
    </div>
  );
};

export default App;
