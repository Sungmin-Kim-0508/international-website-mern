import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Header from ".";
import { UserState } from "commons/__types__";
import { defaultUserState } from "commons/defaultState";

export default {
  title: "organisms/Header",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Navigation Bar"
  }
};

const onSignOut = () => {};

export const index: React.FC = () => (
  <Header signIn={defaultUserState} onSignOut={onSignOut} />
);
