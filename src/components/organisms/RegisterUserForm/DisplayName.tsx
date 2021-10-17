import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useClient } from "urql";

import { FormValue } from "./FormValue";

import { useTranslation } from "~/i18n/useTranslation";

export const DisplayName: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  const { register } = useFormContext<FormValue>();
  const client = useClient();

  return (
    <label
      htmlFor="alias"
      className={clsx(className, ["inline-flex", ["flex-col"]])}
    >
      <span className={clsx(["text-sm"])}>
        {LL.RegisterUserForm.DisplayName.Label()}
      </span>
      <input
        {...register("displayName")}
        name="alias"
        type="text"
        autoComplete="off"
        className={clsx(["mt-2"])}
      />
    </label>
  );
};
