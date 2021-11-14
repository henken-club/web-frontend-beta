import clsx from "clsx";
import React from "react";

import { AnswerType, HenkenContent } from "./types";
import { UserFrom, UserTo } from "./User";

export const View: React.VFC<{
  henken: {
    id: string;
    comment: string;
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postsTo: { id: string; alias: string; displayName: string; avatar: string; };
    answer: null | { type: AnswerType; comment: string; };
    content: HenkenContent;
  };
}> = ({ henken }) => {
  return (
    <main
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
      )}
    >
      <div
        className={clsx(
          ["container", "max-w-screen-lg"],
          ["mx-auto"],
          ["flex", ["flex-col", "lg:flex-row"]],
        )}
      >
        <div
          className={clsx(
            ["flex-grow"],
            [["bg-blue-50"]],
          )}
        />
        <div
          className={clsx(
            ["w-full", "lg:w-1/3"],
            ["flex", ["flex-col", "sm:flex-row", "lg:flex-col"]],
            ["space-y-1", "sm:space-y-0"],
            ["space-x-0", "sm:space-x-2", "lg:space-x-0"],
          )}
        >
          <UserFrom
            className={clsx(["w-full", "sm:w-1/2", "lg:w-full"])}
            user={henken.postedBy}
          />
          <UserTo
            className={clsx(["w-full", "sm:w-1/2", "lg:w-full"])}
            user={henken.postsTo}
          />
        </div>
      </div>
    </main>
  );
};

export const TemplateHenkenPage: React.VFC<{
  henken: {
    id: string;
    comment: string;
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postsTo: { id: string; alias: string; displayName: string; avatar: string; };
    answer: null | { type: AnswerType; comment: string; };
    content: HenkenContent;
  };
}> = ({ henken }) => {
  return <View henken={henken} />;
};
