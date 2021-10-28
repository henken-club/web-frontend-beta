import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { CloseButton } from "./CloseButton";
import { JumpButton } from "./JumpButton";

import { IconCreateHenken } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{ className?: string; }> = ({ className }) => {
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
        <JumpButton />
        <CloseButton />
      </div>
    </div>
  );
};

export const Created: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { created } = useContext(CreateHenkenFormContext);

  if (created) {
    return <Component {...props} />;
  }
  return <></>;
};
