import React from "react";
import { Header } from "components";
import { UserState } from "commons/__types__";

type HeaderTemplateProps = {
  signIn: UserState;
  onSignOut: () => void;
};

function HeaderTemplate({
  signIn,
  onSignOut
}: HeaderTemplateProps): React.ReactElement {
  return (
    <>
      <Header signIn={signIn} onSignOut={onSignOut} />
    </>
  );
}

export default HeaderTemplate;
