import React, { useMemo } from "react";

import { useAuth } from "~/auth/useAuth";
import { useViewer } from "~/auth/useViewer";
import { LoginButton } from "~/components/atoms/LoginButton";
import { RegisterButton } from "~/components/atoms/RegisterButton";

export const Component: React.VFC<{
  viewer: undefined | null | { id: string; alias: string; displayName: string; avatar: string; };
  needLogin: boolean;
  needRegister: boolean;
}> = ({ viewer, needRegister, needLogin }) => {
  return (
    <>
      {needLogin && <LoginButton />}
      {!needLogin && JSON.stringify(viewer)}
      {!needLogin && needRegister && <RegisterButton />}
    </>
  );
};

export const TemplateIndexPage: React.VFC = () => {
  const { isAuthenticated } = useAuth();
  const viewer = useViewer();

  const needLogin = useMemo(() => !isAuthenticated, [isAuthenticated]);
  const needRegister = useMemo(() => isAuthenticated && viewer === null, [isAuthenticated, viewer]);

  return <Component viewer={viewer} needLogin={needLogin} needRegister={needRegister} />;
};
