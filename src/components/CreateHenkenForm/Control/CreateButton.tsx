import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { NormalButtonTemplate } from "~/components/Button";
import { IconCreateHenken } from "~/components/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  onClick(): void;
  disabled: boolean;
  created: boolean;
}> = (
  { className, created, ...props },
) => {
  const { LL } = useTranslation();
  return (
    <NormalButtonTemplate
      {...props}
      className={clsx()}
      icon={({ className }) => <IconCreateHenken className={clsx(className)} />}
      text={({ className }) => <span className={clsx(className)}>{LL.CreateHenkenForm.Control.CreateHenken()}</span>}
    />
  );
};

export const CreateButton: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { createHenken, created } = useContext(CreateHenkenFormContext);

  if (createHenken) {
    return <View {...props} onClick={() => createHenken()} disabled={false} created={false} />;
  } else {
    return <View {...props} onClick={() => {}} disabled created={Boolean(created)} />;
  }
};
