import clsx from "clsx";
import React from "react";

import { AuthorSuggestionItem, BookSeriesSuggestionItem, BookSuggestionItem } from "./SuggestionItem";

import { NoSuggestions } from "~/components/atoms/NoSuggestions";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    suggestions: (
      | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; }
    )[];
    onSelect(
      value:
        | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
        | { type: "bookseries"; value: { id: string; title: string; }; }
        | { type: "author"; value: { id: string; name: string; }; },
    ): void;
  }
> = ({ className, suggestions, onSelect, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["inline-flex"], ["flex-col"]],
        ["bg-white"],
        ["divide-y", ["divide-gray-100"]],
      )}
    >
      {suggestions.length === 0 && <NoSuggestions className={clsx(["w-full"])} />}
      {suggestions.length > 0 &&
        suggestions.map((content) => {
          switch (content.type) {
            case "author":
              return (
                <AuthorSuggestionItem
                  key={content.value.id}
                  content={content}
                  onSelect={() => onSelect(content)}
                />
              );
            case "book":
              return (
                <BookSuggestionItem
                  key={content.value.id}
                  content={content}
                  onSelect={onSelect}
                />
              );
            case "bookseries":
              return (
                <BookSeriesSuggestionItem
                  key={content.value.id}
                  content={content}
                  onSelect={() => onSelect(content)}
                />
              );
          }
        })}
    </div>
  );
};

export const SuggestionsList: React.VFC<
  {
    className?: string;
    suggestions: (
      | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; }
    )[];
    onSelect(
      value:
        | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
        | { type: "bookseries"; value: { id: string; title: string; }; }
        | { type: "author"; value: { id: string; name: string; }; },
    ): void;
  }
> = ({ ...props }) => {
  return <Component {...props} />;
};
