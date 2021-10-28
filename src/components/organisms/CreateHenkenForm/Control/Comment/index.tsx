import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../../context";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{
  className?: string;
  formDisabled: boolean;
  onUpdateChange(value: string): void;
}> = ({ className, onUpdateChange, formDisabled }) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(className, ["inline-flex", ["flex-col"]])}>
      <label className={clsx(["w-full"], ["flex", ["flex-col"]])}>
        <span className={clsx(["text-sm"])}>
          {LL.CreateHenkenForm.Control.Comment.Label()}
        </span>
        <span className={clsx(["text-xs"], ["text-gray-700"])}>
          {LL.CreateHenkenForm.Control.Comment.Description()}
        </span>
        <textarea
          autoComplete="off"
          aria-label={LL.CreateHenkenForm.Control.Comment.Label()}
          onChange={(event) => onUpdateChange(event.currentTarget.value)}
          rows={4}
          disabled={formDisabled}
          className={clsx(
            ["w-full"],
            [["px-2"], ["py-1"]],
            ["mt-1"],
            ["border"],
            [["text-sm"]],
            ["resize-none"],
            ["overflow-y-scroll"],
          )}
        />
      </label>
    </div>
  );
};

export const Comment: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { setComment, created } = useContext(CreateHenkenFormContext);

  return <Component {...props} formDisabled={Boolean(created)} onUpdateChange={(comment) => setComment(comment)} />;
};
