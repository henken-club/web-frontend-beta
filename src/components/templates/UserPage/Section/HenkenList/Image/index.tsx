import clsx from "clsx";
import React from "react";

import { NoImage } from "./NoImage";

import { BookCover } from "~/components/atoms/BookCover";

export const Image: React.VFC<{
  className?: string;
  content:
    | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
    | { type: "bookseries"; content: { id: string; title: string; }; }
    | { type: "author"; content: { id: string; name: string; }; };
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
        </>
      )}
    </div>
  );
};
