import { UserPageQuery as PageQueryResult } from "./index.page.codegen";

type ResultHenken = Exclude<PageQueryResult["findUser"]["user"], null | undefined>;

export const deTypename = <T extends { __typename: string; }>(user: T): Omit<T, "__typename"> => ({ ...user });

export const serializer = ({
  findUser: { user },
}: PageQueryResult) => {
  if (!user) return null;
  return {
    user: {
      id: user.id,
      alias: user.alias,
      displayName: user.displayName,
      avatar: user.avatar,
    },
  };
};
