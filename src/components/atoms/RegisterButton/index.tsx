import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";
import { useOpenRegisterUserModal } from "~/modals/RegisterUser";

export const Component: React.VFC<{ className?: string; onClick(): void; }> = ({ className, onClick }) => {
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

export const RegisterButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const opener = useOpenRegisterUserModal();

  return <Component {...props} onClick={opener} />;
};
