import clsx from "clsx";
import React, { useContext } from "react";

import { CreateHenkenFormContext } from "../context";

import { Details } from "./Details";
import { SearchContent } from "./SearchContent";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    content:
      | null
      | { type: "book"; value: { id: string; title: string; cover: string; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; };

    // comment
    onUpdateChange(value: string): void;
  }
> = (
  {
    className,
    content,
    onUpdateChange,
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
        ["grid", ["grid-cols-3"], ["gap-x-4"]],
        ["bg-gray-50"],
      )}
    >
      {content && <Details className={clsx(["col-span-1"], ["h-52"])} content={content} />}
      {!content && <div className={clsx(["col-span-1"], ["h-52"])} />}
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
        <div className={clsx(["w-full"], ["mt-2"])}>
          <label>
            <span className={clsx(["text-sm"])}>{LL.CreateHenkenForm.Content.CommentBox.Label()}</span>
            <textarea
              autoComplete="off"
              aria-label={LL.CreateHenkenForm.Content.CommentBox.aria.CommentInput()}
              onChange={(event) => onUpdateChange(event.currentTarget.value)}
              className={clsx(
                ["w-full"],
                [["px-2"], ["py-1"]],
                ["mt-1"],
                ["border"],
                [["text-base"]],
              )}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export const Content: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { content, setComment } = useContext(CreateHenkenFormContext);

  return (
    <Component
      {...props}
      content={content}
      onUpdateChange={(comment) => setComment(comment)}
    />
  );
};
