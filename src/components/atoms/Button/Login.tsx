import clsx from "clsx";
import React from "react";

import { useAuth } from "~/auth/useAuth";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{ className?: string; onClick(): void; }> = ({ className, onClick }) => {
  const { LL } = useTranslation();
  return (
    <button
      className={clsx(className)}
      type="button"
      onClick={() => onClick()}
      onKeyPress={() => onClick()}
    >
      {LL.Login()}
    </button>
  );
};

export const LoginButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { loginWithRedirect } = useAuth();

  return <Component {...props} onClick={loginWithRedirect} />;
};
