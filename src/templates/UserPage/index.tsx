import clsx from "clsx";
import React from "react";

import { Header } from "./Header";
import { PostHenkensSection, ReceivedHenkensSection } from "./Section";
import { TabNav } from "./TabNav";

export const View: React.VFC<{
  user:
    | {
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
          answer: { type: "right" | "wrong"; comment: string; } | null;
          content:
            | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
            | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
            | { type: "bookseries"; content: { id: string; title: string; }; }
            | { type: "author"; content: { id: string; name: string; }; };
        }[];
      };
    }
    | {
      id: string;
      alias: string;
      displayName: string;
      avatar: string;
      postHenkens: {
        totalCount: number;
        pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
        nodes: {
          id: string;
          comment: string;
          postTo: { id: string; alias: string; displayName: string; avatar: string; };
          answer: { type: "right" | "wrong"; comment: string; } | null;
          content:
            | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
            | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
            | { type: "bookseries"; content: { id: string; title: string; }; }
            | { type: "author"; content: { id: string; name: string; }; };
        }[];
      };
    };
}> = ({ user }) => {
  return (
    <main
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
        ["flex", ["flex-col"]],
      )}
    >
      <Header
        className={clsx(["w-full"], ["max-w-screen-lg"], ["mx-auto"])}
        user={{ id: user.id, alias: user.alias, displayName: user.displayName, avatar: user.avatar }}
      />
      {"receivedHenkens" in user &&
        (
          <>
            <TabNav
              className={clsx(["w-full"], ["max-w-screen-lg"], ["mx-auto"])}
              select="received-henkens"
              alias={user.alias}
            />
            <ReceivedHenkensSection
              user={{
                id: user.id,
                alias: user.alias,
                displayName: user.displayName,
                avatar: user.avatar,
                receivedHenkens: user.receivedHenkens,
              }}
            />
          </>
        )}
      {"postHenkens" in user &&
        (
          <>
            <TabNav
              className={clsx(["w-full"], ["max-w-screen-lg"], ["mx-auto"])}
              select="post-henkens"
              alias={user.alias}
            />
            <PostHenkensSection
              user={{
                id: user.id,
                alias: user.alias,
                displayName: user.displayName,
                avatar: user.avatar,
                postsHenkens: user.postHenkens,
              }}
            />
          </>
        )}
    </main>
  );
};

export const TemplateUserPage: React.VFC<
  {
    user:
      | {
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
            answer: { type: "right" | "wrong"; comment: string; } | null;
            content:
              | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
              | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
              | { type: "bookseries"; content: { id: string; title: string; }; }
              | { type: "author"; content: { id: string; name: string; }; };
          }[];
        };
      }
      | {
        id: string;
        alias: string;
        displayName: string;
        avatar: string;
        postHenkens: {
          totalCount: number;
          pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
          nodes: {
            id: string;
            comment: string;
            postTo: { id: string; alias: string; displayName: string; avatar: string; };
            answer: { type: "right" | "wrong"; comment: string; } | null;
            content:
              | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
              | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
              | { type: "bookseries"; content: { id: string; title: string; }; }
              | { type: "author"; content: { id: string; name: string; }; };
          }[];
        };
      };
  }
> = ({ user }) => {
  return <View user={user} />;
};
