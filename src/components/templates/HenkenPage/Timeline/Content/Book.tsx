import clsx from "clsx";
import React from "react";

import { BookCover } from "~/components/atoms/BookCover";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
  cover: string | null;
  authors: {
    id: string;
    name: string;
    role: null;
  }[];
}> = ({ className, title, cover, authors }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-row"]],
      )}
    >
      <div className={clsx(["flex-shrink"])}>
        <BookCover
          className={clsx(
            [
              ["w-16", "sm:w-20", "md:w-28"],
            ],
          )}
          book={{ title, cover }}
        />
      </div>
      <div
        className={clsx(
          ["flex-grow"],
          ["ml-4", "sm:ml-6"],
          ["flex", ["flex-col"]],
        )}
      >
        <span
          className={clsx(
            ["select-all"],
            [
              ["text-white"],
              ["text-lg"],
              ["font-bold"],
            ],
          )}
        >
          {title}
        </span>
        <div className={clsx(["mt-2"], ["flex", ["space-x-2"]])}>
          {authors.map(({ id, name }) => (
            <span key={id} className={clsx(["text-blue-300"])}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Book = View;
