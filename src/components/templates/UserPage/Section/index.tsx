import clsx from "clsx";
import React from "react";

import { List } from "./HenkenList";
import { Tab } from "./TabSwitch";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  alias: string;
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
}> = ({ className, alias, receivedHenkens }) => {
  const { LL } = useTranslation();
  return (
    <section
      className={clsx(
        className,
        ["pt-4"],
        ["inline-flex", ["flex-col"]],
      )}
    >
      <Tab className={clsx(["w-full"], ["max-w-screen-lg"], ["mx-auto"])} select="received-henkens" alias={alias} />
      <div
        className={clsx(
          ["w-full"],
          ["bg-gray-700"],
          ["px-2", "sm:px-4", "xl:px-8"],
          ["py-2", "sm:py-4", "xl:py-8"],
        )}
      >
        <List className={clsx(["w-full"])} receivedHenkens={receivedHenkens} />
      </div>
    </section>
  );
};

export const Section: React.VFC<{
  className?: string;
  user: {
    alias: string;
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
}> = ({ user, ...props }) => {
  return <View {...user} {...props} />;
};
