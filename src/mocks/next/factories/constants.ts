/* cSpell:disable */

import { AnswerType } from "../../codegen";

import { mockAvatars, mockBookcovers } from "~/mocks/resources";

export const users: {
  [key in `user${number}`]: {
    alias: string;
    displayName: string;
    avatar: string;
  };
} = {
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

export const henkens: {
  [key in `henken${number}`]: {
    comment: string;
    content: { type: "book"; id: keyof typeof books; };
    postedBy: keyof typeof users;
    postsTo: keyof typeof users;
    answer: {
      id: `answer${number}`;
      comment: string;
      type: AnswerType;
    } | null;
  };
} = {
  henken1: {
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: "user2",
    postsTo: "user3",
    content: { type: "book", id: "book1" },
    answer: { id: "answer1", comment: "はい", type: AnswerType.Right },
  },
  henken2: {
    comment: "読んでるんだろ？",
    postedBy: "user2",
    postsTo: "user3",
    content: { type: "book", id: "book2" },
    answer: null,
  },
} as const;
