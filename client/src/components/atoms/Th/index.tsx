import React from "react";
import * as Sc from "./style";

type ThProps = {
  children: React.ReactNode;
};

function Th({ children }: ThProps): React.ReactElement {
  return <Sc.Th>{children}</Sc.Th>;
}

export default Th;
