import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import EventsSection from ".";
import { notes } from "commons/__mock_json__";

export default {
  title: "organisms/EventsSection",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Event Section"
  }
};

export const eventsSection: React.FC = () => <EventsSection notes={notes} />;
