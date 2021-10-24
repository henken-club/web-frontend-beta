import clsx from "clsx";
import React from "react";

import { PopupDivRight } from "./Popup";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<
  | { className?: string; comment: string; type: "right" | "wrong"; }
  | { className?: string; }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <PopupDivRight
      className={clsx(
        className,
        [{
          "bg-red-100": "type" in props && props.type === "right",
          "bg-gray-100": "type" in props && props.type === "wrong",
          "bg-gray-400": !("type" in props),
        }],
        [["px-4"], ["py-2"]],
        ["rounded-tl-lg", "rounded-b-lg"],
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
        {LL.HenkenPage.Header.AnswerComment()}
      </span>

      {"type" in props &&
        (
          <span
            className={clsx(
              ["mt-1"],
              ["text-sm"],
              ["py-0.5"],
              ["select-none"],
              ["text-gray-700"],
              props.type === "right"
                ? [
                  ["text-white"],
                ]
                : [],
              props.type === "wrong"
                ? [
                  ["text-gray-700"],
                ]
                : [],
            )}
          >
            {props.type === "right" && LL.HenkenPage.Header.AnswerType.Right()}
            {props.type === "wrong" && LL.HenkenPage.Header.AnswerType.Wrong()}
          </span>
        )}

      {"comment" in props && (
        <p
          className={clsx(
            ["mt-1"],
            props.comment === ""
              ? [["text-gray-500"], ["font-bold"], ["select-none"]]
              : [],
          )}
        >
          {props.comment === "" && LL.HenkenPage.Header.NoComment()}
          {props.comment !== "" && props.comment}
        </p>
      )}

      {!("comment" in props) && (
        <p
          className={clsx(
            ["mt-1"],
            ["text-gray-700"],
            ["font-bold"],
            ["select-none"],
          )}
        >
          {LL.HenkenPage.Header.NoAnswer()}
        </p>
      )}
    </PopupDivRight>
  );
};

export const CommentTo: React.VFC<{
  className?: string;
  answer: { comment: string; type: "right" | "wrong"; } | null;
}> = ({ answer, ...props }) => {
  return <View {...answer} {...props} />;
};
