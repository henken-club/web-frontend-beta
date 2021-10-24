import clsx from "clsx";
import React from "react";

import { CommentFrom, CommentTo } from "./Comment";
import { Content } from "./Content";
import { From, To } from "./User";

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
      )}
    >
      <div
        className={clsx(
          ["max-w-screen-lg"],
          ["mx-auto"],
          [
            ["px-4", "sm:px-6"],
            ["py-4", "sm:py-8"],
          ],
          [
            "flex",
            ["flex-row"],
            ["justify-between"],
            ["flex-wrap", "md:flex-nowrap"],
          ],
        )}
      >
        <From
          className={clsx(
            ["w-full", "sm:w-1/2", "md:w-36"],
            ["order-1"],
            ["flex-shrink-0", "md:flex-shrink"],
          )}
          user={postedBy}
        />
        <To
          className={clsx(
            ["w-full", "sm:w-1/2", "md:w-36"],
            ["order-2", "md:order-3"],
            ["flex-shrink-0", "md:flex-shrink"],
            ["mt-4", "sm:mt-0"],
          )}
          user={postsTo}
        />
        <div
          className={clsx(
            ["order-3", "md:order-2"],
            ["flex-grow"],
            ["mt-8", "md:mt-0"],
            ["w-full", "md:w-auto"],
            ["max-w-none", "md:max-w-lg"],
            ["px-2", "sm:px-4", "md:px-0"],
            ["flex", ["flex-col"]],
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
          />
          <CommentTo
            className={clsx(["mt-4"])}
            answer={answer}
          />
        </div>
      </div>
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
