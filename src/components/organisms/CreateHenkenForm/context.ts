import React from "react";

export type ContentType =
  | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
  | { type: "bookseries"; value: { id: string; title: string; }; }
  | { type: "author"; value: { id: string; name: string; }; };

type ContextType = {
  from: undefined | null | {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };

  to: null | {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };
  setTo(payload: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  }): void;

  content: null | ContentType;
  setContent(payload: ContentType): void;

  comment: string;
  setComment(value: string): void;

  createHenken(): void;
  formDisabled: boolean;
  created: boolean;
};

export const CreateHenkenFormContext = React.createContext<ContextType>({
  from: undefined,

  to: null,
  setTo: () => {},

  content: null,
  setContent: () => {},

  comment: "",
  setComment: () => {},

  created: false,
  createHenken: () => {},
  formDisabled: false,
});
