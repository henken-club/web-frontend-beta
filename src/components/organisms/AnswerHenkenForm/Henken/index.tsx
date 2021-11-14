import clsx from "clsx";
import React, { useContext } from "react";

import { AnswerHenkenFormContext } from "../context";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  { className?: string; }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["px-4"], ["py-4"]],
        [["inline-flex"], ["flex-col"]],
        [["rounded-md"]],
      )}
    />
  );
};

export const Henken: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { henken } = useContext(AnswerHenkenFormContext);

  return <Component {...props} />;
};
