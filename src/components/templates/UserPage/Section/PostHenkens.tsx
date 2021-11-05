import React from "react";

import { View } from "./View";

export const PostHenkensSection: React.VFC<{
  className?: string;
  user: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
    postsHenkens: {
      totalCount: number;
      pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
      nodes: {
        id: string;
        comment: string;
        postTo: { id: string; alias: string; displayName: string; avatar: string; };
        answer: { comment: string; type: "right" | "wrong"; } | null;
        content:
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
      type="post-henkens"
      henkens={{
        ...user.postsHenkens,
        nodes: user.postsHenkens.nodes.map(({ ...henken }) => ({
          postedBy: {
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
