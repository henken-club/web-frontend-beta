import { graphql } from "msw";

import { FetchViewerDocument, FetchViewerQuery, FetchViewerQueryVariables } from "../codegen";

export const handlers = [graphql.query<FetchViewerQuery, FetchViewerQueryVariables>(
  FetchViewerDocument,
  (req, res, ctx) => {
    if (req.headers.get("Authorization")) {
      return res(ctx.data({
        __typename: "Query",
        viewer: {
          __typename: "User",
          id: "viewer_id",
          alias: "viewer",
          displayName: "Viewer",
          avatar: "/.mocks/viewer.png",
        },
      }));
    } else {
      return res(ctx.data({
        __typename: "Query",
        viewer: null,
      }));
    }
  },
)];
