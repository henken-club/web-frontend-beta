import { HenkenPageQuery as PageQueryResult } from "./index.page.codegen";

export const serializer = ({
  findHenken: { henken },
}: PageQueryResult) => {
  if (!henken) return null;
  return {
    henken: {
      id: henken.id,
      comment: henken.comment,
    },
  };
};
