import clsx from "clsx";
import React from "react";

import { TabItem } from "./TabItem";

import { LinkUserReceivedHenkens, LinkUserSendHenkens } from "~/components/atoms/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const Tab: React.VFC<{ className: string; select: "received-henkens" | "send-henkens"; alias: string; }> = (
  { className, select, alias },
) => {
  const { LL } = useTranslation();
  return (
    (
      <div className={clsx(className, ["flex"], ["flex-row"], ["border-b", "border-blue-200"])}>
        <TabItem
          className={clsx()}
          selected={select === "received-henkens"}
          Link={({ ...props }) => <LinkUserReceivedHenkens alias={alias} {...props} />}
          Text={({ className }) => (
            <span className={clsx(className)}>
              {LL.UserPage.Section.Tab.ReceivedHenkens()}
            </span>
          )}
        />
        <TabItem
          className={clsx()}
          selected={select === "send-henkens"}
          Link={({ ...props }) => <LinkUserSendHenkens alias={alias} {...props} />}
          Text={({ className }) => (
            <span className={clsx(className)}>
              {LL.UserPage.Section.Tab.SendHenkens()}
            </span>
          )}
        />
      </div>
    )
  );
};
