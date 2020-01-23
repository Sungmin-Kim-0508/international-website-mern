import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import NavItem from ".";

export default {
  title: "atoms/NavItems",
  decorators: [withKnobs]
};

export const index: React.FC = () => (
  <section className="navbar-nav">
    <NavItem to="/">{text("content", "Home")}</NavItem>
  </section>
);
