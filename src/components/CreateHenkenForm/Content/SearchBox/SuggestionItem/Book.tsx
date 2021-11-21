import clsx from "clsx";
import React from "react";

import { BookSmallBadge } from "~/components/ContentBadge";

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
      <BookSmallBadge />
      <span className={clsx(["ml-2"], ["text-sm"])}>
        {title}
      </span>
    </div>
  );
};

export const BookSuggestionItem: React.VFC<
  {
    className?: string;
    content: { type: "book"; value: { id: string; title: string; cover: string | null; }; };
    onSelect(content: { type: "book"; value: { id: string; title: string; cover: string | null; }; }): void;
  }
> = ({ content, onSelect, ...props }) => (
  <Component
    {...props}
    title={content.value.title}
    onSelect={() => onSelect(content)}
  />
);
