import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({ className, title }) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(className, ["inline-flex"], ["bg-blue-200"])}>
      {title}
    </div>
  );
};

export const BookSeries = View;
