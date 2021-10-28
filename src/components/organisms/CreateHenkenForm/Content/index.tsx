import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { Comment } from "./Comment";
import { Content } from "./Details";
import { SearchContent } from "./SearchContent";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;

    content:
      | null
      | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; };
  }
> = (
  {
    className,
    content,
    ...props
  },
) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["px-6"], ["py-4"]],
        [["inline-flex"], ["flex-col"], ["items-starts"]],
        ["grid", ["grid-cols-3"], ["gap-x-8"]],
        ["bg-gray-50"],
      )}
    >
      {content && <Content className={clsx(["col-span-1"])} content={content} />}
      {!content && <div className={clsx(["col-span-1"])} />}
      <div
        className={clsx(
          [
            ["col-start-2"],
            ["col-span-full"],
          ],
          ["h-full"],
          ["flex", ["flex-col"]],
        )}
      >
        <SearchContent className={clsx(["w-full"])} />
        <Comment className={clsx(["w-full"], ["mt-2"])} />
      </div>
    </div>
  );
};

export const ContentSect: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { content } = useContext(CreateHenkenFormContext);

  return (
    <Component
      {...props}
      content={content}
    />
  );
};
