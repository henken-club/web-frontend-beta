import clsx from "clsx";
import React from "react";

import { ViewTemplate } from "./Template";

import { IconHenkenUserTo } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const UserToView: React.VFC<
  { className?: string; user: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <ViewTemplate
      className={clsx(className, [
        ["bg-henken-to-pale"],
      ])}
      Icon={({ className }) => <IconHenkenUserTo className={clsx(className, ["text-henken-to-normal"])} />}
      Label={({ className }) => <span className={clsx(className)}>{LL.HenkenPage.Timeline.UserTo()}</span>}
      {...props}
    />
  );
};

export const UserTo: React.VFC<
  { className?: string; user: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ user, ...props }) => {
  return <UserToView user={user} {...props} />;
};
