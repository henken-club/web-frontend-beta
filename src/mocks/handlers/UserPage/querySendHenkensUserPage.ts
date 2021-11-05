import { graphql } from "msw";

import { AnswerType, UserSendHenkensPageDocument } from "~/mocks/codegen";
import { c, mockAvatars, mockBookcovers } from "~/mocks/constraints";

export const querySendHenkensUserPage = graphql.query(UserSendHenkensPageDocument, (req, res, ctx) => {
  const userId = Object.entries(c.users).find(([, { alias }]) => alias === req.variables.alias)?.[0];
  if (!userId || !(Object.keys(c.users).includes as (k: string) => k is keyof typeof c.users)(userId)) {
    return res(
      ctx.data({
        __typename: "Query",
        findUser: {
          __typename: "FindUserPayload",
          user: null,
        },
      }),
    );
  }

  const { alias, avatar, displayName } = c.users[userId];
  return res(
    ctx.data({
      __typename: "Query",
      findUser: {
        __typename: "FindUserPayload",
        user: {
          __typename: "User",
          id: userId,
          alias,
          displayName,
          avatar,
          postsHenkens: {
            __typename: "HenkenConnection",
            totalCount: 5,
            pageInfo: { __typename: "PageInfo", hasNextPage: true, endCursor: "cursor" },
            edges: [{
              __typename: "HenkenEdge",
              node: {
                __typename: "Henken",
                id: "henken1",
                comment: "",
                createdAt: "2021-10-01T07:00:00:0000Z",
                postsTo: {
                  __typename: "User",
                  id: "user2",
                  alias: "user_2",
                  displayName: "User 2",
                  avatar: mockAvatars[2],
                },
                answer: {
                  __typename: "Answer",
                  comment: "",
                  type: AnswerType.Right,
                },
                content: {
                  __typename: "Book",
                  id: "",
                  title: "",
                  cover: mockBookcovers[1],
                },
              },
            }],
          },
        },
      },
    }),
  );
});
