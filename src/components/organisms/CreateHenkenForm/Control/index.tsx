import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{
  className?: string;
  onCreateHenken(): void;
  created: boolean;
}> = (
  { className, onCreateHenken, created, ...props },
) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["px-6"], ["py-4"]],
        [["inline-flex"], ["flex-row"], ["items-center"], ["flex-row-reverse"]],
        ["bg-gray-50"],
      )}
    >
      <button
        className={clsx(
          [["px-2"], ["py-1"]],
          ["rounded-md"],
          ["bg-blue-400"],
          ["text-white"],
        )}
        type="button"
        onClick={() => onCreateHenken()}
        onKeyPress={() => onCreateHenken()}
        disabled={created}
      >
        {LL.Button.CreateHenken()}
      </button>
    </div>
  );
};

export const Control: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { createHenken, created } = useContext(CreateHenkenFormContext);

  return <Component {...props} onCreateHenken={() => createHenken()} created={created} />;
};
