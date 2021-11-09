import { graphql } from "msw";

import { CreateHenkenFormSearchContentDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";
import { Random } from "~/mocks/random";

const resultBook = (id: keyof typeof c.books) => ({
  __typename: "SearchContentResult" as const,
  content: { __typename: "Book" as const, id, ...c.books[id] },
});

const resultBookSeries = (id: keyof typeof c.bookseries) => ({
  __typename: "SearchContentResult" as const,
  content: { __typename: "BookSeries" as const, id, ...c.bookseries[id] },
});

const resultAuthor = (id: keyof typeof c.authors) => ({
  __typename: "SearchContentResult" as const,
  content: { __typename: "Author" as const, id, ...c.authors[id] },
});

const searchNodes = [
  resultBook("book1"),
  resultBook("book2"),
  resultBook("book3"),
  resultBook("book4"),
  resultBookSeries("bookseries1"),
  resultAuthor("author1"),
  resultAuthor("author2"),
  resultAuthor("author3"),
  resultAuthor("author4"),
  resultAuthor("author5"),
  resultAuthor("author6"),
  resultAuthor("author7"),
  resultAuthor("author8"),
];

export const querySearchContent = graphql.query(
  CreateHenkenFormSearchContentDocument,
  (req, res, ctx) => {
    const generator = new Random(req.variables);

    return res(
      ctx.data({
        __typename: "Query",
        searchContent: {
          __typename: "SearchContentPayload",
          results: generator.pick(searchNodes, generator.integer(0, 4)),
        },
      }),
    );
  },
);
