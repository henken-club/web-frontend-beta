import clsx from "clsx";
import React from "react";

import { NoImage } from "./NoImage";
import { NotSelected } from "./NotSelected";

import { BookCover } from "~/components/BookCover";

export const Image: React.VFC<{
  className?: string;
  content:
    | null
    | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
    | { type: "bookseries"; value: { id: string; title: string; }; }
    | { type: "author"; value: { id: string; name: string; }; };
}> = ({
  content,
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      {!content && <NotSelected {...props} />}
      {content && (
        <>
          {content.type === "book" && <BookCover className={clsx(["w-full"])} {...props} book={content.value} />}
          {content.type === "author" && <NoImage {...props} />}
          {content.type === "bookseries" && <NoImage {...props} />}
        </>
      )}
    </div>
  );
};
