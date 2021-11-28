import { graphql } from "msw";

import { mockAvatars, mockBookcovers } from "~/mocks/assets";
import { AllUsersPagesDocument, AnswerType, UserPageDocument, UserSendHenkensPageDocument } from "~/msw/codegen";

const mocks: Record<string, { id: string; displayName: string; avatar: string; }> = {
  viewer: {
    id: "viewer",
    displayName: "Viewer",
    avatar: mockAvatars.viewer,
  },
  user1: {
    id: "user1",
    displayName: "User 1",
    avatar: mockAvatars[1],
  },
  user2: {
    id: "user2",
    displayName: "User 2",
    avatar: mockAvatars[2],
  },
  user3: {
    id: "user3",
    displayName: "User 3",
    avatar: mockAvatars[3],
  },
};

export const queryAllUserPages = graphql.query(AllUsersPagesDocument, (req, res, ctx) => {
  return res(
    ctx.data({
      __typename: "Query",
      manyUsers: {
        __typename: "UserConnection",
        edges: Object.keys(mocks).map((alias) => ({
          __typename: "UserEdge",
          node: {
            __typename: "User",
            alias,
          },
        })),
      },
    }),
  );
});

export const queryUserPage = graphql.query(UserPageDocument, (req, res, ctx) => {
  const alias = req.variables.alias;
  const payload = mocks[alias];

  if (!payload) {
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

  const { id, displayName, avatar } = payload;

  return res(
    ctx.data({
      __typename: "Query",
      findUser: {
        __typename: "FindUserPayload",
        user: {
          __typename: "User",
          id,
          alias,
          displayName,
          avatar,
          receivedHenkens: {
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
                postedBy: {
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

export const querySendHenkensUserPage = graphql.query(UserSendHenkensPageDocument, (req, res, ctx) => {
  const alias = req.variables.alias;
  const payload = mocks[alias];

  if (!payload) {
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

  const { id, displayName, avatar } = payload;

  return res(
    ctx.data({
      __typename: "Query",
      findUser: {
        __typename: "FindUserPayload",
        user: {
          __typename: "User",
          id,
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
