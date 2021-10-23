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
    avatar: "/.mock/avatar_1.png",
  },
  user2: {
    alias: "user_2",
    displayName: "User 2",
    avatar: "/.mock/avatar_2.png",
  },
  user3: {
    alias: "user_3",
    displayName: "User 3",
    avatar: "/.mock/avatar_3.png",
  },
};

export const books: {
  [key in `book${number}`]: {
    title: string;
    cover: string | null;
  };
} = {
  book1: {
    title: "アー",
    cover: "/.mock/bookcover_1.jpg",
  },
  book2: {
    title: "イー",
    cover: "/.mock/bookcover_1.jpg",
  },
};

export const henkens: {
  [key in `henken${number}`]: {
    comment: string;
    content: { type: "book"; id: keyof typeof books; };
    postedBy: keyof typeof users;
    postsTo: keyof typeof users;
  };
} = {
  henken1: {
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: "user2",
    postsTo: "user3",
    content: { type: "book", id: "book1" },
  },
} as const;
