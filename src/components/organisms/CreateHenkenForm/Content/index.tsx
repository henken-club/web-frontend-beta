import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { Details } from "./Details";
import { Image } from "./Image";
import { SearchBox } from "./SearchContent";

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
        ["h-48"],
        [["inline-flex"], ["flex-row"], ["items-starts"]],
        ["bg-blue-50"],
        ["border", "border-blue-400"],
      )}
    >
      <Image
        className={clsx(["w-28"], ["h-36"])}
        content={content}
      />
      <div
        className={clsx(
          ["flex-grow"],
          ["flex", ["flex-col"]],
          ["ml-4"],
        )}
      >
        <SearchBox className={clsx(["w-full"])} />
        {content && (
          <Details
            className={clsx(["mt-2"], ["flex-grow"])}
            content={content}
          />
        )}
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
