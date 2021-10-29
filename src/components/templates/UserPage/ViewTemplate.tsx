import clsx from "clsx";
import React from "react";

import { Header } from "./Header";

export const ViewTemplate: React.VFC<{
  user: { id: string; alias: string; displayName: string; avatar: string; };
  section: React.VFC<{ className?: string; }>;
}> = ({ user, section: Section }) => {
  return (
    <main
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
        ["flex", ["flex-col"]],
      )}
    >
      <Header
        className={clsx(["w-full"])}
        user={{ id: user.id, alias: user.alias, displayName: user.displayName, avatar: user.avatar }}
      />
      <Section className={clsx(["w-full"])} />
    </main>
  );
};
