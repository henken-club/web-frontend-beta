import clsx from "clsx";
import React from "react";

import { PopupDivLeft } from "./Popup";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  comment: string;
}> = ({ className, comment }) => {
  const { LL } = useTranslation();
  return (
    <PopupDivLeft
      className={clsx(
        className,
        ["bg-green-100"],
        [["px-4"], ["py-2"]],
        ["rounded-tr-lg", "rounded-b-lg"],
        ["inline-flex", ["flex-col"]],
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
        {LL.HenkenPage.Header.HenkenComment()}
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
        {comment === "" && LL.HenkenPage.Header.NoComment()}
      </p>
    </PopupDivLeft>
  );
};

export const CommentFrom: React.VFC<{
  className?: string;
  comment: string;
}> = ({ ...props }) => {
  return <View {...props} />;
};
