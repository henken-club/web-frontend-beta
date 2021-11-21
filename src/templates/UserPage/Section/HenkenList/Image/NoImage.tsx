import clsx from "clsx";
import React from "react";

import { IconNoImage } from "~/components/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const NoImage: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["w-full"],
        ["h-full"],
        [["px-2"], ["py-4", "sm:py-4"]],
        ["flex", ["flex-col"], ["items-center"], ["justify-center"]],
        ["bg-gray-400"],
        ["border", ["border-gray-500"]],
        ["select-none"],
      )}
    >
      <IconNoImage
        className={clsx(["text-white"], ["text-lg"])}
      />
      <span
        className={clsx(["hidden", "sm:block"], ["mt-2"], ["text-xs"], ["text-white"])}
      >
        {LL.NoImage()}
      </span>
    </div>
  );
};
