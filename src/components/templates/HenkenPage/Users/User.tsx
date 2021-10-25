import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { IconHenkenUserFrom, IconHenkenUserTo } from "~/components/atoms/Icon";
import { LinkUser } from "~/components/atoms/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const Template: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
  icon: React.VFC<{ className?: string; }>;
  title: string;
}> = ({ className, user, icon: Icon, title }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col"]],
        [
          ["px-4", "sm:px-8", "lg:px-4", "xl:px-6"],
          ["py-4", "sm:py-4"],
        ],
      )}
    >
      <div className={clsx(["flex", ["items-center"]])}>
        <Icon
          className={clsx(
            ["text-md", "sm:text-xl"],
          )}
        />
        <span
          className={clsx(
            ["ml-2"],
            [
              ["text-gray-900"],
              ["text-md"],
            ],
          )}
        >
          {title}
        </span>
      </div>
      <div
        className={clsx(
          ["mt-2", "lg:mt-4", "xl:mt-4"],
          ["flex", ["flex-row"], ["items-center"]],
        )}
      >
        <LinkUser alias={user.alias}>
          <a
            className={clsx(
              [
                ["w-8", "md:w-12"],
                ["h-8", "md:h-12"],
              ],
            )}
          >
            <AvatarSmall user={{ alias: user.alias, avatar: user.avatar }} />
          </a>
        </LinkUser>
        <LinkUser alias={user.alias}>
          <a
            className={clsx(
              ["ml-4"],
              [
                ["text-gray-900"],
              ],
            )}
          >
            {user.displayName}
          </a>
        </LinkUser>
      </div>
    </div>
  );
};

export const From: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <Template
      {...props}
      className={clsx(className, ["bg-green-50"])}
      icon={({ className }) => (
        <IconHenkenUserFrom
          className={clsx(className, ["text-green-400"])}
        />
      )}
      title={LL.HenkenPage.Timeline.UserFrom()}
    />
  );
};

export const To: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <Template
      {...props}
      className={clsx(className, ["bg-red-50"])}
      icon={({ className }) => (
        <IconHenkenUserTo
          className={clsx(className, ["text-red-400"])}
        />
      )}
      title={LL.HenkenPage.Timeline.UserTo()}
    />
  );
};
