import { graphql } from "msw";

import { RegisterUserIsAliasUniqueDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";

const aliases = Object.keys(c.users);

export const queryIsAliasUnique = graphql.query(
  RegisterUserIsAliasUniqueDocument,
  (req, res, ctx) => {
    return res(ctx.data({
      __typename: "Query",
      isAliasUnique: aliases.includes(req.variables.alias),
    }));
  },
);
