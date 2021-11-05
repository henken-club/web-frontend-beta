import clsx from "clsx";
import React from "react";

import { List } from "./HenkenList";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  type: "received-henkens" | "post-henkens";
  henkens: {
    totalCount: number;
    pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
    nodes: {
      id: string;
      comment: string;
      postTo: { id: string; alias: string; displayName: string; avatar: string; };
      postedBy: { id: string; alias: string; displayName: string; avatar: string; };
      answer: { comment: string; type: "right" | "wrong"; } | null;
      content:
        | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
        | { type: "bookseries"; content: { id: string; title: string; }; }
        | { type: "author"; content: { id: string; name: string; }; };
    }[];
  };
}> = ({ className, type, henkens }) => {
  const { LL } = useTranslation();
  return (
    <section
      className={clsx(
        className,
        ["inline-flex", ["flex-col"]],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["bg-gray-700"],
          ["px-2", "sm:px-4", "xl:px-8"],
          ["py-2", "sm:py-4", "xl:py-8"],
        )}
      >
        <List
          className={clsx(["w-full"])}
          henkens={henkens}
          type={type}
        />
      </div>
    </section>
  );
};
