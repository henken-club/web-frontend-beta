import React from "react";

export type AnswerType = "right" | "wrong";

export type HenkenContentTempContentType = "book" | "bookseries" | "author";
export type HenkenContentTempContent = {
  type: "tempContent";
  value: { id: string; name: string; type: HenkenContentTempContentType; };
};
export type HenkenContentBook = {
  type: "book";
  value: {
    id: string;
    title: string;
    cover: string | null;
    authors: {
      id: string;
      name: string;
      role: null;
    }[];
  };
};
export type HenkenContentBookSeries = {
  type: "bookseries";
  value: { id: string; title: string; };
};
export type HenkenContentAuthor = {
  type: "author";
  value: { id: string; name: string; };
};

export type HenkenContent =
  | HenkenContentTempContent
  | HenkenContentBook
  | HenkenContentBookSeries
  | HenkenContentAuthor;

export const HenkenPageContext = React.createContext<{
  henken: undefined | {
    id: string;
    comment: string;
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postsTo: { id: string; alias: string; displayName: string; avatar: string; };
    answer: null | { type: AnswerType; comment: string; };
    content: HenkenContent;
  };
}>({
  henken: undefined,
});
