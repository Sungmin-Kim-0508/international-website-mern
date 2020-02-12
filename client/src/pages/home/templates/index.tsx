import React from "react";
import {
  AboutSection,
  ContactSection,
  EventsSection,
  GreetingSection,
  InformationSection,
  NewsSection,
  ProgramSection
} from "components";
import { note, information, programLabels, NewsState } from "commons/__types__";

interface HomeTemplateProps {
  notes: note[];
  stuInfos: information[];
  voluInfos: information[];
  cards: NewsState;
  programLabels: programLabels[];
}

function HomeTemplate({
  stuInfos,
  voluInfos,
  cards,
  programLabels
}: HomeTemplateProps): React.ReactElement {
  return (
    <>
      <GreetingSection />
      <AboutSection />
      <ProgramSection programLabels={programLabels} />
      {/* <EventsSection notes={notes} /> */}
      <NewsSection cards={cards} />
      <InformationSection stuInfos={stuInfos} voluInfos={voluInfos} />
      <ContactSection />
    </>
  );
}

export default HomeTemplate;
