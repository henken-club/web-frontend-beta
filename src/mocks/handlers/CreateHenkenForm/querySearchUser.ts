import { graphql } from "msw";

import { CreateHenkenFormSearchUserDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";
import { Random } from "~/mocks/random";

const resultUser = (id: keyof typeof c.users) => ({
  __typename: "SearchUsersResult" as const,
  user: { __typename: "User" as const, id, ...c.users[id] },
});

const select = [
  resultUser("user1"),
  resultUser("user2"),
  resultUser("user3"),
];

export const querySearchUser = graphql.query(
  CreateHenkenFormSearchUserDocument,
  (req, res, ctx) => {
    const generator = new Random(req.variables);

    return res(
      ctx.data({
        __typename: "Query",
        searchUsers: {
          __typename: "SearchUsersPayload",
          nodes: generator.shuffle(select).slice(0, generator.integer(0, 4)),
        },
      }),
    );
  },
);
