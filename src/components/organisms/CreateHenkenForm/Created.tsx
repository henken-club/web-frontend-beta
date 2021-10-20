import clsx from "clsx";
import React from "react";

import { IconCreateHenken } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";
import { useCloseCreateHenkenModal } from "~/modals/CreateHenken";

export const Component: React.VFC<{ className?: string; onClose(): void; }> = ({ className, onClose }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["bg-blue-700", "bg-opacity-75"],
        ["inline-flex", ["flex-col"], ["justify-center"], ["items-center"]],
      )}
    >
      <IconCreateHenken className={clsx(["text-white"], ["text-4xl"])} />
      <p className={clsx(["text-white"], ["text-lg"], ["mt-2"])}>
        {LL.CreateHenkenForm.Created.Title()}
      </p>
      <div className={clsx(["mt-4"], ["flex", "flex-row"], ["space-x-4"])}>
        <button
          type="button"
          className={clsx(
            [["px-4"], ["py-2"]],
            ["border", "border-white"],
            [["text-base"], ["text-white"]],
            ["rounded-md"],
          )}
          onClick={() => onClose()}
          onKeyPress={() => onClose()}
        >
          {LL.CreateHenkenForm.Created.Close()}
        </button>
      </div>
    </div>
  );
};

export const Created: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const closeForm = useCloseCreateHenkenModal();

  return (
    <Component
      {...props}
      onClose={() => {
        closeForm();
      }}
    />
  );
};
