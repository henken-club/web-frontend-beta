import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import { RecoilRoot } from "recoil";

import { viewerState } from "~/auth/useViewer";
import { mockAvatars } from "~/mocks/constraints";
import { View } from ".";

export default {
  title: "templates/HenkenPage/Timeline",
  component: View,
  argTypes: {},
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(viewerState, null);
      }}
    >
      <View css={{ width: "480px" }} {...props} />
    </RecoilRoot>
  );
};
Primary.storyName = "返答あり";
Primary.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: { comment: "はいじゃないが", type: "right" },
};

export const NoAnswer: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(viewerState, null);
      }}
    >
      <View css={{ width: "480px" }} {...props} />
    </RecoilRoot>
  );
};
NoAnswer.storyName = "返答無し";
NoAnswer.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: null,
};

export const PostedByYou: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(viewerState, { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] });
      }}
    >
      <View css={{ width: "480px" }} {...props} />
    </RecoilRoot>
  );
};
PostedByYou.storyName = "送り元が自分";
PostedByYou.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: { comment: "はいじゃないが", type: "right" },
};

export const PostedToYou: Story<StoryProps> = ({ ...props }) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(viewerState, { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] });
      }}
    >
      <View css={{ width: "480px" }} {...props} />
    </RecoilRoot>
  );
};
PostedToYou.storyName = "送り先が自分";
PostedToYou.args = {
  comment: "はい",
  postedBy: { id: "1", alias: "user_1", displayName: "User 1", avatar: mockAvatars[1] },
  postsTo: { id: "2", alias: "user_2", displayName: "User 2", avatar: mockAvatars[2] },
  answer: { comment: "はいじゃないが", type: "right" },
};
