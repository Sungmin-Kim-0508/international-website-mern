import React from "react";
import {
  AboutSection,
  ContactSection,
  EventsSection,
  GreetingSection,
  Header,
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
  notes,
  stuInfos,
  voluInfos,
  cards,
  programLabels
}: HomeTemplateProps): React.ReactElement {
  return (
    <>
      <Header />
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
