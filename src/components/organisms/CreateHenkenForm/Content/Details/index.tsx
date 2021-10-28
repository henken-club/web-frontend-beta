import clsx from "clsx";
import React from "react";

import { Author } from "./Author";
import { Book } from "./Book";
import { BookSeries } from "./BookSeries";

export const Content: React.VFC<{
  className?: string;
  content:
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
      {content.type === "author" && <Author {...props} author={content.value} />}
      {content.type === "book" && <Book {...props} book={content.value} />}
      {content.type === "bookseries" && <BookSeries {...props} bookSeries={content.value} />}
    </div>
  );
};
