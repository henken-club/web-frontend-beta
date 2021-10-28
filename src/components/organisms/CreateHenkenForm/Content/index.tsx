import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { Details } from "./Details";
import { Image } from "./Image";
import { SearchBox } from "./SearchBox";

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
        [["px-4"], ["py-4"]],
        ["h-auto", "sm:h-48"],
        [["inline-flex"], ["flex-row"], ["items-starts"]],
        ["bg-blue-50"],
        ["border", "border-blue-400"],
        [["rounded-md"]],
      )}
    >
      <Image
        className={clsx(["hidden", "sm:block"], ["w-28"], ["h-36"])}
        content={content}
      />
      <div
        className={clsx(
          ["flex-grow"],
          ["hidden", ["sm:flex", ["flex-col"]]],
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
      <div
        className={clsx(
          ["w-full"],
          [["flex", ["flex-col"]], "sm:hidden"],
        )}
      >
        <div className={clsx(["flex"])}>
          <Image
            className={clsx(["w-16"], ["h-20"], ["flex-shrink-0"])}
            content={content}
          />
          {content && (
            <Details
              className={clsx(["ml-2"], ["flex-grow"])}
              content={content}
            />
          )}
        </div>
        <SearchBox className={clsx(["mt-4"], ["w-full"])} />
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
