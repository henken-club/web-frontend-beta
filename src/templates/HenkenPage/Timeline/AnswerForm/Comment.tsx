import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";

import { FormValue } from "./form";

import { useTranslation } from "~/i18n/useTranslation";

export const Comment: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  const { register } = useFormContext<FormValue>();

  return (
    <label className={clsx(className, ["flex", ["flex-col"]])}>
      <span className={clsx(["text-sm"])}>
        {LL.HenkenPage.Timeline.AnswerForm.Comment.Label()}
      </span>
      <textarea
        {...register("comment")}
        className={clsx(
          ["mt-2"],
          ["w-full"],
          ["px-2"],
          ["py-1"],
          ["border", ["border-gray-300"]],
          ["text-sm"],
          ["resize-none"],
          ["overflow-y-scroll"],
        )}
        autoComplete="off"
        rows={4}
        aria-label={LL.HenkenPage.Timeline.AnswerForm.Comment.Label()}
        placeholder={LL.HenkenPage.Timeline.AnswerForm.Comment.PlaceHolder()}
      />
    </label>
  );
};
