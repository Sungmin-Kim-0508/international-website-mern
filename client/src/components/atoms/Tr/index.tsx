import React from "react";
import * as Sc from "./style";

type TrProps = {
  children: React.ReactNode;
};

function Tr({ children }: TrProps): React.ReactElement {
  return <Sc.Tr>{children}</Sc.Tr>;
}

export default Tr;
