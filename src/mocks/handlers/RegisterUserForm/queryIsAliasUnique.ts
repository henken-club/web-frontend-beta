import { graphql } from "msw";

import { RegisterUserIsAliasUniqueDocument } from "~/mocks/codegen";
import { users } from "~/mocks/constants";

const aliases = Object.keys(users);

export const queryIsAliasUnique = graphql.query(
  RegisterUserIsAliasUniqueDocument,
  (req, res, ctx) => {
    return res(ctx.data({
      __typename: "Query",
      isAliasUnique: aliases.includes(req.variables.alias),
    }));
  },
);
