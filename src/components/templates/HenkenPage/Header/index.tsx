import clsx from "clsx";
import React from "react";

import { Content } from "./Content";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { IconHenkenUserFrom, IconHenkenUserTo } from "~/components/atoms/Icon";
import { LinkUser } from "~/components/atoms/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  comment: string;
  postedBy: { id: string; alias: string; displayName: string; avatar: string; };
  postsTo: { id: string; alias: string; displayName: string; avatar: string; };
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
}> = ({ className, comment, postedBy, postsTo, content }) => {
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
          [["px-4", "sm:px-8"], ["py-4", "sm:py-8"]],
          ["flex", ["flex-col", "lg:flex-row"], ["justify-between"]],
        )}
      >
        <div className={clsx(["flex", ["flex-col"]])}>
          <h1
            className={clsx(
              ["max-w-full", "lg:max-w-xs"],
              ["truncate"],
              [
                ["text-lg", "sm:text-xl"],
                ["text-gray-50"],
                ["font-bold"],
              ],
            )}
          >
            {comment}
          </h1>
          <div className={clsx(["mt-4", "sm:mt-6"], ["flex", ["flex-col"]])}>
            <div
              className={clsx(
                ["flex", ["flex-row"], ["items-center"]],
              )}
            >
              <IconHenkenUserFrom
                className={clsx(
                  ["text-blue-100"],
                  ["text-xl", "sm:text-2xl"],
                )}
              />
              <LinkUser alias={postedBy.alias}>
                <a
                  className={clsx(
                    ["ml-2", "sm:ml-4"],
                    [
                      ["w-8", "sm:w-10"],
                      ["h-8", "sm:h-10"],
                    ],
                  )}
                >
                  <AvatarSmall user={{ alias: postedBy.alias, avatar: postedBy.avatar }} />
                </a>
              </LinkUser>
              <div className={clsx(["ml-2"], ["flex"])}>
                <span
                  className={clsx([
                    ["text-gray-50"],
                    ["text-xs", "sm:text-sm"],
                  ])}
                >
                  {LL.HenkenPage.Header.UserFrom({ displayName: postedBy.displayName })}
                </span>
              </div>
            </div>
            <div
              className={clsx(
                ["mt-4"],
                ["flex", ["flex-row"], ["items-center"]],
              )}
            >
              <IconHenkenUserTo
                className={clsx(
                  ["text-blue-200"],
                  ["text-xl", "sm:text-2xl"],
                )}
              />
              <LinkUser alias={postsTo.alias}>
                <a
                  className={clsx(
                    ["ml-2", "sm:ml-4"],
                    [
                      ["w-8", "sm:w-10"],
                      ["h-8", "sm:h-10"],
                    ],
                  )}
                >
                  <AvatarSmall user={{ alias: postedBy.alias, avatar: postsTo.avatar }} />
                </a>
              </LinkUser>
              <div className={clsx(["ml-2"], ["flex"])}>
                <span
                  className={clsx([
                    ["text-gray-50"],
                    ["text-xs", "sm:text-sm"],
                  ])}
                >
                  {LL.HenkenPage.Header.UserTo({ displayName: postsTo.displayName })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <Content
          className={clsx(
            [
              ["flex-grow"],
              ["w-full", "lg:w-auto"],
              ["max-w-none", "lg:max-w-lg"],
            ],
            [
              ["mt-4", "sm:mt-8", "lg:mt-0"],
              ["ml-0", "lg:ml-8"],
            ],
          )}
          content={content}
        />
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
