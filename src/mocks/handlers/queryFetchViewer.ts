/* eslint-disable no-process-env */

import { graphql } from "msw";

import { FetchViewerDocument } from "~/mocks/codegen";
import { users, viewerId } from "~/mocks/constants";

export const queryFetchViewer = graphql.query(
  FetchViewerDocument,
  (req, res, ctx) => {
    if (!req.headers.get("Authorization")) {
      return res(ctx.data({ __typename: "Query", viewer: null }));
    }

    if (process.env.NEXT_PUBLIC_MSW_FIRST_NEED_REGISTER === "true") {
      return res(ctx.data({ __typename: "Query", viewer: null }));
    }

    return res(ctx.data({
      __typename: "Query",
      viewer: {
        __typename: "User",
        id: viewerId,
        alias: users.viewer.alias,
        displayName: users.viewer.displayName,
        avatar: users.viewer.avatar,
      },
    }));
  },
);
