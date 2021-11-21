import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps, ContextType } from "react";
import { RecoilRoot } from "recoil";

import { CreateHenkenFormContext } from "./context";

import { mockAvatars, mockBookcovers } from "~~/.mock/assets";
import { queryCreateHenkenFormSearchContent, queryCreateHenkenFormSearchUser } from "~~/.msw/handlers";
import { Component } from ".";

export default {
  title: "organisms/CreateHenkenForm",
  component: Component,
  argTypes: {},
  parameters: {
    msw: [
      queryCreateHenkenFormSearchUser,
      queryCreateHenkenFormSearchContent,
    ],
  },
} as Meta;

type StoryProps = ComponentProps<typeof Component> & {
  contextValue: ContextType<typeof CreateHenkenFormContext>;
};

export const LoadingFrom: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
LoadingFrom.storyName = "ログインユーザを取得中";
LoadingFrom.args = {
  contextValue: {
    from: undefined,
    to: {
      id: "user1",
      alias: "user1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    content: {
      type: "book",
      value: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: null,
  },
};

export const NoFrom: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
NoFrom.storyName = "未ログイン";
NoFrom.args = {
  contextValue: {
    from: {
      id: "viewer",
      alias: "viewer",
      displayName: "Viewer",
      avatar: mockAvatars.viewer,
    },
    to: {
      id: "user1",
      alias: "user1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    content: {
      type: "book",
      value: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: null,
  },
};

export const NoTo: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
NoTo.storyName = "送り先を指定していない";
NoTo.args = {
  contextValue: {
    from: {
      id: "viewer",
      alias: "viewer",
      displayName: "Viewer",
      avatar: mockAvatars.viewer,
    },
    to: null,
    content: {
      type: "book",
      value: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: null,
  },
};

export const Creatable: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
Creatable.storyName = "送信可能";
Creatable.args = {
  contextValue: {
    from: {
      id: "viewer",
      alias: "viewer",
      displayName: "Viewer",
      avatar: mockAvatars.viewer,
    },
    to: {
      id: "user1",
      alias: "user1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    content: {
      type: "book",
      value: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: action("create-henken"),
    created: null,
  },
};

export const Created: Story<StoryProps> = ({ contextValue, ...props }) => {
  return (
    <RecoilRoot>
      <CreateHenkenFormContext.Provider value={contextValue}>
        <Component {...props} />
      </CreateHenkenFormContext.Provider>
    </RecoilRoot>
  );
};
Created.storyName = "送信済み";
Created.args = {
  contextValue: {
    from: {
      id: "viewer",
      alias: "viewer",
      displayName: "Viewer",
      avatar: mockAvatars.viewer,
    },
    to: {
      id: "user1",
      alias: "user1",
      displayName: "User 1",
      avatar: mockAvatars[1],
    },
    content: {
      type: "book",
      value: {
        id: "book1",
        title: "虐殺器官",
        cover: mockBookcovers[1],
      },
    },
    comment: "",
    setContent: action("set-content"),
    setTo: action("set-to-user"),
    setComment: action("set-comment"),
    createHenken: null,
    created: { id: "created" },
  },
};
