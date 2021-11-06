import { graphql } from "msw";

import { CreateHenkenFormSearchUserDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";
import { Random } from "~/mocks/random";

const resultUser = (id: keyof typeof c.users) => ({
  __typename: "SearchUserResult" as const,
  user: { __typename: "User" as const, id, ...c.users[id] },
});

const searchNodes = [
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
        searchUser: {
          __typename: "SearchUserPayload",
          results: generator.pick(searchNodes, generator.integer(0, 4)),
        },
      }),
    );
  },
);
