import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { SearchUser } from "./SearchUser";

import { AvatarLarge } from "~/components/atoms/Avatar";
import { IconUnknownUser } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    user: null | { id: string; alias: string; displayName: string; avatar: string; };
  }
> = ({ className, user, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["px-4"], ["py-4"]],
        [["inline-flex"], ["flex-col"]],
        ["bg-red-50"],
        ["border", "border-red-400"],
      )}
    >
      <div
        className={clsx(
          ["flex-grow"],
          ["flex", ["flex-row"], ["items-center"]],
        )}
      >
        {user && (
          <>
            <div className={clsx([["w-12"], ["h-12"]])}>
              <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />
            </div>
            <div className={clsx(["flex-grow"])}>
              <span className={clsx(["ml-4"], ["flex", "flex-col"])}>
                <span className={clsx(["text-gray-900"], ["text-sm"], ["select-all"])}>
                  {user.displayName}
                </span>
                <span className={clsx(["text-gray-500"], ["mt-0.5"], ["text-xs"], ["select-all"])}>
                  {LL.Format.Alias({ alias: user.alias })}
                </span>
              </span>
            </div>
          </>
        )}
        {!user && (
          <div className={clsx([["w-12"], ["h-12"]])}>
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
          </div>
        )}
      </div>
      <SearchUser className={clsx(["w-full"], ["mt-4"])} />
    </div>
  );
};

export const To: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { to } = useContext(CreateHenkenFormContext);

  return <Component user={to} {...props} />;
};
