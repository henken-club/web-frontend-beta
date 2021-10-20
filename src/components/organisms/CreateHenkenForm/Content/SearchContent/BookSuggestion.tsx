import clsx from "clsx";
import React from "react";

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
      {title}
    </div>
  );
};

export const BookSuggestion: React.VFC<
  {
    className?: string;
    content: { type: "book"; value: { id: string; title: string; cover: string; }; };
    onSelect(content: { type: "book"; value: { id: string; title: string; cover: string; }; }): void;
  }
> = ({ content, onSelect, ...props }) => (
  <Component
    {...props}
    title={content.value.title}
    onSelect={() => onSelect(content)}
  />
);
