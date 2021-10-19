import clsx from "clsx";
import React from "react";

import { NoResult } from "./NoResult";
import { Suggestion } from "./Suggestion";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    suggestions: (
      | { type: "book"; value: { id: string; title: string; cover: string; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; }
    )[];
    onSelect(
      value:
        | { type: "book"; value: { id: string; title: string; cover: string; }; }
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
      {suggestions.length > 0 &&
        suggestions.map((content) => <Suggestion key={content.value.id} content={content} onSelect={onSelect} />)}
      {suggestions.length === 0 &&
        <NoResult className={clsx(["w-full"])} />}
    </div>
  );
};

export const Suggestions: React.VFC<
  {
    className?: string;
    suggestions: (
      | { type: "book"; value: { id: string; title: string; cover: string; }; }
      | { type: "bookseries"; value: { id: string; title: string; }; }
      | { type: "author"; value: { id: string; name: string; }; }
    )[];
    onSelect(
      value:
        | { type: "book"; value: { id: string; title: string; cover: string; }; }
        | { type: "bookseries"; value: { id: string; title: string; }; }
        | { type: "author"; value: { id: string; name: string; }; },
    ): void;
  }
> = ({ ...props }) => {
  return <Component {...props} />;
};
