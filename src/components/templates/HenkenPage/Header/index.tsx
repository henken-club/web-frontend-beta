import clsx from "clsx";
import React from "react";

import { CommentFrom, CommentTo } from "./Comment";
import { Content } from "./Content";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
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
}> = ({ className, comment, postedBy, postsTo, content, answer }) => {
  const { LL } = useTranslation();
  return (
    <header
      className={clsx(
        className,
        ["bg-gray-700"],
        [["px-6", "sm:px-12"], ["py-6", "sm:py-8"]],
        ["inline-flex", ["flex-col"]],
      )}
    >
      <Content
        className={clsx(
          [
            ["w-full", "lg:w-auto"],
            ["max-w-none", "md:max-w-lg"],
          ],
        )}
        content={content}
      />
      <CommentFrom
        className={clsx(["mt-8"])}
        comment={comment}
        user={postedBy}
      />
      <CommentTo
        className={clsx(["mt-8", "sm:mt-4"])}
        answer={answer}
        user={postsTo}
      />
    </header>
  );
};

export const Header: React.VFC<{
  className?: string;
  henken: {
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
}> = ({ henken, ...props }) => {
  return <View {...henken} {...props} />;
};
