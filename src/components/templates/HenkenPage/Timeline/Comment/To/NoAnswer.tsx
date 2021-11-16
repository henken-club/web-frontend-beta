import clsx from "clsx";
import React from "react";

import { Template } from "../Template";

import { useTranslation } from "~/i18n/useTranslation";

export const NoAnswerView: React.VFC<
  {
    className?: string;
    user: { id: string; alias: string; displayName: string; avatar: string; };
    isViewer: boolean;
  }
> = ({ className, user, isViewer }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(
        className,
        ["border-gray-400"],
      )}
      user={user}
      isViewer={isViewer}
      HeaderWrap={({ className, ...props }) => (
        <div
          className={clsx(className, ["bg-gray-100"])}
          {...props}
        />
      )}
      Body={({ className }) => (
        <div className={clsx(className, ["bg-gray-200"])}>
          <p
            className={clsx(
              ["text-sm"],
              ["font-bold"],
              ["text-gray-400"],
              ["select-none"],
            )}
          >
            {LL.HenkenPage.Timeline.NoAnswer()}
          </p>
        </div>
      )}
    />
  );
};
