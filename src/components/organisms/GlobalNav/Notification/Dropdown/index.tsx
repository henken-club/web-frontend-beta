import clsx from "clsx";
import React, { ComponentProps } from "react";

import { ReceivedAnswer } from "./ReceivedAnswer";
import { ReceivedHenken } from "./ReceivedHenken";

export type NotificationType =
  | { type: "receivedHenken"; value: ComponentProps<typeof ReceivedHenken>["notification"]; }
  | { type: "receivedAnswer"; value: ComponentProps<typeof ReceivedAnswer>["notification"]; };

export const View: React.VFC<{
  className?: string;
  notifications: NotificationType[];
}> = ({ className, notifications }) => {
  return (
    <div
      className={clsx(
        className,
        ["w-80"],
        ["bg-white"],
        ["py-2"],
        ["inline-flex", ["flex-col"]],
        ["rounded-lg"],
        ["shadow-lg"],
      )}
    >
      <ul className={clsx(["flex", "flex-col"], ["divide-y", ["divide-gray-100"]])}>
        {notifications.map((notification) => {
          return (
            <li key={notification.value.id} className={clsx(["w-full"], [["px-4"], ["py-2"]])}>
              {notification.type === "receivedHenken" && <ReceivedHenken notification={notification.value} />}
              {notification.type === "receivedAnswer" && <ReceivedAnswer notification={notification.value} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Dropdown: React.VFC<{ className?: string; notifications: NotificationType[]; }> = ({ ...props }) => {
  return <View {...props} />;
};
