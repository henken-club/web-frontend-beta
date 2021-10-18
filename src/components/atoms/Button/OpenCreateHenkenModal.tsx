import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";
import { useOpenCreateHenkenModal } from "~/modals/CreateHenken";

export const Component: React.VFC<{ className?: string; onClick(): void; }> = ({ className, onClick }) => {
  const { LL } = useTranslation();
  return (
    <button
      className={clsx(className)}
      type="button"
      onClick={() => onClick()}
      onKeyPress={() => onClick()}
    >
      {LL.Button.CreateHenken()}
    </button>
  );
};

export const OpenCreateHenkenModalButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const opener = useOpenCreateHenkenModal();

  return <Component {...props} onClick={opener} />;
};
