import clsx from "clsx";
import React from "react";

import { NormalTemplate } from "./Template";

import { IconRegisterUser } from "~/components/Icon";
import { useTranslation } from "~/i18n/useTranslation";
import { useOpenRegisterUserModal } from "~/modals/RegisterUser";

export const View: React.VFC<{ className?: string; onClick(): void; }> = ({ ...props }) => {
  const { LL } = useTranslation();
  return (
    <NormalTemplate
      {...props}
      icon={({ className }) => <IconRegisterUser className={clsx(className, [])} />}
      text={({ className }) => <span className={clsx(className, [])}>{LL.RegisterUser()}</span>}
    />
  );
};

export const OpenRegisterUserModalButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const opener = useOpenRegisterUserModal();

  return <View {...props} onClick={opener} />;
};
