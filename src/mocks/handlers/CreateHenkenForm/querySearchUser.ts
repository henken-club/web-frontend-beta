import { graphql } from "msw";

import { CreateHenkenFormSearchUserDocument } from "~/mocks/codegen";
import { mockAvatars } from "~/mocks/constants";

export const querySearchUser = graphql.query(
  CreateHenkenFormSearchUserDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        searchUsers: {
          __typename: "SearchUsersPayload",
          nodes: [{
            __typename: "SearchUsersResult",
            user: {
              __typename: "User",
              id: "search_1",
              alias: "search_1",
              displayName: "SearchUser1",
              avatar: mockAvatars[1],
            },
          }, {
            __typename: "SearchUsersResult",
            user: {
              __typename: "User",
              id: "search_2",
              alias: "search_2",
              displayName: "SearchUser2",
              avatar: mockAvatars[2],
            },
          }, {
            __typename: "SearchUsersResult",
            user: {
              __typename: "User",
              id: "search_3",
              alias: "search_3",
              displayName: "SearchUser3",
              avatar: mockAvatars[3],
            },
          }, {
            __typename: "SearchUsersResult",
            user: {
              __typename: "User",
              id: "search_4",
              alias: "search_4",
              displayName: "SearchUser4",
              avatar: mockAvatars[4],
            },
          }],
        },
      }),
    );
  },
);
