import { graphql } from "msw";

import { UserPageDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";

export const queryUserPage = graphql.query(UserPageDocument, (req, res, ctx) => {
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
        },
      },
    }),
  );
});
