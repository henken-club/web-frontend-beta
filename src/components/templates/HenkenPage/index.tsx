import clsx from "clsx";
import React from "react";

import { Content } from "./Content";
import { Timeline } from "./Timeline";
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
        ["py-4"],
      )}
    >
      <div
        className={clsx(
          ["container", "max-w-screen-lg"],
          ["mx-auto"],
          ["flex", ["flex-col", "md:flex-row"]],
        )}
      >
        <Content
          className={clsx(["flex-grow"])}
          content={henken.content}
        />
        <div
          className={clsx(
            ["w-full", "md:w-1/3"],
            ["flex", ["flex-col", "sm:flex-row", "md:flex-col"]],
          )}
        >
          <UserFrom
            className={clsx(["w-full", "sm:w-1/2", "md:w-full"])}
            user={henken.postedBy}
          />
          <UserTo
            className={clsx(["w-full", "sm:w-1/2", "md:w-full"])}
            user={henken.postsTo}
          />
        </div>
      </div>
      <div
        className={clsx(
          ["container", "max-w-screen-lg"],
          ["mx-auto"],
          ["flex", ["flex-col", "lg:flex-row"]],
        )}
      >
        <Timeline
          className={clsx(["w-full", "lg:w-2/3"])}
          postedBy={henken.postedBy}
          postsTo={henken.postsTo}
          comment={henken.comment}
          answer={henken.answer}
        />
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
