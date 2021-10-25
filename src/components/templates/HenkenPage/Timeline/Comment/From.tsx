import clsx from "clsx";
import React from "react";

import { PopupDivLeft } from "./Popup";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { LinkUser } from "~/components/atoms/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  comment: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, comment, user }) => {
  const { LL } = useTranslation();
  return (
    <PopupDivLeft
      className={clsx(
        className,
        ["bg-green-100"],
        [["px-4"], ["py-2"]],
        ["rounded-tr-lg", "rounded-b-lg"],
        ["inline-flex", ["flex-row"]],
      )}
    >
      <div className={clsx(["order-1"], ["flex"])}>
        <LinkUser alias={user.alias}>
          <a className={clsx([["w-8", "md:w-12"], ["h-8", "md:h-12"]])}>
            <AvatarSmall user={{ alias: user.alias, avatar: user.avatar }} />
          </a>
        </LinkUser>
      </div>
      <div
        className={clsx(
          ["order-2"],
          ["ml-2", "sm:ml-4"],
          ["flex-grow"],
          ["flex", ["flex-col"]],
        )}
      >
        <span
          className={clsx(
            ["select-none"],
            ["text-xs"],
            ["text-gray-600"],
            ["font-bold"],
          )}
        >
          {LL.HenkenPage.Timeline.HenkenComment({ displayName: user.displayName })}
        </span>
        <p
          className={clsx(
            ["mt-1"],
            comment === ""
              ? [["text-gray-500"], ["font-bold"], ["select-none"]]
              : [],
          )}
        >
          {comment !== "" && comment}
          {comment === "" && LL.HenkenPage.Timeline.NoComment()}
        </p>
      </div>
    </PopupDivLeft>
  );
};

export const CommentFrom: React.VFC<{
  className?: string;
  comment: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ ...props }) => {
  return <View {...props} />;
};
