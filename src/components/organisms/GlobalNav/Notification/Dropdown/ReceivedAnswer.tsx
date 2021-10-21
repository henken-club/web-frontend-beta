import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  id: string;
  comment: string;
  unread: boolean;
  createdAt: string;
  from: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ id, unread, comment, from }) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(["bg-white"], ["w-full"], ["inline-flex", ["items-center"]])}>
      <div className={clsx([["w-8"], ["h-8"]], ["flex-shrink-0"])}>
        <AvatarSmall user={{ alias: from.alias, avatar: from.avatar }} />
      </div>
      <div className={clsx(["ml-2"], ["overflow-x-hidden"], ["flex", "flex-col"])}>
        <p className={clsx("text-xs")}>
          {LL.Notifications.ReceivedAnswer.Label({ displayName: from.displayName })}
        </p>
        <p className={clsx(["mt-1"], ["truncate"], [["text-xs"], ["font-bold"], ["truncate"]])}>
          {LL.Format.CommentQuote({ comment })}
        </p>
      </div>
    </div>
  );
};

export const ReceivedAnswer: React.VFC<
  {
    notification: {
      id: string;
      unread: boolean;
      comment: string;
      createdAt: string;
      from: { id: string; alias: string; displayName: string; avatar: string; };
    };
  }
> = (
  { notification, ...props },
) => {
  return <View {...props} {...notification} />;
};
