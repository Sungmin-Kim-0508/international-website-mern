import React from "react";
import * as Sc from "./style";

type TdProps = {
  children: React.ReactNode;
};

function Td({ children }: TdProps): React.ReactElement {
  return <Sc.Td>{children}</Sc.Td>;
}

export default Td;
