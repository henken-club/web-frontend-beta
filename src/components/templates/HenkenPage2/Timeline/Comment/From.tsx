import clsx from "clsx";
import React from "react";

import { Template } from "./Template";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  comment: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, comment, user }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(className, ["border-henken-from-normal"])}
      user={user}
      HeaderWrap={({ className, ...props }) => <div className={clsx(className, ["bg-henken-from-light"])} {...props} />}
      Body={({ className }) => (
        <div className={clsx(className)}>
          {comment !== "" && <p className={clsx(["text-sm"])}>{comment}</p>}
          {comment === "" &&
            (
              <p
                className={clsx(
                  ["text-sm"],
                  ["font-bold"],
                  ["text-gray-400"],
                  ["select-none"],
                )}
              >
                {LL.HenkenPage.Timeline.NoComment()}
              </p>
            )}
        </div>
      )}
    />
  );
};

export const CommentFrom: React.VFC<{
  className?: string;
  comment: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ ...props }) => {
  return <View {...props} />;
};
