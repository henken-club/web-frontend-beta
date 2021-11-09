import clsx from "clsx";
import React from "react";

import { ListItem } from "./ListItem";

export const List: React.VFC<{
  className?: string;
  type: "received-henkens" | "post-henkens";
  henkens: {
    totalCount: number;
    pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
    nodes: {
      id: string;
      comment: string;
      postedBy: { id: string; alias: string; displayName: string; avatar: string; };
      postTo: { id: string; alias: string; displayName: string; avatar: string; };
      answer: { comment: string; type: "right" | "wrong"; } | null;
      content:
        | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
        | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
        | { type: "bookseries"; content: { id: string; title: string; }; }
        | { type: "author"; content: { id: string; name: string; }; };
    }[];
  };
}> = ({ className, type, henkens: { totalCount, pageInfo, nodes } }) => {
  return (
    <div className={clsx(className)}>
      <ul
        className={clsx(
          ["flex", ["flex-col"], ["space-y-2", "sm:space-y-0"]],
          [
            "sm:grid",
            ["grid-cols-1", "lg:grid-cols-2", "2xl:grid-cols-3"],
            ["gap-x-4", "xl:gap-x-6"],
            ["gap-y-0.5", "sm:gap-y-4", "lg:gap-y-4"],
          ],
        )}
      >
        {nodes.map((henken) => <ListItem key={henken.id} type={type} henken={henken} />)}
      </ul>
    </div>
  );
};
