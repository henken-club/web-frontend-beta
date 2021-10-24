import clsx from "clsx";
import React from "react";

import { Header } from "./Header";

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
    <section
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
        ["flex", ["flex-row"], ["flex-wrap", "xl:flex-nowrap"]],
      )}
    >
      <Header
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
      <div className={clsx(["flex-grow"], ["bg-red-400"], ["block", "xl:hidden"])} />
      <div className={clsx(["flex-grow"], ["w-full"], ["bg-red-500"], ["block", "xl:hidden"])} />
      <div className={clsx(["flex-grow"], ["hidden", ["xl:flex", ["flex-col"]]])}>
        <div className={clsx(["flex-shrink"], ["bg-blue-400"])} />
        <div className={clsx(["flex-grow"], ["bg-blue-500"])} />
      </div>
    </section>
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
