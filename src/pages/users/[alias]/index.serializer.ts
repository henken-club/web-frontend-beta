import { UserPageQuery as PageQueryResult } from "./index.page.codegen";

import { serializeAnswerType } from "~/pages/_serializer";

type ResultHenken = Exclude<PageQueryResult["findUser"]["user"], null | undefined>;

export const deTypename = <T extends { __typename: string; }>(user: T): Omit<T, "__typename"> => ({ ...user });

export const serializeContent = (content: ResultHenken["receivedHenkens"]["edges"][number]["node"]["content"]):
  | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
  | { type: "bookseries"; content: { id: string; title: string; }; }
  | { type: "author"; content: { id: string; name: string; }; } => {
  switch (content.__typename) {
    case "Book":
      return {
        type: "book",
        content: {
          id: content.id,
          title: content.title,
          cover: content.cover || null,
        },
      };
    case "BookSeries":
      return {
        type: "bookseries",
        content: {
          id: content.id,
          title: content.title,
        },
      };
    case "Author":
      return {
        type: "author",
        content: {
          id: content.id,
          name: content.name,
        },
      };
  }
};

type SerializedProps = {
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
        createdAt: string;
        postedBy: { id: string; alias: string; displayName: string; avatar: string; };
        answer: { type: "right" | "wrong"; comment: string; } | null;
        content: {
          type: "book";
          content: { id: string; title: string; cover: string | null; };
        } | {
          type: "bookseries";
          content: { id: string; title: string; };
        } | {
          type: "author";
          content: { id: string; name: string; };
        };
      }[];
    };
  };
};

export const serializer = ({ findUser: { user } }: PageQueryResult): SerializedProps | null => {
  if (!user) return null;
  return {
    user: {
      id: user.id,
      alias: user.alias,
      displayName: user.displayName,
      avatar: user.avatar,
      receivedHenkens: {
        totalCount: user.receivedHenkens.totalCount,
        pageInfo: user.receivedHenkens.pageInfo.hasNextPage && user.receivedHenkens.pageInfo.endCursor
          ? {
            hasNextPage: user.receivedHenkens.pageInfo.hasNextPage,
            endCursor: user.receivedHenkens.pageInfo.endCursor,
          }
          : null,
        nodes: user.receivedHenkens.edges.map(({ node: henken }) => (
          deTypename({
            ...henken,
            content: serializeContent(henken.content),
            postedBy: deTypename({ ...henken.postedBy }),
            answer: henken.answer
              ? deTypename({ ...henken.answer, type: serializeAnswerType(henken.answer.type) })
              : null,
          })
        )),
      },
    },
  };
};
