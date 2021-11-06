import React from "react";

import { Author } from "./Author";
import { Book } from "./Book";
import { BookSeries } from "./BookSeries";

export const Content: React.VFC<{
  className?: string;
  content:
    | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
    | {
      type: "book";
      content: {
        id: string;
        title: string;
        cover: string | null;
        authors: {
          id: string;
          name: string;
          role: null;
        }[];
      };
    }
    | { type: "bookseries"; content: { id: string; title: string; }; }
    | { type: "author"; content: { id: string; name: string; }; };
}> = ({ content, ...props }) => {
  return (
    <>
      {content.type === "book" && <Book {...content.content} {...props} />}
      {content.type === "bookseries" && <BookSeries {...content.content} {...props} />}
      {content.type === "author" && <Author {...content.content} {...props} />}
    </>
  );
};
