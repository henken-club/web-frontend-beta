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
      className={clsx(
        className,
        [["px-6"], ["py-4"]],
        [["inline-flex"], ["flex-col"], ["items-center"]],
        ["bg-gray-100"],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["flex", ["flex-row"], ["items-center"]],
        )}
      >
        <div className={clsx([["w-12"], ["h-12"]])}>
          {user === undefined &&
            (
              <div
                className={clsx(
                  ["w-full", "h-full"],
                  ["flex", ["items-center"], ["justify-center"]],
                  ["bg-gray-400"],
                  ["rounded-full"],
                )}
              >
                <IconLoading className={clsx([["text-2xl"], ["text-white"]])} />
              </div>
            )}
          {user === null &&
            (
              <div
                className={clsx(
                  ["w-full", "h-full"],
                  ["flex", ["items-center"], ["justify-center"]],
                  ["bg-gray-400"],
                  ["rounded-full"],
                )}
              >
                <IconUnknownUser className={clsx([["text-2xl"], ["text-white"]])} />
              </div>
            )}
          {user &&
            <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />}
        </div>
        {user && (
          <>
            <span className={clsx(["ml-4"], ["flex", "flex-col"])}>
              <span className={clsx(["text-gray-900"], ["text-sm"], ["select-all"])}>
                {user.displayName}
              </span>
              <span className={clsx(["text-gray-500"], ["mt-0.5"], ["text-xs"], ["select-all"])}>
                {LL.Format.Alias({ alias: user.alias })}
              </span>
            </span>
          </>
        )}
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
