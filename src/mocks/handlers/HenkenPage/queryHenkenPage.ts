import { graphql } from "msw";

import { HenkenPageDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";

export const queryHenkenPage = graphql.query(HenkenPageDocument, (req, res, ctx) => {
  const henkenId = req.variables.id;
  if (!(Object.keys(c.henkens).includes as (k: string) => k is keyof typeof c.henkens)(henkenId)) {
    return res(
      ctx.data({
        __typename: "Query",
        findHenken: {
          __typename: "FindHenkenPayload",
          henken: null,
        },
      }),
    );
  }

  const { postsToId, answer, comment, content, postedById } = c.henkens[henkenId];
  return res(
    ctx.data({
      __typename: "Query",
      findHenken: {
        __typename: "FindHenkenPayload",
        henken: {
          __typename: "Henken",
          id: henkenId,
          comment,
          answer: answer
            ? {
              __typename: "Answer",
              id: answer,
              type: c.answers[answer].type,
              comment: c.answers[answer].comment,
            }
            : null,
          postedBy: {
            __typename: "User",
            id: postedById,
            alias: c.users[postedById].alias,
            displayName: c.users[postedById].displayName,
            avatar: c.users[postedById].avatar,
          },
          postsTo: {
            __typename: "User",
            id: postsToId,
            alias: c.users[postsToId].alias,
            displayName: c.users[postsToId].displayName,
            avatar: c.users[postsToId].avatar,
          },
          content: (() => {
            switch (content.type) {
              case "book":
                return {
                  __typename: "Book",
                  id: content.id,
                  title: c.books[content.id].title,
                  cover: c.books[content.id].cover,
                  writings: {
                    __typename: "WritingConnection",
                    edges: c.books[content.id].writings.map(({ authorId }) => ({
                      __typename: "WritingEdge",
                      node: {
                        __typename: "Writing",
                        author: {
                          __typename: "Author",
                          id: authorId,
                          name: c.authors[authorId].name,
                        },
                      },
                    } as const)),
                  },
                } as const;
            }
          })(),
        },
      },
    }),
  );
});
