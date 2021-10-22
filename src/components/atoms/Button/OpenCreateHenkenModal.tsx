import clsx from "clsx";
import React from "react";

import { IconCreateHenken } from "../Icon";

import { useTranslation } from "~/i18n/useTranslation";
import { useOpenCreateHenkenModal } from "~/modals/CreateHenken";

export const Component: React.VFC<{ className?: string; onClick(): void; }> = ({ className, onClick }) => {
  const { LL } = useTranslation();
  return (
    <button
      type="button"
      onClick={() => onClick()}
      onKeyPress={() => onClick()}
      className={clsx(
        className,
        [["px-3"], ["py-1.5"]],
        ["inline-flex", ["items-center"]],
        ["bg-blue-500"],
        [["text-white"]],
        ["rounded-md"],
      )}
    >
      <IconCreateHenken
        className={clsx(
          [["text-base"]],
        )}
      />
      <span
        className={clsx(
          ["ml-1"],
          [["text-base"]],
        )}
      >
        {LL.Button.CreateHenken()}
      </span>
    </button>
  );
};

export const OpenCreateHenkenModalButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const opener = useOpenCreateHenkenModal();

  return <Component {...props} onClick={opener} />;
};
