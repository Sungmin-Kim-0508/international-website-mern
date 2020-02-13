import React from "react";
import * as Sc from "./style";

type CircleProps = {
  /** Length Unit: rem */
  radiusLength?: Number;
};

const Circle: React.FC<CircleProps> = ({ children, radiusLength = 1 }) => (
  <Sc.StyledCircle radiusLength={radiusLength}>{children}</Sc.StyledCircle>
);
export default Circle;
