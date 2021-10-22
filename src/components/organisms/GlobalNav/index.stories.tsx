import { Meta, Story } from "@storybook/react";
import { graphql } from "msw";
import React, { ComponentProps } from "react";
import { RecoilRoot } from "recoil";
import { Provider as UrqlProvider } from "urql";

import { viewerState } from "~/auth/useViewer";
import {
  GlobalNavFetchNotificationsDocument,
  GlobalNavFetchNotificationsQuery,
  GlobalNavFetchNotificationsQueryVariables,
} from "~/mocks/codegen";
import { createUrqlClient } from "~/urql/UrqlProvider";
import { View } from ".";

export default {
  title: "GlobalNav",
  component: View,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const NotLoggedIn: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
NotLoggedIn.storyName = "未ログイン";
NotLoggedIn.args = {
  isLoggedIn: false,
};

const defaultUrqlClient = createUrqlClient();
export const LoggedIn: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(viewerState, {
          id: "from",
          alias: "from",
          displayName: "From User",
          avatar: "/.mock/avatar_1.png",
        });
      }}
    >
      <UrqlProvider value={defaultUrqlClient}>
        <View {...props} />
      </UrqlProvider>
    </RecoilRoot>
  );
};
LoggedIn.storyName = "ログイン済み";
LoggedIn.args = {
  isLoggedIn: true,
};
LoggedIn.parameters = {
  msw: [
    graphql.query<GlobalNavFetchNotificationsQuery, GlobalNavFetchNotificationsQueryVariables>(
      GlobalNavFetchNotificationsDocument,
      (req, res, ctx) => {
        return res(
          ctx.data({
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
                edges: [{
                  __typename: "ActivityEdge",
                  node: {
                    __typename: "ReceivedHenkenActivity",
                    id: "activity-1",
                    unread: false,
                    createdAt: "2021-01-01T12:00:00",
                    henken: {
                      __typename: "Henken",
                      id: "activity-1-henken",
                      comment: "Comment",
                      postedBy: {
                        __typename: "User",
                        id: "user_2",
                        alias: "user_2",
                        displayName: "User2",
                        avatar: "/.mock/avatar_2.png",
                      },
                    },
                  },
                }],
              },
            },
          }),
        );
      },
    ),
  ],
};
