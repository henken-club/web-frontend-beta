import React from "react";

export type HenkenContentType =
  | { type: "tempContent"; value: { id: string; name: string; type: "book" | "bookSeries" | "author"; }; }
  | { type: "book"; value: { id: string; title: string; cover: string | null; }; }
  | { type: "bookSeries"; value: { id: string; title: string; }; }
  | { type: "author"; value: { id: string; name: string; }; };

export const AnswerHenkenFormContext = React.createContext<{
  henken:
    // loading
    | undefined
    // something error
    | null
    // fetched
    | {
      id: string;
      comment: string;
      from: { id: string; alias: string; displayName: string; avatar: string; };
      to: { id: string; alias: string; displayName: string; avatar: string; };
      content: HenkenContentType;
    };
}>({
  henken: undefined,
});
