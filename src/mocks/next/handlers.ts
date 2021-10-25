/* eslint-disable no-process-env */
import { graphql } from "msw";

import {
  CreateHenkenFormCreateHenkenDocument,
  CreateHenkenFormCreateHenkenMutation,
  CreateHenkenFormCreateHenkenMutationVariables,
  CreateHenkenFormSearchContentDocument,
  CreateHenkenFormSearchContentQuery,
  CreateHenkenFormSearchContentQueryVariables,
  CreateHenkenFormSearchUserDocument,
  CreateHenkenFormSearchUserQuery,
  CreateHenkenFormSearchUserQueryVariables,
  FetchViewerDocument,
  FetchViewerQuery,
  FetchViewerQueryVariables,
  GlobalNavFetchNotificationsDocument,
  GlobalNavFetchNotificationsQuery,
  GlobalNavFetchNotificationsQueryVariables,
  RegisterUserDocument,
  RegisterUserIsAliasUniqueDocument,
  RegisterUserIsAliasUniqueQuery,
  RegisterUserIsAliasUniqueQueryVariables,
  RegisterUserMutation,
  RegisterUserMutationVariables,
} from "../codegen";

import { mockAllHenkenPagesQuery, mockHenkenPageQuery } from "./factories/pageHenken";

export const handlers = [
  graphql.query<FetchViewerQuery, FetchViewerQueryVariables>(
    FetchViewerDocument,
    (req, res, ctx) => {
      if (req.headers.get("Authorization")) {
        if (process.env.NEXT_PUBLIC_MSW_FIRST_NEED_REGISTER === "true") {
          return res(ctx.data({
            __typename: "Query",
            viewer: null,
          }));
        } else {
          return res(ctx.data({
            __typename: "Query",
            viewer: {
              __typename: "User",
              id: "viewer_id",
              alias: "viewer",
              displayName: "Viewer",
              avatar: "/.mock/viewer.png",
            },
          }));
        }
      } else {
        return res(ctx.data({
          __typename: "Query",
          viewer: null,
        }));
      }
    },
  ),
  graphql.query<RegisterUserIsAliasUniqueQuery, RegisterUserIsAliasUniqueQueryVariables>(
    RegisterUserIsAliasUniqueDocument,
    (req, res, ctx) => {
      return res(ctx.data({ __typename: "Query", isAliasUnique: true }));
    },
  ),
  graphql.mutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Mutation",
        registerUser: {
          __typename: "RegisterUserPayload",
          user: {
            __typename: "User",
            id: "viewer_id",
            alias: req.variables.alias,
            displayName: req.variables.displayName,
            avatar: req.variables.avatar,
          },
        },
      }),
    );
  }),
  graphql.query<CreateHenkenFormSearchUserQuery, CreateHenkenFormSearchUserQueryVariables>(
    CreateHenkenFormSearchUserDocument,
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Query",
          searchUsers: {
            __typename: "SearchUsersPayload",
            nodes: [{
              __typename: "SearchUsersResult",
              user: {
                __typename: "User",
                id: "search_1",
                alias: "search_1",
                displayName: "SearchUser1",
                avatar: "/.mock/avatar_1.png",
              },
            }, {
              __typename: "SearchUsersResult",
              user: {
                __typename: "User",
                id: "search_2",
                alias: "search_2",
                displayName: "SearchUser2",
                avatar: "/.mock/avatar_2.png",
              },
            }, {
              __typename: "SearchUsersResult",
              user: {
                __typename: "User",
                id: "search_3",
                alias: "search_3",
                displayName: "SearchUser3",
                avatar: "/.mock/avatar_3.png",
              },
            }, {
              __typename: "SearchUsersResult",
              user: {
                __typename: "User",
                id: "search_4",
                alias: "search_4",
                displayName: "SearchUser4",
                avatar: "/.mock/avatar_4.png",
              },
            }],
          },
        }),
      );
    },
  ),
  graphql.query<CreateHenkenFormSearchContentQuery, CreateHenkenFormSearchContentQueryVariables>(
    CreateHenkenFormSearchContentDocument,
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Query",
          searchContent: {
            __typename: "SearchContentPayload",
            nodes: [
              {
                __typename: "SearchResult",
                content: {
                  __typename: "Book",
                  id: "search_book_1",
                  title: "Search Book 1",
                  cover: "/.mock/bookcover_1.jpg",
                },
              },
              {
                __typename: "SearchResult",
                content: {
                  __typename: "BookSeries",
                  id: "search_bookseries_1",
                  title: "Search BookSeries 1",
                },
              },
              {
                __typename: "SearchResult",
                content: {
                  __typename: "Author",
                  id: "search_author_1",
                  name: "Search Author 1",
                },
              },
            ],
          },
        }),
      );
    },
  ),
  graphql.mutation<CreateHenkenFormCreateHenkenMutation, CreateHenkenFormCreateHenkenMutationVariables>(
    CreateHenkenFormCreateHenkenDocument,
    (req, res, ctx) => {
      return res(ctx.data({
        __typename: "Mutation",
        createHenken: {
          __typename: "CreateHenkenPayload",
          henken: {
            __typename: "Henken",
            id: "created_henken_1",
          },
        },
      }));
    },
  ),
  graphql.query<GlobalNavFetchNotificationsQuery, GlobalNavFetchNotificationsQueryVariables>(
    GlobalNavFetchNotificationsDocument,
    (req, res, ctx) => {
      return res(ctx.data({
        __typename: "Query",
        viewer: {
          __typename: "User",
          activities: {
            __typename: "ActivityConnection",
            pageInfo: {
              __typename: "PageInfo",
              hasNextPage: true,
              endCursor: "cursor",
            },
            edges: [{
              __typename: "ActivityEdge",
              node: {
                __typename: "ReceivedHenkenActivity",
                id: "activity-1",
                unread: false,
                createdAt: "2021-01-01T12:00:00",
                henken: {
                  __typename: "Henken",
                  id: "activity-1-henken",
                  comment: "Comment",
                  postedBy: {
                    __typename: "User",
                    id: "user_2",
                    alias: "user_2",
                    displayName: "User2",
                    avatar: "/.mock/avatar_2.png",
                  },
                },
              },
            }],
          },
        },
      }));
    },
  ),
  mockAllHenkenPagesQuery,
  mockHenkenPageQuery,
];
