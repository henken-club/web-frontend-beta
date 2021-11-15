import clsx from "clsx";
import React from "react";

import { ViewTemplate } from "./Template";

import { useViewer } from "~/auth/useViewer";
import { IconHenkenUserTo } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const UserToView: React.VFC<
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
      Icon={({ className }) => <IconHenkenUserTo className={clsx(className, ["text-henken-to-normal"])} />}
      Label={({ className }) => <span className={clsx(className)}>{LL.HenkenPage.UserTo()}</span>}
      {...props}
    />
  );
};

export const UserTo: React.VFC<
  { className?: string; user: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ user, ...props }) => {
  const viewer = useViewer();
  return <UserToView user={user} {...props} isViewer={viewer?.id === user.id} />;
};
