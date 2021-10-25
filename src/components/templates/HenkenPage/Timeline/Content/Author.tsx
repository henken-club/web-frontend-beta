import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  name: string;
}> = ({ className, name }) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(className, ["inline-flex"], ["bg-blue-200"])}>
      {name}
    </div>
  );
};

export const Author = View;
