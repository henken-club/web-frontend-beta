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
        [
          ["px-2", "sm:px-8"],
          ["py-2", "sm:py-4"],
        ],
        ["flex"],
      )}
    >
      <div
        className={clsx(
          ["flex-shrink-0"],
          ["w-16", "sm:w-24"],
          ["h-16", "sm:h-24"],
        )}
      >
        <AvatarLarge user={{ alias, avatar }} />
      </div>
      <div className={clsx(["flex-grow"], ["flex"])}>
        <span className={clsx()}>
          <span>{displayName}</span>
          <span>{LL.Format.Alias({ alias })}</span>
        </span>
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
