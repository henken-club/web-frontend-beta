import gql from "graphql-tag";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";

import { getSdk } from "./index.page.codegen";
import { serializer } from "./index.serializer";

import { graphqlClient } from "~/pages/graphql-client";
import { TemplateUserPage } from "~/templates/UserPage";

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
      receivedHenkens(first:20,orderBy:{direction:ASC,field:CREATED_AT}){
        totalCount
        pageInfo{
          hasNextPage
          endCursor
        }
        edges{
          node{
            id
            comment
            createdAt
            postedBy{
              id
              alias
              displayName
              avatar
            }
            answer{
              type
              comment
            }
            content {
              __typename
              ... on TempContent{
                  id name type
              }
              ... on Book {
                id
                title
                cover
              }
              ... on BookSeries {
                id
                title
              }
              ... on Author {
                id
                name
              }
            }
          }
        }
      }
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
