import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

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
        [["inline-flex"], ["flex-row"], ["items-starts"]],
        ["bg-blue-50"],
        ["border", "border-blue-400"],
      )}
    >
      {content && (
        <Content
          className={clsx(["w-32"])}
          content={content}
        />
      )}
      {!content && (
        <div
          className={clsx(["w-32"])}
        />
      )}
      <div
        className={clsx(
          ["flex-grow"],
          ["flex", ["flex-col"]],
        )}
      >
        <SearchContent className={clsx(["w-full"])} />
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
