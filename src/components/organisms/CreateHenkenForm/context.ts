import React from "react";

type ContentType =
  | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
  | { type: "bookseries"; value: { id: string; title: string; }; }
  | { type: "author"; value: { id: string; name: string; }; };

type From = { id: string; alias: string; displayName: string; avatar: string; };
type To = { id: string; alias: string; displayName: string; avatar: string; };
type CT = {
  from: undefined | null | From;
  to: null | To;
  content: null | ContentType;
  comment: string;
  setTo(payload: To): void;
  setContent(payload: ContentType): void;
  setComment(value: string): void;
  createHenken: null;
  created: null;
} | {
  from: From;
  to: null | To;
  content: ContentType;
  comment: string;
  setTo(payload: To): void;
  setContent(payload: ContentType): void;
  setComment(value: string): void;
  createHenken(): void;
  created: null;
} | {
  from: From;
  to: null | To;
  content: ContentType;
  comment: string;
  setTo(payload: To): void;
  setContent(payload: ContentType): void;
  setComment(value: string): void;
  createHenken: null;
  created: { id: string; };
};

export const CreateHenkenFormContext = React.createContext<CT>({
  from: undefined,
  to: null,
  content: null,
  comment: "",

  setTo: () => {},
  setContent: () => {},
  setComment: () => {},
  createHenken: null,

  created: null,
});
