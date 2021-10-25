import { graphql } from "msw";

import { GlobalNavFetchNotificationsDocument } from "~/mocks/codegen";
import { activities, henkens, mockAvatars } from "~/mocks/constants";

export const queryNotifications = graphql.query(
  GlobalNavFetchNotificationsDocument,
  (req, res, ctx) => {
    return res(ctx.data({
      __typename: "Query",
      viewer: {
        __typename: "User",
        activities: {
          __typename: "ActivityConnection",
          pageInfo: {
            __typename: "PageInfo",
            hasNextPage: true,
            endCursor: "cursor",
          },
          edges: [
            {
              __typename: "ActivityEdge",
              node: {
                __typename: "ReceivedHenkenActivity",
                id: "activity1",
                unread: activities.activity1.unread,
                createdAt: activities.activity1.createdAt,
                henken: {
                  __typename: "Henken",
                  id: activities.activity1.henkenId,
                  ...henkens[activities.activity1.henkenId],
                  postedBy: {
                    __typename: "User",
                    id: henkens[activities.activity1.henkenId].postedById,
                    alias: "user_2",
                    displayName: "User2",
                    avatar: mockAvatars[2],
                  },
                },
              },
            },
          ],
        },
      },
    }));
  },
);
