import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";

import { FormValue } from "./form";

import { useTranslation } from "~/i18n/useTranslation";

export const Switcher: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();

  const { register, watch } = useFormContext<FormValue>();
  const { answerType } = watch();

  return (
    <div
      className={clsx(
        className,
        ["flex"],
        ["rounded"],
        ["overflow-hidden"],
        ["border", ["border-gray-300"]],
        ["divide-x", ["divide-gray-300"]],
      )}
    >
      <label
        className={clsx(
          { "bg-gray-200": answerType !== "right", "bg-answer-right-normal": answerType === "right" },
          { "text-gray-700": answerType !== "right", "text-white": answerType === "right" },
          ["px-2"],
          ["py-1"],
          ["flex", ["items-center"]],
        )}
      >
        <input
          {...register("answerType")}
          type="radio"
          value="right"
        />
        <span
          className={clsx(["ml-2"], ["text-sm"])}
        >
          {LL.AnswerType.Right()}
        </span>
      </label>
      <label
        className={clsx(
          "appearance-none",
          { "bg-gray-200": answerType !== "wrong", "bg-answer-wrong-normal": answerType === "wrong" },
          { "text-gray-700": answerType !== "wrong", "text-white": answerType === "wrong" },
          ["px-2"],
          ["py-1"],
          ["flex", ["items-center"]],
        )}
      >
        <input
          {...register("answerType")}
          type="radio"
          value="wrong"
        />
        <span
          className={clsx(
            ["ml-2"],
            ["text-sm"],
          )}
        >
          {LL.AnswerType.Wrong()}
        </span>
      </label>
    </div>
  );
};
