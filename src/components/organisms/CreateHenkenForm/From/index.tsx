import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { AvatarLarge } from "~/components/atoms/Avatar";
import { IconLoading, IconUnknownUser } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    user: undefined | null | { id: string; alias: string; displayName: string; avatar: string; };
  }
> = ({ className, user, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(className, [
        ["px-4"],
        ["py-4"],
      ], [
        ["inline-flex"],
        ["flex-col"],
        ["items-center"],
      ])}
    >
      <div className={clsx([["w-16"], ["h-16"]])}>
        {user === undefined &&
          (
            <div
              className={clsx(
                ["w-full", "h-full"],
                ["flex", ["items-center"], ["justify-center"]],
                ["bg-blue-400"],
                ["rounded-full"],
              )}
            >
              <IconLoading className={clsx([["text-4xl"], ["text-blue-300"]])} />
            </div>
          )}
        {user === null &&
          (
            <div
              className={clsx(
                ["w-full", "h-full"],
                ["flex", ["items-center"], ["justify-center"]],
                ["bg-blue-400"],
                ["rounded-full"],
              )}
            >
              <IconUnknownUser className={clsx([["text-4xl"], ["text-blue-300"]])} />
            </div>
          )}
        {user &&
          <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />}
      </div>
    </div>
  );
};

export const From: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { from } = useContext(CreateHenkenFormContext);

  return (
    <Component
      {...props}
      user={from}
    />
  );
};
