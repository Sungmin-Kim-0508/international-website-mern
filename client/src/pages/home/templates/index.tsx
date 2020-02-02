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
import {
  note,
  information,
  rowDirectionCard,
  programLabels
} from "commons/__types__";

interface HomeTemplateProps {
  notes: note[];
  stuInfos: information[];
  voluInfos: information[];
  cards: rowDirectionCard[];
  labels: programLabels[];
}

function HomeTemplate({
  notes,
  stuInfos,
  voluInfos,
  cards,
  labels
}: HomeTemplateProps): React.ReactElement {
  return (
    <>
      <Header />
      <GreetingSection />
      <AboutSection />
      <ProgramSection labels={labels} />
      <EventsSection notes={notes} />
      <NewsSection cards={cards} />
      <InformationSection stuInfos={stuInfos} voluInfos={voluInfos} />
      <ContactSection />
    </>
  );
}

export default HomeTemplate;
