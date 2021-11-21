import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { useHenkenPageAnswerHenkenMutation } from "./AnswerHenken.codegen";
import { Comment } from "./Comment";
import { convertType, FormValue } from "./form";
import { SubmitButton } from "./SubmitButton";
import { Switcher } from "./Switcher";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}> = ({ className, onSubmit }) => {
  const { LL } = useTranslation();

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
      <div className={clsx(["w-full"], ["flex", ["items-center"]], ["px-4", "md:px-6"], ["py-2"], ["bg-gray-100"])}>
        <span className={clsx(["flex-grow"], [["text-base"], ["text-gray-800"], ["font-bold"]])}>
          {LL.HenkenPage.Timeline.AnswerForm.Title()}
        </span>
      </div>
      <form
        className={clsx(["px-4", "md:px-6"], ["py-4"])}
        onSubmit={onSubmit}
      >
        <Comment className={clsx(["w-full"], ["flex", ["flex-col"]])} />
        <div className={clsx(["mt-4"], ["flex", ["justify-between"], ["items-center"]])}>
          <Switcher
            className={clsx(
              ["flex"],
              ["rounded"],
              ["overflow-hidden"],
              ["border", ["border-gray-300"]],
              ["divide-x", ["divide-gray-300"]],
            )}
          />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export const AnswerForm: React.VFC<{ className?: string; henkenId: string; }> = ({ henkenId, ...props }) => {
  const router = useRouter();
  const methods = useForm<FormValue>({ defaultValues: { answerType: "right" } });
  const [, mutateAnswer] = useHenkenPageAnswerHenkenMutation();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    await mutateAnswer({ henkenId, comment: data.comment, type: convertType(data.answerType) });
    await router.reload();
  };

  return (
    <FormProvider {...methods}>
      <View onSubmit={methods.handleSubmit(onSubmit)} {...props} />
    </FormProvider>
  );
};
