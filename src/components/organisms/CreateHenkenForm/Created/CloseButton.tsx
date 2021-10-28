import clsx from "clsx";
import React from "react";

import { SkeltonTemplate } from "~/components/atoms/Button/Template";
import { IconJumpPage } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";
import { useCloseCreateHenkenModal } from "~/modals/CreateHenken";

export const CloseButton = () => {
  const closeForm = useCloseCreateHenkenModal();
  const { LL } = useTranslation();

  return (
    <SkeltonTemplate
      onClick={() => {
        closeForm();
      }}
      icon={({ className }) => <IconJumpPage className={clsx(className)} />}
      text={({ className }) => (
        <span className={clsx(className)}>
          {LL.CreateHenkenForm.Created.Close()}
        </span>
      )}
    />
  );
};
