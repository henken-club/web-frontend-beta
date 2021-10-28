import clsx from "clsx";
import React from "react";

import { BookSmallBadge } from "~/components/atoms/ContentBadge";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = (
  { className, title },
) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col", "sm:flex-row"]],
      )}
    >
      <p className={clsx(["break-words"])}>
        <BookSmallBadge className={clsx()} />
        <span
          className={clsx(["ml-2"], [["text-sm"]])}
        >
          {title}
        </span>
      </p>
    </div>
  );
};
export const Book: React.VFC<{ className?: string; book: { id: string; title: string; }; }> = (
  { book, ...props },
) => {
  return (
    <View
      {...book}
      {...props}
    />
  );
};
