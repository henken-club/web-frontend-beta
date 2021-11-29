import { graphql } from "msw";

import { mockAvatars } from "~/mocks/assets";
import { GlobalNavFetchNotificationsDocument } from "~/msw/codegen";

export const queryGlobalNavNotifications = graphql.query(
  GlobalNavFetchNotificationsDocument,
  (req, res, ctx) => {
    return res(ctx.data({
      __typename: "Query",
      notifications: {
        __typename: "NotificationConnection",
        pageInfo: { __typename: "PageInfo", hasNextPage: true, endCursor: "cursor" },
        edges: [
          {
            __typename: "NotificationEdge",
            node: {
              __typename: "ReceivedHenkenNotification",
              id: "notification1",
              read: true,
              createdAt: "2021-01-01T12:00:00",
              henken: {
                __typename: "Henken",
                id: "viewer-not-answer",
                comment: "はい",
                postedBy: {
                  __typename: "User",
                  id: "user1",
                  alias: "user1",
                  displayName: "User 1",
                  avatar: mockAvatars[1],
                },
              },
            },
          },
        ],
      },
    }));
  },
);
