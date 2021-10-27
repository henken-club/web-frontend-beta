import clsx from "clsx";
import React from "react";

import { AvatarLarge } from "~/components/atoms/Avatar";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  user: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };
}> = ({ user }) => {
  const { LL } = useTranslation();
  return (
    <main
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
        ["flex", ["flex-col"]],
      )}
    >
      <header className={clsx(["w-full"], ["flex", ["flex-row"]])}>
        <div className={clsx(["flex"])}>
          <div
            className={clsx(
              ["w-32"],
              ["h-32"],
            )}
          >
            <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />
          </div>
        </div>
        <div className={clsx(["flex-grow"], ["flex"])}>
          <span className={clsx()}>
            <span>{user.displayName}</span>
            <span>{LL.Format.Alias({ alias: user.alias })}</span>
          </span>
        </div>
      </header>
    </main>
  );
};

export const TemplateUserPage: React.VFC<{
  user: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };
}> = ({ user }) => {
  return <View user={user} />;
};
