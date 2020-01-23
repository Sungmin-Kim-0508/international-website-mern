import React from "react";
import * as Sc from "./style";

type SectionProps = {
  topBottomPadding?: string;
  sidePadding?: string;
  isHalfWidth?: boolean;
};

const Section: React.FC<SectionProps> = ({
  children,
  topBottomPadding,
  sidePadding,
  isHalfWidth = false
}) => {
  return (
    <Sc.Section
      topBottomPadding={topBottomPadding}
      sidePadding={sidePadding}
      isHalfWidth={isHalfWidth}
    >
      {children}
    </Sc.Section>
  );
};

export default Section;
