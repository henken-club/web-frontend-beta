import clsx from "clsx";
import React from "react";

import { AvatarLarge } from "~/components/Avatar";
import { LinkUser } from "~/components/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const ViewTemplate: React.VFC<
  {
    className?: string;
    isViewer: boolean;
    Icon: React.VFC<{ className?: string; }>;
    Label: React.VFC<{ className?: string; }>;
    user: { id: string; alias: string; displayName: string; avatar: string; };
  }
> = ({ className, Icon, Label, user, isViewer }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["px-4", "md:px-2"],
        ["py-2"],
        [["inline-flex"], ["flex-col"]],
      )}
    >
      <div
        className={clsx(
          [["inline-flex"], ["flex-row"], ["items-center"]],
        )}
      >
        <Icon className={clsx(["text-xl", "sm:text-2xl"])} />
        <Label className={clsx(["ml-2"], ["text-xs", "sm:text-sm"])} />
        {isViewer && (
          <span
            className={clsx(
              ["ml-4"],
              ["inline-block"],
              ["px-0.5", "sm:px-1"],
              ["sm:py-0.5"],
              ["text-xs"],
              ["text-gray-500"],
              ["border", ["border-gray-500"]],
              ["rounded-sm"],
            )}
          >
            {LL.HenkenPage.IsYou()}
          </span>
        )}
      </div>
      <div
        className={clsx(
          ["mt-2"],
          [["inline-flex"], ["flex-row"], ["items-center"]],
        )}
      >
        <LinkUser alias={user.alias}>
          <a
            className={clsx([
              ["w-8", "sm:w-8"],
              ["h-8", "sm:h-8"],
            ])}
          >
            <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />
          </a>
        </LinkUser>
        <div
          className={clsx(
            ["flex-grow"],
            ["flex", "flex-col"],
            ["ml-2"],
          )}
        >
          <span className={clsx(["text-gray-900"], ["text-xs", "sm:text-sm"], ["select-all"])}>
            {user.displayName}
          </span>
          <span className={clsx(["text-gray-500"], ["sm:mt-0.5"], ["text-xs"], ["select-all"])}>
            {LL.Format.Alias({ alias: user.alias })}
          </span>
        </div>
      </div>
    </div>
  );
};
