import clsx from "clsx";
import React, { useMemo } from "react";

import { Notification } from "./Notification";
import { Profile } from "./Profile";

import { useViewer } from "~/auth/useViewer";
import { OpenCreateHenkenModalButton } from "~/components/atoms/Button";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{ className?: string; isLoggedIn: boolean; }> = ({ className, isLoggedIn }) => {
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
        {isLoggedIn && (
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
  const viewer = useViewer();
  const isLoggedIn = useMemo(() => Boolean(viewer), [viewer]);

  return <View {...props} isLoggedIn={isLoggedIn} />;
};
