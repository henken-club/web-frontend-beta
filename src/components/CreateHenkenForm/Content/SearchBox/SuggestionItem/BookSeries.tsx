import clsx from "clsx";
import React from "react";

import { BookSeriesSmallBadge } from "~/components/ContentBadge";

export const Component: React.VFC<
  { className?: string; title: string; onSelect(): void; }
> = ({ className, title, onSelect }) => {
  return (
    <div
      onClick={() => onSelect()}
      onKeyPress={() => onSelect()}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["inline-flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      <BookSeriesSmallBadge />
      <span className={clsx(["ml-2"], ["text-sm"])}>
        {title}
      </span>
    </div>
  );
};

export const BookSeriesSuggestionItem: React.VFC<
  {
    className?: string;
    content: { type: "bookseries"; value: { id: string; title: string; }; };
    onSelect(content: { type: "bookseries"; value: { id: string; title: string; }; }): void;
  }
> = ({ content, onSelect, ...props }) => (
  <Component
    {...props}
    title={content.value.title}
    onSelect={() => onSelect(content)}
  />
);
