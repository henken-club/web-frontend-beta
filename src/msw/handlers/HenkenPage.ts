import { graphql } from "msw";

import { mockAvatars } from "~/mocks/assets";
import { AllHenkenPagesDocument, AnswerType, HenkenPageAnswerHenkenDocument, HenkenPageDocument } from "~/msw/codegen";

const mocks: Record<
  string,
  {
    comment: string;
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postsTo: { id: string; alias: string; displayName: string; avatar: string; };
    answer?: { id: string; comment: string; type: AnswerType; };
  }
> = {
  "viewer-not-answer": {
    comment: "はい",
    postedBy: {
      id: "user1",
      alias: "user1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    postsTo: {
      id: "viewer",
      alias: "viewer",
      displayName: "Viewer",
      avatar: mockAvatars.viewer,
    },
  },
};

export const queryAllHenkenPages = graphql.query(AllHenkenPagesDocument, (req, res, ctx) => {
  return res(
    ctx.data({
      __typename: "Query",
      manyHenkens: {
        __typename: "HenkenConnection",
        edges: Object.keys(mocks).map((id) => ({
          __typename: "HenkenEdge",
          node: { __typename: "Henken", id },
        })),
      },
    }),
  );
});

export const queryHenkenPage = graphql.query(HenkenPageDocument, (req, res, ctx) => {
  const payload = mocks[req.variables.id];
  if (!payload) {
    return res(ctx.data({ __typename: "Query", findHenken: { __typename: "FindHenkenPayload", henken: null } }));
  }

  const { comment, postedBy, postsTo, answer } = payload;

  return res(
    ctx.data({
      __typename: "Query",
      findHenken: {
        __typename: "FindHenkenPayload",
        henken: {
          __typename: "Henken",
          id: req.variables.id,
          comment,
          postedBy: { __typename: "User", ...postedBy },
          postsTo: { __typename: "User", ...postsTo },
          answer: answer
            ? { __typename: "Answer", ...answer }
            : null,
          content: {
            __typename: "Author",
            id: "author1",
            name: "コトヤマ",
          },
        },
      },
    }),
  );
});

export const mutationAnswerHenken = graphql.mutation(
  HenkenPageAnswerHenkenDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Mutation",
        answerHenken: {
          __typename: "AnswerHenkenPayload",
          answer: {
            __typename: "Answer",
            id: "created",
          },
        },
      }),
    );
  },
);
