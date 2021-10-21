import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();

  return (
    <nav className={clsx(className, ["h-16"], ["bg-blue-50"], ["shadow-lg"])}>
      <div
        className={clsx(
          ["h-full"],
          [["container"], ["mx-auto"]],
          ["px-4"],
          [["flex"], ["items-center"]],
        )}
      />
    </nav>
  );
};

export const GlobalNav: React.VFC<{ className?: string; }> = ({ ...props }) => {
  return <View {...props} />;
};
