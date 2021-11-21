import clsx from "clsx";
import React from "react";

import { ViewTemplate } from "./Template";

import { useViewer } from "~/auth/useViewer";
import { IconHenkenUserFrom } from "~/components/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const UserFromView: React.VFC<
  {
    className?: string;
    user: { id: string; alias: string; displayName: string; avatar: string; };
    isViewer: boolean;
  }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <ViewTemplate
      className={clsx(className)}
      Icon={({ className }) => <IconHenkenUserFrom className={clsx(className, ["text-henken-from-normal"])} />}
      Label={({ className }) => <span className={clsx(className)}>{LL.HenkenPage.UserFrom()}</span>}
      {...props}
    />
  );
};

export const UserFrom: React.VFC<
  { className?: string; user: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ user, ...props }) => {
  const viewer = useViewer();
  return <UserFromView user={user} {...props} isViewer={viewer?.id === user.id} />;
};
