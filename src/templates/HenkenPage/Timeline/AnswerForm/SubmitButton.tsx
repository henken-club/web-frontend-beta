import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";

export const SubmitButton: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <button
      type="submit"
      className={clsx(
        className,
        [["px-3"], ["py-1.5"]],
        ["inline-flex", ["items-center"]],
        ["bg-blue-500", ["disabled:bg-gray-400"]],
        ["text-white", ["disabled:text-gray-300"]],
        ["rounded-md"],
      )}
    >
      <span className={clsx([["text-base"]])}>
        {LL.HenkenPage.Timeline.AnswerForm.Submit()}
      </span>
    </button>
  );
};
