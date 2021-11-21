import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { SkeltonTemplate } from "~/components/Button/Template";
import { IconJumpPage } from "~/components/Icon";
import { useTranslation } from "~/i18n/useTranslation";
import { useCloseCreateHenkenModal } from "~/modals/CreateHenken";

export const JumpButton = () => {
  const closeForm = useCloseCreateHenkenModal();
  const { LL } = useTranslation();
  const router = useRouter();
  const { created } = useContext(CreateHenkenFormContext);

  if (!created) {
    return <></>;
  }

  return (
    <SkeltonTemplate
      onClick={async () => {
        await router.push(`/henkens/${created.id}`);
        closeForm();
      }}
      icon={({ className }) => <IconJumpPage className={clsx(className)} />}
      text={({ className }) => (
        <span className={clsx(className)}>
          {LL.CreateHenkenForm.Created.Jump()}
        </span>
      )}
    />
  );
};
