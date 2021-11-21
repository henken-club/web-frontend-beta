import clsx from "clsx";
import React from "react";

import { NormalTemplate } from "./Template";

import { useAuth } from "~/auth/useAuth";
import { IconLogin } from "~/components/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{ className?: string; onClick(): void; }> = ({ ...props }) => {
  const { LL } = useTranslation();
  return (
    <NormalTemplate
      {...props}
      icon={({ className }) => <IconLogin className={clsx(className, [])} />}
      text={({ className }) => <span className={clsx(className, [])}>{LL.Login()}</span>}
    />
  );
};

export const LoginButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { loginWithRedirect } = useAuth();

  return <View {...props} onClick={loginWithRedirect} />;
};
