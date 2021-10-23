import { HenkenPageQuery as PageQueryResult } from "./index.page.codegen";

export const deTypename = <T extends { __typename: string; }>(user: T): Omit<T, "__typename"> => ({ ...user });

export const serializer = ({
  findHenken: { henken },
}: PageQueryResult) => {
  if (!henken) return null;
  return {
    henken: {
      id: henken.id,
      comment: henken.comment,
      postedBy: deTypename({
        ...henken.postedBy,
      }),
      postsTo: deTypename({
        ...henken.postsTo,
      }),
    },
  };
};
