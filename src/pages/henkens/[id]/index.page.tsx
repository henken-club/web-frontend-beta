import gql from "graphql-tag";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";

import { getSdk } from "./index.page.codegen";
import { serializer } from "./index.serializer";

import { TemplateHenkenPage } from "~/components/templates/HenkenPage";
import { graphqlClient } from "~/pages/graphql-client";

const _AllHenkenPagesQueryDocument = gql`
  query AllHenkenPages($limit: Int!) {
    manyHenkens(first: $limit, orderBy: {direction: DESC, field: CREATED_AT}) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export type UrlQuery = { id: string; };
export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return getSdk(graphqlClient)
    .AllHenkenPages({ limit: 100 })
    .then(({ manyHenkens }) => ({
      fallback: "blocking",
      paths: manyHenkens.edges.map(({ node: { id } }) => ({ params: { id } })),
    }));
};

const _HenkenPageQueryDocument = gql`
query HenkenPage($id: ID!) {
  findHenken(id: $id) {
    henken {
      id
      comment
      postedBy {
        id
        alias
        displayName
        avatar
      }
      postsTo {
        id
        alias
        displayName
        avatar
      }
      answer{
        id
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
          writings(first: 6, orderBy: {direction: ASC,field:AUTHOR_NAME}){
            edges{
              node{
                author{
                  id
                  name
                }
              }
            }
          }
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
`;

export type StaticProps = Exclude<ReturnType<typeof serializer>, null>;
export const getStaticProps: GetStaticProps<StaticProps, UrlQuery> = async ({ params }) => {
  if (!params?.id) return { notFound: true };

  const result = await getSdk(graphqlClient).HenkenPage({ id: params.id });
  const serialized = serializer(result);
  if (serialized === null) return { notFound: true };

  return { props: serialized, revalidate: 60 };
};

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export const Page: NextPage<PageProps> = ({ henken, ...props }) => {
  return (
    <>
      <TemplateHenkenPage henken={henken} />
    </>
  );
};
export default Page;
