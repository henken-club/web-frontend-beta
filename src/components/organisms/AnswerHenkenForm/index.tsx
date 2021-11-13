import clsx from "clsx";
import React from "react";

import { IconAnswerHenken } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{ className?: string; }> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["relative"],
        ["max-w-screen-sm"],
        ["overflow-hidden"],
        [["rounded-xl"], ["shadow-xl"]],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["bg-gray-700"],
          [["px-2", "sm:px-4"], ["py-2", "sm:py-4"]],
          ["flex", ["items-center"]],
        )}
      >
        <IconAnswerHenken className={clsx(["text-2xl"], ["text-white"])} />
        <p className={clsx(["text-xl"], ["text-white"], ["ml-2"])}>{LL.AnswerHenkenForm.Title()}</p>
      </div>
    </div>
  );
};

export const AnswerHenkenForm: React.VFC<{ className?: string; initialAnswerId?: string; }> = ({ className }) => {
  return <View className={clsx(className)} />;
};
