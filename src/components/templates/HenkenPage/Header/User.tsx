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
        ["flex", ["flex-col"], ["items-start", "md:items-center"]],
        ["px-2", "sm:px-4", "md:py-0"],
      )}
    >
      <div className={clsx(["flex", ["items-center"]])}>
        <Icon
          className={clsx(
            ["text-md", "sm:text-xl"],
          )}
        />
        <h2
          className={clsx(
            ["ml-2"],
            [
              ["text-white"],
              ["text-md", "sm:text-xl"],
            ],
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={clsx(
          ["mt-2", "md:mt-4"],
          ["flex-grow"],
          ["flex", ["flex-row", "md:flex-col"], ["items-center"]],
        )}
      >
        <LinkUser alias={user.alias}>
          <a
            className={clsx(
              [
                ["w-12", "md:w-16"],
                ["h-12", "md:h-16"],
              ],
            )}
          >
            <AvatarSmall user={{ alias: user.alias, avatar: user.avatar }} />
          </a>
        </LinkUser>
        <LinkUser alias={user.alias}>
          <a
            className={clsx(
              ["mt-0", "md:mt-2"],
              ["ml-2", "md:ml-0"],
              [["text-white"]],
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
}> = ({ ...props }) => {
  const { LL } = useTranslation();
  return (
    <Template
      {...props}
      icon={({ className }) => (
        <IconHenkenUserFrom
          className={clsx(className, ["text-green-100"])}
        />
      )}
      title={LL.HenkenPage.Header.UserFrom()}
    />
  );
};

export const To: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ ...props }) => {
  const { LL } = useTranslation();
  return (
    <Template
      {...props}
      icon={({ className }) => (
        <IconHenkenUserTo
          className={clsx(className, ["text-red-100"])}
        />
      )}
      title={LL.HenkenPage.Header.UserTo()}
    />
  );
};
