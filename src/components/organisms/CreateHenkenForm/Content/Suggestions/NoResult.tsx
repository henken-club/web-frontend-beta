import clsx from "clsx";
import React from "react";

import { IconNoSuggestion } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const NoResult: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(className, [["px-6"], ["py-4"]], ["flex", ["flex-col"], ["items-center"]])}
    >
      <IconNoSuggestion
        className={clsx([["text-2xl"], ["text-blue-300"]])}
      />
      <span className={clsx(["mt-4"], ["text-xs"])}>{LL.CreateHenkenForm.Content.SearchBox.NoResult()}</span>
    </div>
  );
};
