import clsx from "clsx";
import React from "react";

import { NoImage } from "./NoImage";

import { BookCover } from "~/components/BookCover";

export const Image: React.VFC<{
  className?: string;
  content:
    | { type: "tempContent" | "bookseries" | "author"; }
    | { type: "book"; content: { id: string; title: string; cover: string | null; }; };
}> = ({
  content,
  className,
  ...props
}) => {
  return (
    <div className={clsx(className, ["flex"])}>
      {content && (
        <>
          {content.type === "book" && <BookCover className={clsx(["w-full"])} {...props} book={content.content} />}
          {content.type === "author" && <NoImage {...props} />}
          {content.type === "bookseries" && <NoImage {...props} />}
          {content.type === "tempContent" && <NoImage {...props} />}
        </>
      )}
    </div>
  );
};
