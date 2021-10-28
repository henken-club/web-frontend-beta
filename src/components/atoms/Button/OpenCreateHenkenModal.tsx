import clsx from "clsx";
import React from "react";

import { NormalTemplate } from "./Template";

import { IconCreateHenken } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";
import { useOpenCreateHenkenModal } from "~/modals/CreateHenken";

export const View: React.VFC<{ className?: string; onClick(): void; }> = ({ ...props }) => {
  const { LL } = useTranslation();
  return (
    <NormalTemplate
      {...props}
      icon={({ className }) => <IconCreateHenken className={clsx(className, [])} />}
      text={({ className }) => <span className={clsx(className, [])}>{LL.Button.CreateHenken()}</span>}
    />
  );
};

export const OpenCreateHenkenModalButton: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const opener = useOpenCreateHenkenModal();

  return <View {...props} onClick={opener} />;
};
