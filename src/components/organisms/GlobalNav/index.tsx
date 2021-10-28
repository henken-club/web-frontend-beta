import clsx from "clsx";
import React, { useMemo } from "react";

import { Notification } from "./Notification";
import { Profile } from "./Profile";

import { useAuth } from "~/auth/useAuth";
import { useViewer } from "~/auth/useViewer";
import { LoginButton, OpenCreateHenkenModalButton, OpenRegisterUserModalButton } from "~/components/atoms/Button";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  needLogin: boolean;
  needRegister: boolean;
}> = ({ className, needLogin, needRegister }) => {
  const { LL } = useTranslation();

  return (
    <nav className={clsx(className, ["h-16"], ["bg-blue-50"], ["shadow-lg"])}>
      <div
        className={clsx(
          ["h-full"],
          [["container"], ["mx-auto"]],
          ["px-4"],
          [["flex"], ["items-center"]],
        )}
      >
        <div className={clsx(["flex-grow"])} />
        {needLogin && (
          <div className={clsx([["flex"], ["items-center"]])}>
            <LoginButton />
          </div>
        )}
        {!needLogin && needRegister && (
          <div className={clsx([["flex"], ["items-center"]])}>
            <OpenRegisterUserModalButton />
          </div>
        )}
        {!needLogin && !needRegister && (
          <div className={clsx([["flex"], ["items-center"]])}>
            <Notification />
            <OpenCreateHenkenModalButton className={clsx(["ml-4"])} />
            <Profile className={clsx(["ml-4"])} />
          </div>
        )}
      </div>
    </nav>
  );
};

export const GlobalNav: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { isAuthenticated } = useAuth();
  const viewer = useViewer();

  const needLogin = useMemo(() => !isAuthenticated, [isAuthenticated]);
  const needRegister = useMemo(() => isAuthenticated && viewer === null, [isAuthenticated, viewer]);

  return <View {...props} needLogin={needLogin} needRegister={needRegister} />;
};
