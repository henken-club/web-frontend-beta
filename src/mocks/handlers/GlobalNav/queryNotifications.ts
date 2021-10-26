import { graphql } from "msw";

import { GlobalNavFetchNotificationsDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";

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
                unread: c.activities.activity1.unread,
                createdAt: c.activities.activity1.createdAt,
                henken: {
                  __typename: "Henken",
                  id: c.activities.activity1.henkenId,
                  ...c.henkens[c.activities.activity1.henkenId],
                  postedBy: {
                    __typename: "User",
                    id: c.henkens[c.activities.activity1.henkenId].postedById,
                    alias: c.users[c.henkens[c.activities.activity1.henkenId].postedById].alias,
                    displayName: c.users[c.henkens[c.activities.activity1.henkenId].postedById].displayName,
                    avatar: c.users[c.henkens[c.activities.activity1.henkenId].postedById].avatar,
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
