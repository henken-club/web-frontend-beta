/* cSpell:disable */

import { AnswerType } from "./codegen";

// images

export const mockAuth0Picture = "/.mock/avatar/auth0Picture.png" as const;

export const mockAvatars = {
  viewer: "/.mock/avatar/viewer.png",
  1: "/.mock/avatar/1.png",
  2: "/.mock/avatar/2.png",
  3: "/.mock/avatar/3.png",
  4: "/.mock/avatar/4.png",
  5: "/.mock/avatar/5.png",
  6: "/.mock/avatar/6.png",
} as const;

export const mockBookcovers = {
  1: "/.mock/bookcover/1.jpg",
  2: "/.mock/bookcover/2.jpg",
  3: "/.mock/bookcover/3.jpg",
  4: "/.mock/bookcover/4.jpg",
  5: "/.mock/bookcover/5.jpg",
  6: "/.mock/bookcover/6.jpg",
} as const;

// eslint-disable-next-line id-length
export const c = {
  users: {
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
  },
  henkens: {
    created: {
      comment: "テスト",
      postedById: "viewer",
      postsToId: "user1",
      content: { type: "book", id: "book1" },
      answer: "answer1",
    },
    henken1: {
      comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
      postedById: "user2",
      postsToId: "user3",
      content: { type: "book", id: "book1" },
      answer: "answer2",
    },
    henken2: {
      comment: "読んでるんだろ？",
      postedById: "user2",
      postsToId: "user3",
      content: { type: "book", id: "book2" },
      answer: null,
    },
  },
  answers: {
    created: {
      comment: "テスト",
      type: AnswerType.Right,
    },
    answer1: {
      comment: "はい",
      type: AnswerType.Right,
    },
    answer2: {
      comment: "いえ…",
      type: AnswerType.Wrong,
    },
  },
  books: {
    book1: {
      title: "虐殺器官",
      cover: mockBookcovers[1],
      writings: [{ authorId: "author1" }],
    },
    book2: {
      title: "銃・病原菌・鉄",
      cover: mockBookcovers[2],
      writings: [{ authorId: "author4" }],
    },
    book3: {
      title: "インターネットは言葉をどう変えたか デジタル時代の〈言語〉地図",
      cover: mockBookcovers[3],
      writings: [{ authorId: "author5" }, { authorId: "author6" }],
    },
    book4: {
      title: "僕たちのインターネット史",
      cover: mockBookcovers[4],
      writings: [{ authorId: "author7" }, { authorId: "author8" }],
    },
  },
  authors: {
    author1: {
      name: "伊藤計劃",
    },
    author2: {
      name: "石黒正数",
    },
    author3: {
      name: "あずまきよひこ",
    },
    author4: {
      name: "ジャレド・ダイアモンド",
    },
    author5: {
      name: "Gretchen McCulloch",
    },
    author6: {
      name: "千葉敏生",
    },
    author7: {
      name: "ばるぼら",
    },
    author8: {
      name: "さわやか",
    },
  },
  bookseries: {
    bookseries1: {
      title: "それでも町は廻っている",
    },
  },
  activities: {
    activity1: {
      unread: false,
      createdAt: "2021-01-01T12:00:00",
      henkenId: "henken1",
    },
  },
} as const;