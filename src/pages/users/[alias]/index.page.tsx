import gql from "graphql-tag";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";

import { getSdk } from "./index.page.codegen";
import { serializer } from "./index.serializer";

import { TemplateUserPage } from "~/components/templates/UserPage";
import { graphqlClient } from "~/pages/graphql-client";

const _AllUsersPagesQueryDocument = gql`
  query AllUsersPages($limit: Int!) {
    manyUsers(first: $limit, orderBy: {direction: DESC, field: CREATED_AT}) {
      edges {
        node {
          alias
        }
      }
    }
  }
`;

export type UrlQuery = { alias: string; };
export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return getSdk(graphqlClient)
    .AllUsersPages({ limit: 100 })
    .then(({ manyUsers }) => ({
      fallback: "blocking",
      paths: manyUsers.edges.map(({ node: { alias } }) => ({ params: { alias } })),
    }));
};

const _UserPageQueryDocument = gql`
query UserPage($alias: String!) {
  findUser(alias: $alias) {
    user {
      id
      alias
      displayName
      avatar
    }
  }
}
`;

export type StaticProps = Exclude<ReturnType<typeof serializer>, null>;
export const getStaticProps: GetStaticProps<StaticProps, UrlQuery> = async ({ params }) => {
  if (!params?.alias) return { notFound: true };

  const result = await getSdk(graphqlClient).UserPage({ alias: params.alias });
  const serialized = serializer(result);
  if (serialized === null) return { notFound: true };

  return { props: serialized, revalidate: 60 };
};

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export const Page: NextPage<PageProps> = ({ user, ...props }) => {
  return (
    <>
      <TemplateUserPage user={user} />
    </>
  );
};
export default Page;
