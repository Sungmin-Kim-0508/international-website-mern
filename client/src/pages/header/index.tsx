import React from "react";
import Header from "./template";
import { UserState } from "commons/__types__";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "./actionMethods";
import { RootState } from "rootReducer";

type HeaderPageProps = {
  signIn: UserState;
};

function HeaderPage(): React.ReactElement {
  const dispatch = useDispatch();
  const { signIn } = useSelector((state: RootState) => state);

  const onSignOut = () => {
    dispatch(signOut());
  };
  return (
    <>
      <Header signIn={signIn} onSignOut={onSignOut} />
    </>
  );
}

export default HeaderPage;
