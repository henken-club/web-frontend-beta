import clsx from "clsx";
import React from "react";

import { Template } from "../Template";

import { RightAnswerMediumBadge, WrongAnswerMediumBadge } from "~/components/atoms/AnswerBadge";
import { useTranslation } from "~/i18n/useTranslation";

export const WithAnswerView: React.VFC<
  {
    className?: string;
    user: { id: string; alias: string; displayName: string; avatar: string; };
    isViewer: boolean;
    comment: string;
    type: "right" | "wrong";
  }
> = ({ className, user, comment, type, isViewer }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(
        className,
        ["border-henken-to-normal"],
      )}
      user={user}
      isViewer={isViewer}
      HeaderWrap={({ className, ...props }) => <div className={clsx(className, ["bg-henken-to-light"])} {...props} />}
      Body={({ className }) => (
        <div className={clsx(className)}>
          {comment !== "" &&
            <p className={clsx(["text-sm"])}>{comment}</p>}
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
          <div className={clsx(["w-full"], ["mt-4"])}>
            {type === "right" && <RightAnswerMediumBadge />}
            {type === "wrong" && <WrongAnswerMediumBadge />}
          </div>
        </div>
      )}
    />
  );
};
