import clsx from "clsx";
import React from "react";

import { AvatarLarge } from "~/components/atoms/Avatar";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  alias: string;
  displayName: string;
  avatar: string;
}> = ({ className, alias, displayName, avatar }) => {
  const { LL } = useTranslation();
  return (
    <header
      className={clsx(
        className,
        [["py-2"], ["px-4"]],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["max-w-screen-lg"],
          ["mx-auto"],
          ["flex", ["flex-row"]],
        )}
      >
        <div className={clsx(["flex"])}>
          <div
            className={clsx(
              ["w-24"],
              ["h-24"],
            )}
          >
            <AvatarLarge user={{ alias, avatar }} />
          </div>
        </div>
        <div className={clsx(["flex-grow"], ["flex"])}>
          <span className={clsx()}>
            <span>{displayName}</span>
            <span>{LL.Format.Alias({ alias })}</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export const Header: React.VFC<{
  className?: string;
  user: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };
}> = ({ user, ...props }) => {
  return <View {...user} {...props} />;
};
