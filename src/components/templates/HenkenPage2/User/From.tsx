import clsx from "clsx";
import React from "react";

import { ViewTemplate } from "./Template";

import { IconHenkenUserFrom } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const UserFromView: React.VFC<
  { className?: string; user: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <ViewTemplate
      className={clsx(className, [
        ["bg-henken-from-pale"],
      ])}
      Icon={({ className }) => <IconHenkenUserFrom className={clsx(className, ["text-henken-from-normal"])} />}
      Label={({ className }) => <span className={clsx(className)}>{LL.HenkenPage.Timeline.UserFrom()}</span>}
      {...props}
    />
  );
};

export const UserFrom: React.VFC<
  { className?: string; user: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ user, ...props }) => {
  return <UserFromView user={user} {...props} />;
};
