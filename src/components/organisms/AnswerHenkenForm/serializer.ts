import { HenkenContentType } from "./context";

import { AnswerHenkenFormFetchHenkenQuery, ContentType } from "~/components/codegen";

export const serializeHenken = (
  henken: AnswerHenkenFormFetchHenkenQuery["henken"],
) => {
  return {
    id: henken.id,
    comment: henken.comment,
    from: {
      id: henken.postedBy.id,
      alias: henken.postedBy.alias,
      displayName: henken.postedBy.displayName,
      avatar: henken.postedBy.avatar,
    },
    to: {
      id: henken.postsTo.id,
      alias: henken.postsTo.alias,
      displayName: henken.postsTo.displayName,
      avatar: henken.postsTo.avatar,
    },
    content: serializeHenkenContent(henken.content),
  };
};

export const serializeHenkenContent = (
  content: AnswerHenkenFormFetchHenkenQuery["henken"]["content"],
): HenkenContentType => {
  switch (content.__typename) {
    case "TempContent":
      return {
        type: "tempContent",
        value: {
          id: content.id,
          name: content.name,
          type: ((type) => {
            switch (type) {
              case ContentType.Author:
                return "author";
              case ContentType.Book:
                return "book";
              case ContentType.BookSeries:
                return "bookSeries";
            }
          })(content.type),
        },
      };
    case "Book":
      return {
        type: "book",
        value: { id: content.id, title: content.title, cover: content.cover || null },
      };
    case "BookSeries":
      return {
        type: "bookSeries",
        value: { id: content.id, title: content.title },
      };
    case "Author":
      return {
        type: "author",
        value: { id: content.id, name: content.name },
      };
  }
};
