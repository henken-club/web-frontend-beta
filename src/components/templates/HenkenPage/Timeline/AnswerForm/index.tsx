import clsx from "clsx";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useTranslation } from "~/i18n/useTranslation";

export type FormValue = {
  comment: string;
  answerType: "right" | "wrong";
};

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

export const AnswerForm: React.VFC<{ className?: string; }> = ({ className, ...props }) => {
  const { LL } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValue>({ defaultValues: { answerType: "right" } });
  const { answerType } = watch();
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col"]],
        ["overflow-hidden"],
        ["rounded-md"],
        [["border"], ["border-gray-400"]],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["flex", ["items-center"]],
          ["px-4", "md:px-6"],
          ["py-2"],
          ["bg-gray-100"],
        )}
      >
        <span
          className={clsx(
            ["flex-grow"],
            [["text-base"], ["text-gray-800"], ["font-bold"]],
          )}
        >
          {LL.HenkenPage.Timeline.AnswerForm.Title()}
        </span>
      </div>
      <form
        className={clsx(
          ["px-4", "md:px-6"],
          ["py-4"],
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={clsx(["w-full"], ["flex", ["flex-col"]])}>
          <span className={clsx(["text-sm"])}>
            {LL.HenkenPage.Timeline.AnswerForm.Comment.Label()}
          </span>
          <textarea
            className={clsx(
              ["mt-2"],
              ["w-full"],
              ["px-2"],
              ["py-1"],
              ["border", ["border-gray-300"]],
              [["text-sm"]],
              ["resize-none"],
              ["overflow-y-scroll"],
            )}
            {...register("comment")}
            autoComplete="off"
            rows={4}
            aria-label={LL.HenkenPage.Timeline.AnswerForm.Comment.Label()}
            placeholder={LL.HenkenPage.Timeline.AnswerForm.Comment.PlaceHolder()}
          />
        </label>
        <div className={clsx(["mt-4"], ["flex", ["justify-between"], ["items-center"]])}>
          <div
            className={clsx(
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
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
