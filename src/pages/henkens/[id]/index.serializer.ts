import { AnswerType, ContentType, HenkenPageQuery as PageQueryResult } from "./index.page.codegen";

type ResultHenken = Exclude<PageQueryResult["findHenken"]["henken"], null | undefined>;

export const deTypename = <T extends { __typename: string; }>(user: T): Omit<T, "__typename"> => ({ ...user });

export const serializeContent = (content: ResultHenken["content"]):
  | { type: "tempContent"; content: { id: string; name: string; type: "book" | "bookseries" | "author"; }; }
  | {
    type: "book";
    content: {
      id: string;
      title: string;
      cover: string | null;
      authors: { id: string; name: string; role: null; }[];
    };
  }
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
          authors: content.writings.edges.map(({ node: { author } }) => ({
            id: author.id,
            name: author.name,
            role: null,
          })),
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
    case "TempContent":
      switch (content.type) {
        case ContentType.Author:
          return { type: "tempContent", content: { id: content.id, name: content.name, type: "author" } };
        case ContentType.Book:
          return { type: "tempContent", content: { id: content.id, name: content.name, type: "book" } };
        case ContentType.BookSeries:
          return { type: "tempContent", content: { id: content.id, name: content.name, type: "bookseries" } };
        default:
          throw new Error("Invalid temporary content type");
      }
  }
};

export const serializeAnswerType = (type: AnswerType): "right" | "wrong" => {
  switch (type) {
    case AnswerType.Right:
      return "right";
    case AnswerType.Wrong:
      return "wrong";
  }
};

export const serializeAnswer = (
  answer: Exclude<ResultHenken["answer"], null | undefined>,
): { id: string; type: "right" | "wrong"; comment: string; } => {
  return {
    id: answer.id,
    type: serializeAnswerType(answer.type),
    comment: answer.comment,
  };
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
      answer: henken.answer ? serializeAnswer(henken.answer) : null,
      content: serializeContent(henken.content),
    },
  };
};
