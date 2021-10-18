import clsx from "clsx";
import React from "react";

export const ComponentForBook: React.VFC<
  { className?: string; title: string; onSelect(): void; }
> = ({ className, title, onSelect }) => {
  return (
    <div
      onClick={() => onSelect()}
      onKeyPress={() => onSelect()}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      {title}
    </div>
  );
};

export const ComponentForBookSeries: React.VFC<
  { className?: string; title: string; onSelect(): void; }
> = ({ className, title, onSelect }) => {
  return (
    <div
      onClick={() => onSelect()}
      onKeyPress={() => onSelect()}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      {title}
    </div>
  );
};

export const ComponentForAuthor: React.VFC<
  { className?: string; name: string; onSelect(): void; }
> = ({ className, name, onSelect }) => {
  return (
    <div
      onClick={() => onSelect()}
      onKeyPress={() => onSelect()}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      {name}
    </div>
  );
};

export const Suggestion: React.VFC<
  {
    className?: string;
    content: (
      | { type: "book"; value: { id: string; title: string; cover: string; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; }
    );
    onSelect(
      value:
        | { type: "book"; value: { id: string; title: string; cover: string; }; }
        | { type: "bookseries"; value: { id: string; title: string; }; }
        | { type: "author"; value: { id: string; name: string; }; },
    ): void;
  }
> = ({ content, onSelect, ...props }) => {
  switch (content.type) {
    case "book":
      return (
        <ComponentForBook
          title={content.value.title}
          onSelect={() => {
            onSelect(content);
          }}
          {...props}
        />
      );
    case "bookseries":
      return (
        <ComponentForBookSeries
          title={content.value.title}
          onSelect={() => {
            onSelect(content);
          }}
          {...props}
        />
      );
    case "author":
      return (
        <ComponentForAuthor
          name={content.value.name}
          onSelect={() => {
            onSelect(content);
          }}
          {...props}
        />
      );
  }
  return <></>;
};
