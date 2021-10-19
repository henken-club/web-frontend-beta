import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { SearchUser } from "./SearchUser";

import { AvatarLarge } from "~/components/atoms/Avatar";
import { IconUnknownUser } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  { className?: string; user: null | { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ className, user, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["px-6"], ["py-4"]],
        [["inline-flex"], ["flex-row"], ["items-center"]],
        ["bg-gray-100"],
      )}
    >
      <div
        className={clsx(
          ["flex-grow"],
          ["flex", ["flex-row"], ["items-center"]],
        )}
      >
        <div className={clsx([["w-8"], ["h-8"]])}>
          {user &&
            <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />}
          {!user &&
            (
              <div
                className={clsx(
                  ["w-full", "h-full"],
                  ["flex", ["items-center"], ["justify-center"]],
                  ["bg-blue-400"],
                  ["rounded-full"],
                )}
              >
                <IconUnknownUser className={clsx([["text-2xl"], ["text-blue-300"]])} />
              </div>
            )}
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
      <SearchUser className={clsx(["w-64"], ["ml-2"])} />
    </div>
  );
};

export const To: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { to } = useContext(CreateHenkenFormContext);

  return <Component user={to} {...props} />;
};
