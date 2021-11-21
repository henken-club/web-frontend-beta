import React from "react";

import { View } from "./View";

export const ReceivedHenkensSection: React.VFC<{
  className?: string;
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
          | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
          | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
          | { type: "bookseries"; content: { id: string; title: string; }; }
          | { type: "author"; content: { id: string; name: string; }; };
      }[];
    };
  };
}> = ({ user, ...props }) => {
  return (
    <View
      {...user}
      {...props}
      type="received-henkens"
      henkens={{
        ...user.receivedHenkens,
        nodes: user.receivedHenkens.nodes.map(({ ...henken }) => ({
          postTo: {
            id: user.id,
            alias: user.alias,
            displayName: user.displayName,
            avatar: user.avatar,
          },
          ...henken,
        })),
      }}
    />
  );
};
