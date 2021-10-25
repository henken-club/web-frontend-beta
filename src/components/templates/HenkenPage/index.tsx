import clsx from "clsx";
import React from "react";

import { Timeline } from "./Timeline";
import { Users } from "./Users";

export const View: React.VFC<{
  henken: {
    id: string;
    comment: string;
    postedBy: {
      id: string;
      alias: string;
      displayName: string;
      avatar: string;
    };
    postsTo: {
      id: string;
      alias: string;
      displayName: string;
      avatar: string;
    };
    answer: {
      comment: string;
      type: "right" | "wrong";
    } | null;
    content:
      | {
        type: "book";
        content: {
          id: string;
          title: string;
          cover: string | null;
          authors: {
            id: string;
            name: string;
            role: null;
          }[];
        };
      }
      | { type: "bookseries"; content: { id: string; title: string; }; }
      | { type: "author"; content: { id: string; name: string; }; };
  };
}> = ({ henken }) => {
  return (
    <main
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
        ["flex", ["flex-row"], ["flex-wrap", "xl:flex-nowrap"]],
      )}
    >
      <Timeline
        className={clsx(
          ["w-full"],
          ["max-w-screen-none", "lg:max-w-screen-sm"],
        )}
        henken={{
          comment: henken.comment,
          postedBy: henken.postedBy,
          postsTo: henken.postsTo,
          content: henken.content,
          answer: henken.answer,
        }}
      />
      <div
        className={clsx(
          ["w-full", "lg:w-auto", "xl:w-full"],
          ["flex-grow-0", "lg:flex-grow"],
          ["lg:h-full"],
          ["block", "xl:hidden"],
        )}
      >
        <Users
          className={clsx(
            ["w-full"],
            ["h-full"],
          )}
          henken={{
            postedBy: henken.postedBy,
            postsTo: henken.postsTo,
          }}
        />
      </div>
      <div
        className={clsx(
          ["flex-grow"],
          ["w-full"],
          ["bg-gray-900"],
          ["block", "xl:hidden"],
        )}
      />
      <div className={clsx(["flex-grow"], ["hidden", ["xl:flex", ["flex-col"]]])}>
        <Users
          className={clsx(["flex-shrink"])}
          henken={{
            postedBy: henken.postedBy,
            postsTo: henken.postsTo,
          }}
        />
        <div className={clsx(["flex-grow"], ["bg-gray-800"])} />
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
    answer: {
      comment: string;
      type: "right" | "wrong";
    } | null;
    content:
      | {
        type: "book";
        content: {
          id: string;
          title: string;
          cover: string | null;
          authors: {
            id: string;
            name: string;
            role: null;
          }[];
        };
      }
      | { type: "bookseries"; content: { id: string; title: string; }; }
      | { type: "author"; content: { id: string; name: string; }; };
  };
}> = ({ henken }) => {
  return <View henken={henken} />;
};
