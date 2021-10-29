import clsx from "clsx";
import React from "react";

import { Section } from "./Section";
import { ViewTemplate } from "./ViewTemplate";

export const ReceivedHenkensView: React.VFC<{
  user: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
    receivedHenkens: {
      totalCount: number;
      pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
      nodes: {
        id: string;
        comment: string;
        postedBy: { id: string; alias: string; displayName: string; avatar: string; };
        answer: { comment: string; type: "right" | "wrong"; } | null;
        content:
          | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
          | { type: "bookseries"; content: { id: string; title: string; }; }
          | { type: "author"; content: { id: string; name: string; }; };
      }[];
    };
  };
}> = ({ user }) => {
  return (
    <ViewTemplate
      user={{
        id: user.id,
        alias: user.alias,
        displayName: user.displayName,
        avatar: user.avatar,
      }}
      section={({ className }) => (
        <Section
          className={clsx(className)}
          user={{ alias: user.alias, receivedHenkens: user.receivedHenkens }}
        />
      )}
    />
  );
};
