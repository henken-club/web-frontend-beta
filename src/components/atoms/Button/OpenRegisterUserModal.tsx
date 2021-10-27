import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";
import { useOpenRegisterUserModal } from "~/modals/RegisterUser";

export const View: React.VFC<{ className?: string; onClick(): void; }> = ({ className, onClick }) => {
  const { LL } = useTranslation();
  return (
    <button
      className={clsx(className)}
      type="button"
      onClick={() => onClick()}
      onKeyPress={() => onClick()}
    >
      {LL.RegisterUser()}
    </button>
  );
};

export const Button: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const opener = useOpenRegisterUserModal();

  return <View {...props} onClick={opener} />;
};
