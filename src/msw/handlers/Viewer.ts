import { graphql } from "msw";

import { mockAvatars } from "~/mocks/assets";
import { FetchViewerDocument } from "~/mocks/codegen";

export const queryFetchViewer = graphql.query(
  FetchViewerDocument,
  (req, res, ctx) => {
    if (!req.headers.get("Authorization")) {
      return res(ctx.data({ __typename: "Query", viewer: null }));
    }

    // eslint-disable-next-line no-process-env
    if (process.env.NEXT_PUBLIC_MSW_FIRST_NEED_REGISTER === "true") {
      return res(ctx.data({ __typename: "Query", viewer: null }));
    }

    return res(ctx.data({
      __typename: "Query",
      viewer: {
        __typename: "User",
        id: "viewer",
        alias: "viewer",
        displayName: "Viewer",
        avatar: mockAvatars.viewer,
      },
    }));
  },
);
