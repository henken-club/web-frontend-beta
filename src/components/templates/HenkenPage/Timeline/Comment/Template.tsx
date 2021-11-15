import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { LinkUser } from "~/components/atoms/Link";

export const Template: React.VFC<
  {
    className?: string;
    user: { id: string; alias: string; displayName: string; avatar: string; };
    HeaderWrap: React.FC<{ className?: string; }>;
    Body: React.VFC<{ className?: string; }>;
  }
> = ({ className, user, HeaderWrap: Header, Body }) => (
  <div
    className={clsx(
      className,
      ["inline-flex", ["flex-col"]],
      ["overflow-hidden"],
      ["rounded-md"],
      ["border"],
    )}
  >
    <Header
      className={clsx(
        ["w-full"],
        ["flex", ["items-center"]],
        ["px-4", "md:px-6"],
        ["py-2"],
      )}
    >
      <div className={clsx(["flex"])}>
        <LinkUser alias={user.alias}>
          <a
            className={clsx([
              ["w-6", "md:w-6"],
              ["h-6", "md:h-6"],
            ])}
          >
            <AvatarSmall user={{ alias: user.alias, avatar: user.avatar }} />
          </a>
        </LinkUser>
      </div>
      <LinkUser alias={user.alias}>
        <a
          className={clsx(
            ["ml-2"],
            ["select-none"],
            ["text-xs"],
            ["text-gray-600"],
            ["font-bold"],
          )}
        >
          {user.displayName}
        </a>
      </LinkUser>
    </Header>
    <Body
      className={clsx(
        ["bg-white"],
        ["w-full"],
        ["px-4", "md:px-6"],
        ["py-4"],
      )}
    />
  </div>
);
