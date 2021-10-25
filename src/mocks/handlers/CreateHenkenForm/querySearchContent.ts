import { graphql } from "msw";

import { CreateHenkenFormSearchContentDocument } from "~/mocks/codegen";
import { mockBookcovers } from "~/mocks/constants";

export const querySearchContent = graphql.query(
  CreateHenkenFormSearchContentDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        searchContent: {
          __typename: "SearchContentPayload",
          nodes: [
            {
              __typename: "SearchResult",
              content: {
                __typename: "Book",
                id: "search_book_1",
                title: "Search Book 1",
                cover: mockBookcovers[1],
              },
            },
            {
              __typename: "SearchResult",
              content: {
                __typename: "BookSeries",
                id: "search_bookseries_1",
                title: "Search BookSeries 1",
              },
            },
            {
              __typename: "SearchResult",
              content: {
                __typename: "Author",
                id: "search_author_1",
                name: "Search Author 1",
              },
            },
          ],
        },
      }),
    );
  },
);
