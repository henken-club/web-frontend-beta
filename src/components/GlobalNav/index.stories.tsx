import { Meta, Story } from "@storybook/react";
import { graphql } from "msw";
import React, { ComponentProps } from "react";
import { RecoilRoot } from "recoil";
import { Provider as UrqlProvider } from "urql";

import { viewerState } from "~/auth/useViewer";
import { mockAvatars } from "~/mocks/assets";
import { manualCreateHenkenModalState } from "~/modals/CreateHenken";
import { manualRegisterUserModalState } from "~/modals/RegisterUser";
import { GlobalNavFetchNotificationsDocument } from "~/msw/codegen";
import { createUrqlClient } from "~/urql/UrqlProvider";
import { View } from ".";

export default {
  title: "organisms/GlobalNav",
  component: View,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    needLogin: { table: { disable: true } },
    needRegister: { table: { disable: true } },
  },
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const NeedLogin: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(manualRegisterUserModalState, false);
        set(manualCreateHenkenModalState, false);
      }}
    >
      <View {...props} />
    </RecoilRoot>
  );
};
NeedLogin.storyName = "ログインが必要";
NeedLogin.args = {
  needLogin: true,
  needRegister: false,
};

export const NeedRegister: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(manualRegisterUserModalState, false);
        set(manualCreateHenkenModalState, false);
      }}
    >
      <View {...props} />
    </RecoilRoot>
  );
};
NeedRegister.storyName = "登録が必要";
NeedRegister.args = {
  needLogin: false,
  needRegister: true,
};

const defaultUrqlClient = createUrqlClient();
export const LoggedIn: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(viewerState, {
          id: "viewer",
          alias: "viewer",
          displayName: "Viewer",
          avatar: mockAvatars.viewer,
        });
        set(manualRegisterUserModalState, false);
        set(manualCreateHenkenModalState, false);
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
  needLogin: false,
  needRegister: false,
};
LoggedIn.parameters = {
  msw: [graphql.query(
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
  )],
};
