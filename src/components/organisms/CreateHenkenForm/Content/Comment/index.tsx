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
    <div className={clsx(className)}>
      <label>
        <span className={clsx(["text-sm"])}>{LL.CreateHenkenForm.Content.CommentBox.Label()}</span>
        <textarea
          autoComplete="off"
          aria-label={LL.CreateHenkenForm.Content.CommentBox.aria.CommentInput()}
          onChange={(event) => onUpdateChange(event.currentTarget.value)}
          rows={4}
          disabled={formDisabled}
          className={clsx(
            ["w-full"],
            [["px-2"], ["py-1"]],
            ["mt-1"],
            ["border"],
            [["text-base"]],
            ["resize-none"],
          )}
        />
      </label>
    </div>
  );
};

export const Comment: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { setComment, formDisabled } = useContext(CreateHenkenFormContext);

  return <Component {...props} formDisabled={formDisabled} onUpdateChange={(comment) => setComment(comment)} />;
};
