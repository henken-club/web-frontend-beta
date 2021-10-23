import { HenkenPageQuery as PageQueryResult } from "./index.page.codegen";

type ResultHenken = Exclude<PageQueryResult["findHenken"]["henken"], null | undefined>;

export const deTypename = <T extends { __typename: string; }>(user: T): Omit<T, "__typename"> => ({ ...user });

export const serializeContent = (content: ResultHenken["content"]):
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

export const serializer = ({
  findHenken: { henken },
}: PageQueryResult) => {
  if (!henken) return null;
  return {
    henken: {
      id: henken.id,
      comment: henken.comment,
      postedBy: deTypename({ ...henken.postedBy }),
      postsTo: deTypename({ ...henken.postsTo }),
      content: serializeContent(henken.content),
    },
  };
};
