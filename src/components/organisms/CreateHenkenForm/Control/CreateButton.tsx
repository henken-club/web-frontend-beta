import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { NormalButtonTemplate } from "~/components/atoms/Button";
import { IconCreateHenken } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  onClick(): void;
  disabled: boolean;
}> = (
  { className, ...props },
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

  return <View {...props} onClick={() => createHenken()} disabled={created} />;
};
