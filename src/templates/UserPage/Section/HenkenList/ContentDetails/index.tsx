import clsx from "clsx";
import React from "react";

import { AuthorSmallBadge, BookSeriesSmallBadge, BookSmallBadge } from "~/components/ContentBadge";

export const ContentDetails: React.VFC<{
  className?: string;
  content:
    | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
    | { type: "book"; content: { id: string; title: string; }; }
    | { type: "bookseries"; content: { id: string; title: string; }; }
    | { type: "author"; content: { id: string; name: string; }; };
}> = ({
  content,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        className,
      )}
    >
      <p className={clsx(["break-words"])}>
        <>
          {content.type === "author" && <AuthorSmallBadge className={clsx()} />}
          {content.type === "book" && <BookSmallBadge className={clsx()} />}
          {content.type === "bookseries" && <BookSeriesSmallBadge className={clsx()} />}
        </>
        <span className={clsx(["ml-2"], [["text-sm", "sm:text-base"]], ["select-all"])}>
          {content.type === "author" && content.content.name}
          {content.type === "book" && content.content.title}
          {content.type === "bookseries" && content.content.title}
        </span>
      </p>
    </div>
  );
};
