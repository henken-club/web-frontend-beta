import clsx from "clsx";
import React from "react";

import { PopupDivLeft } from "./Popup";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { LinkUser } from "~/components/atoms/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<
  | {
    className?: string;
    user: { id: string; alias: string; displayName: string; avatar: string; };
    comment: string;
    type: "right" | "wrong";
  }
  | {
    className?: string;
    user: { id: string; alias: string; displayName: string; avatar: string; };
  }
> = ({ className, user, ...props }) => {
  const { LL } = useTranslation();
  return (
    <PopupDivLeft
      className={clsx(
        className,
        [{
          "bg-red-100": "type" in props && props.type === "right",
          "bg-gray-100": "type" in props && props.type === "wrong",
          "bg-gray-400": !("type" in props),
        }],
        [["px-4"], ["py-2", "md:py-4"]],
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
          {LL.HenkenPage.Timeline.AnswerComment({ displayName: user.displayName })}
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
              {props.type === "right" && LL.HenkenPage.Timeline.AnswerType.Right()}
              {props.type === "wrong" && LL.HenkenPage.Timeline.AnswerType.Wrong()}
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
            {props.comment === "" && LL.HenkenPage.Timeline.NoComment()}
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
            {LL.HenkenPage.Timeline.NoAnswer()}
          </p>
        )}
      </div>
    </PopupDivLeft>
  );
};

export const CommentTo: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
  answer: { comment: string; type: "right" | "wrong"; } | null;
}> = ({ answer, ...props }) => {
  return <View {...answer} {...props} />;
};
