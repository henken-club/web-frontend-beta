import clsx from "clsx";
import React, { ComponentProps, useContext, useState } from "react";

import { CreateHenkenFormContext } from "../context";

import { Info } from "./Info";
import { Suggestions } from "./Suggestions";

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

    // content search
    focusContentSearchBox: boolean;
    onFocusSearchContentBox(): void;
    onBlurSearchContentBox(): void;
    searchingContent: boolean;
    onUpdateContentSearchQuery(value: string): void;
    searchContentSuggestions: ComponentProps<typeof Suggestions>["suggestions"];
    onSelectContentSearchSuggestion: ComponentProps<typeof Suggestions>["onSelect"];
  }
> = (
  {
    className,
    content,
    onBlurSearchContentBox,
    focusContentSearchBox,
    onUpdateChange,
    onUpdateContentSearchQuery,
    onFocusSearchContentBox,
    onSelectContentSearchSuggestion,
    searchingContent,
    searchContentSuggestions,
    ...props
  },
) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["px-4"], ["py-4"]],
        [["inline-flex"], ["flex-col"], ["items-center"]],
        ["grid", ["grid-cols-3"], ["gap-x-4"]],
      )}
    >
      {content && <Info className={clsx(["col-span-1"])} content={content} />}
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
        <div className={clsx()}>
          <label>
            <span>{LL.CreateHenkenForm.Content.CommentBox.Label()}</span>
            <input
              autoComplete="off"
              aria-label={LL.CreateHenkenForm.Content.CommentBox.aria.CommentInput()}
              onChange={(event) => onUpdateChange(event.currentTarget.value)}
              className={clsx(["w-full"], [["px-2"], ["py-1"]], ["border"], [["text-md"]])}
            />
          </label>
        </div>
        <div className={clsx(["mt-4"], ["relative"])}>
          <label>
            <span>{LL.CreateHenkenForm.Content.SearchBox.Label()}</span>
            <input
              type="search"
              autoComplete="on"
              aria-label={LL.CreateHenkenForm.Content.SearchBox.aria.QueryInput()}
              onChange={(event) => onUpdateContentSearchQuery(event.currentTarget.value)}
              onFocus={() => onFocusSearchContentBox()}
              onBlur={() => onBlurSearchContentBox()}
              className={clsx(["w-full"], [["px-2"], ["py-1"]], ["border"], [["text-md"]])}
            />
          </label>
          {focusContentSearchBox &&
            (
              <Suggestions
                className={clsx(
                  ["absolute", ["top-full"], ["left-0"]],
                  ["w-full"],
                  ["shadow-lg"],
                )}
                suggestions={searchContentSuggestions}
                onSelect={onSelectContentSearchSuggestion}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export const Content: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { content, setContent, setComment } = useContext(CreateHenkenFormContext);
  const [contentQuery, setContentQuery] = useState<string | undefined>(undefined);
  const [focus, setFocus] = useState(false);

  return (
    <Component
      {...props}
      content={content}
      focusContentSearchBox={focus}
      onFocusSearchContentBox={() => setFocus(true)}
      onBlurSearchContentBox={() => setFocus(false)}
      onSelectContentSearchSuggestion={(target) => setContent(target)}
      onUpdateChange={(comment) => setComment(comment)}
      onUpdateContentSearchQuery={(query) => setContentQuery(query)}
      searchingContent
      searchContentSuggestions={[]}
    />
  );
};
