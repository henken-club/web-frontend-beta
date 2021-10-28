import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import { RecoilRoot } from "recoil";
import { Provider as UrqlProvider } from "urql";

import { viewerState } from "~/auth/useViewer";
import { c } from "~/mocks/constraints";
import { queryGlobalNavNotifications } from "~/mocks/handlers";
import { manualCreateHenkenModalState } from "~/modals/CreateHenken";
import { manualRegisterUserModalState } from "~/modals/RegisterUser";
import { createUrqlClient } from "~/urql/UrqlProvider";
import { View } from ".";

export default {
  title: "molecules/GlobalNav",
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
          alias: c.users.viewer.alias,
          displayName: c.users.viewer.displayName,
          avatar: c.users.viewer.avatar,
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
  msw: [queryGlobalNavNotifications],
};
