import clsx from "clsx";
import React from "react";

export const Component: React.VFC<
  { className?: string; name: string; onSelect(): void; }
> = ({ className, name, onSelect }) => {
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
      {name}
    </div>
  );
};

export const AuthorSuggestionItem: React.VFC<
  {
    className?: string;
    content: { type: "author"; value: { id: string; name: string; }; };
    onSelect(content: { type: "author"; value: { id: string; name: string; }; }): void;
  }
> = ({ content, onSelect, ...props }) => (
  <Component
    {...props}
    name={content.value.name}
    onSelect={() => onSelect(content)}
  />
);
