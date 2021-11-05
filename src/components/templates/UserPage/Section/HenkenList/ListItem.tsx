import clsx from "clsx";
import React from "react";

import { ContentDetails } from "./ContentDetails";
import { Image } from "./Image";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { IconHenkenUserFrom, IconHenkenUserTo } from "~/components/atoms/Icon";
import { LinkHenken, LinkUser } from "~/components/atoms/Link";
import { useTranslation } from "~/i18n/useTranslation";

export const ListItem: React.VFC<{
  className?: string;
  type: "received-henkens" | "post-henkens";
  henken: {
    id: string;
    comment: string;
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postTo: { id: string; alias: string; displayName: string; avatar: string; };
    answer: { comment: string; type: "right" | "wrong"; } | null;
    content:
      | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
      | { type: "bookseries"; content: { id: string; title: string; }; }
      | { type: "author"; content: { id: string; name: string; }; };
  };
}> = ({ className, type, henken: { comment, answer, content, id, postedBy, postTo } }) => {
  const { LL } = useTranslation();
  return (
    <li
      className={clsx(
        className,
        ["inline-flex", ["flex-row"], ["items-stretch"]],
        ["overflow-hidden"],
        ["rounded-none", "sm:rounded-lg"],
        ["shadow-sm", "sm:shadow-lg"],
      )}
    >
      <LinkHenken id={id}>
        <a
          className={clsx(
            ["px-3", "sm:px-4", "2xl:px-6"],
            ["py-2", "sm:py-4"],
            [
              {
                "bg-book-light": content.type === "book",
                "bg-author-light": content.type === "author",
                "bg-book-series-light": content.type === "bookseries",
              },
            ],
            ["flex", ["items-center"], ["justify-center"]],
          )}
        >
          <Image className={clsx(["flex-shrink-0"], ["w-12", "sm:w-20"])} content={content} />
        </a>
      </LinkHenken>
      <div
        className={clsx(
          ["self-stretch"],
          ["flex-grow"],
          ["flex", ["flex-col"]],
        )}
      >
        <ContentDetails
          className={clsx(
            ["flex-shrink-0"],
            ["px-2", "sm:px-4"],
            ["py-2"],
            ["bg-white"],
          )}
          content={content}
        />
        <div
          className={clsx(
            ["flex-grow"],
            ["px-2", "sm:px-4"],
            ["py-2"],
            ["flex", ["flex-col"], ["items-start"]],
            [{
              "bg-henken-from-pale": type === "post-henkens",
              "bg-henken-to-pale": type === "received-henkens",
            }],
          )}
        >
          <div
            className={clsx(
              ["w-full"],
              ["flex", ["flex-col", "sm:flex-row"]],
              ["space-x-0", "sm:space-x-2"],
              ["space-y-2", "sm:space-y-0"],
            )}
          >
            <div
              className={clsx(
                ["flex-grow"],
                ["flex", ["items-center"]],
              )}
            >
              <IconHenkenUserFrom
                className={clsx([
                  {
                    "text-henken-from-normal": type === "received-henkens",
                    "text-gray-300": type !== "received-henkens",
                  },
                ])}
              />
              <LinkUser alias={postTo.alias}>
                <a
                  className={clsx(
                    ["ml-2"],
                    ["flex-shrink-0"],
                    ["flex", ["items-center"]],
                  )}
                >
                  <div className={clsx(["flex-shrink-0"], ["w-6"], ["h-6"])}>
                    <AvatarSmall user={{ avatar: postTo.avatar, alias: postTo.alias }} />
                  </div>
                  <div className={clsx(["ml-2"])}>
                    <span className={clsx(["text-sm"])}>{postTo.displayName}</span>
                  </div>
                </a>
              </LinkUser>
            </div>
            <div
              className={clsx(
                ["flex-grow"],
                ["flex", ["items-center"]],
              )}
            >
              <IconHenkenUserTo
                className={clsx(
                  {
                    "text-henken-to-normal": type === "post-henkens",
                    "text-gray-300": type !== "post-henkens",
                  },
                )}
              />
              <LinkUser alias={postedBy.alias}>
                <a
                  className={clsx(
                    ["ml-2"],
                    ["flex-shrink-0"],
                    ["flex", ["items-center"]],
                  )}
                >
                  <div className={clsx(["flex-shrink-0"], ["w-6"], ["h-6"])}>
                    <AvatarSmall user={{ avatar: postedBy.avatar, alias: postedBy.alias }} />
                  </div>
                  <div className={clsx(["ml-2"])}>
                    <span className={clsx(["text-sm"])}>{postedBy.displayName}</span>
                  </div>
                </a>
              </LinkUser>
            </div>
          </div>
          <LinkHenken id={id}>
            <a className={clsx(["flex-grow"], ["block"], ["mt-2"])}>
              <p className={clsx(["text-sm", { "font-bold": comment === "" }])}>
                {comment === "" && LL.UserPage.Section.HenkenList.ListItem.NoComment()}
                {comment !== "" && comment}
              </p>
            </a>
          </LinkHenken>
        </div>
      </div>
    </li>
  );
};
