import clsx from "clsx";
import React from "react";

import { IconRightAnswer, IconWrongAnswer } from "../Icon";

import { useTranslation } from "~/i18n/useTranslation";

export const Template: React.VFC<
  { className?: string; Icon: React.VFC<{ className?: string; }>; Text: React.VFC<{ className?: string; }>; }
> = (
  { className, Icon, Text },
) => {
  return (
    <span
      className={clsx(
        className,
        ["inline-flex", ["items-center"]],
        ["rounded-lg"],
        ["px-2"],
        ["py-0.5"],
      )}
    >
      <Icon className={clsx(["text-sm"])} />
      <Text className={clsx(["ml-1"], ["text-base"], ["whitespace-nowrap"])} />
    </span>
  );
};

export const Right: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(className, ["bg-green-400"])}
      Icon={({ className }) => <IconRightAnswer className={clsx(className, ["text-white"])} />}
      Text={({ className }) => <span className={clsx(className, ["text-white"])}>{LL.AnswerType.Right()}</span>}
    />
  );
};

export const Wrong: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(className, ["bg-gray-400"])}
      Icon={({ className }) => <IconWrongAnswer className={clsx(className, ["text-white"])} />}
      Text={({ className }) => <span className={clsx(className, ["text-white"])}>{LL.AnswerType.Wrong()}</span>}
    />
  );
};
