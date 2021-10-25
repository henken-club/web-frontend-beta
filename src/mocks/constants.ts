/* cSpell:disable */

import { AnswerType } from "./codegen";

// images

export const mockAuth0Picture = "/.mock/avatar/auth0Picture.png";

export const mockAvatars = {
  viewer: "/.mock/avatar/viewer.png",
  1: "/.mock/avatar/1.png",
  2: "/.mock/avatar/2.png",
  3: "/.mock/avatar/3.png",
  4: "/.mock/avatar/4.png",
  5: "/.mock/avatar/5.png",
  6: "/.mock/avatar/6.png",
};

export const mockBookcovers = {
  1: "/.mock/bookcover/1.jpg",
  2: "/.mock/bookcover/2.jpg",
  3: "/.mock/bookcover/3.jpg",
  4: "/.mock/bookcover/4.jpg",
  5: "/.mock/bookcover/5.jpg",
  6: "/.mock/bookcover/6.jpg",
};

// data

// users
export const viewerId = "viewer";
export const users: {
  [key in `user${number}` | typeof viewerId]: {
    alias: string;
    displayName: string;
    avatar: string;
  };
} = {
  viewer: {
    alias: "viewer",
    displayName: "Viewer",
    avatar: mockAvatars.viewer,
  },
  user1: {
    alias: "user_1",
    displayName: "User 1",
    avatar: mockAvatars[1],
  },
  user2: {
    alias: "user_2",
    displayName: "User 2",
    avatar: mockAvatars[2],
  },
  user3: {
    alias: "user_3",
    displayName: "User 3",
    avatar: mockAvatars[3],
  },
};

export const answers: {
  [key in `answer${number}`]: {
    comment: string;
    type: AnswerType;
  };
} = {};

// henkens
export const createdHenkenId = "created";
export const henkens: {
  [key in `henken${number}` | typeof createdHenkenId]: {
    comment: string;
    content: { type: "book"; id: keyof typeof books; };
    postedById: keyof typeof users;
    postsToId: keyof typeof users;
    answer: {
      id: `answer${number}`;
      comment: string;
      type: AnswerType;
    } | null;
  };
} = {
  created: {
    comment: "テスト",
    postedById: "viewer",
    postsToId: "user3",
    content: { type: "book", id: "book1" },
    answer: { id: "answer1", comment: "はい", type: AnswerType.Right },
  },
  henken1: {
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedById: "user2",
    postsToId: "user3",
    content: { type: "book", id: "book1" },
    answer: { id: "answer1", comment: "はい", type: AnswerType.Right },
  },
  henken2: {
    comment: "読んでるんだろ？",
    postedById: "user2",
    postsToId: "user3",
    content: { type: "book", id: "book2" },
    answer: null,
  },
} as const;

// books
export const books: {
  [key in `book${number}`]: {
    title: string;
    cover: string | null;
    writings: { authorId: keyof typeof authors; }[];
  };
} = {
  book1: {
    title: "虐殺器官",
    cover: mockBookcovers[1],
    writings: [{ authorId: "author1" }],
  },
  book2: {
    title: "銃・病原菌・鉄",
    cover: mockBookcovers[2],
    writings: [{ authorId: "author6" }],
  },
  book3: {
    title: "インターネットは言葉をどう変えたか デジタル時代の〈言語〉地図",
    cover: mockBookcovers[3],
    writings: [{ authorId: "author7" }, { authorId: "author8" }],
  },
  book4: {
    title: "僕たちのインターネット史",
    cover: mockBookcovers[4],
    writings: [{ authorId: "author9" }, { authorId: "author10" }],
  },
};

// authors
export const authors: {
  [key in `author${number}`]: {
    name: string;
  };
} = {
  author1: { name: "伊藤計劃" },
  author2: { name: "石黒正数" },
  author3: { name: "あずまきよひこ" },
  author4: { name: "トマトスープ" },
  author5: { name: "ミシェル・ウエルベック" },
  author6: { name: "ジャレド・ダイアモンド" },
  author7: { name: "Gretchen McCulloch" },
  author8: { name: "千葉敏生" },
  author9: { name: "ばるぼら" },
  author10: { name: "さわやか" },
};

// notifications
export const activities: {
  [key in `activity${number}`]: {
    unread: boolean;
    createdAt: string;
    henkenId: keyof typeof henkens;
  };
} = {
  activity1: {
    unread: false,
    createdAt: "2021-01-01T12:00:00",
    henkenId: "henken1",
  },
};
