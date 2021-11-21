import clsx from "clsx";
import React from "react";

import { BookCover } from "~/components/BookCover";

export const View: React.VFC<{ className?: string; id: string; title: string; cover: string | null; }> = (
  { className, title, cover },
) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col"], ["items-start"]],
      )}
    >
      <div className={clsx(["h-32"])}>
        <BookCover
          className={clsx(["mx-auto"], ["w-24"])}
          book={{ title, cover }}
        />
      </div>
      <div className={clsx(["w-full"], ["flex-grow"], ["mt-2"])}>
        <span
          className={clsx(
            [["text-xs"]],
          )}
        >
          {title}
        </span>
      </div>
    </div>
  );
};
export const Book: React.VFC<{ className?: string; book: { id: string; title: string; cover: string | null; }; }> = (
  { book, ...props },
) => {
  return (
    <View
      {...book}
      {...props}
    />
  );
};
