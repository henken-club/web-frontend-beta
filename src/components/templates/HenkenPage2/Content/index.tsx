import React from "react";

import { HenkenContent } from "../types";

import { Author } from "./Author";
import { Book } from "./Book";
import { BookSeries } from "./BookSeries";
import { TempContent } from "./TempContent";

export const Content: React.VFC<{
  className?: string;
  content: HenkenContent;
}> = ({ content, ...props }) => {
  return (
    <>
      {content.type === "tempContent" && <TempContent {...content.value} {...props} />}
      {content.type === "book" && <Book {...content.value} {...props} />}
      {content.type === "bookseries" && <BookSeries {...content.value} {...props} />}
      {content.type === "author" && <Author {...content.value} {...props} />}
    </>
  );
};
