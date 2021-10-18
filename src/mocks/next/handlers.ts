/* eslint-disable no-process-env */
import { graphql } from "msw";

import {
  FetchViewerDocument,
  FetchViewerQuery,
  FetchViewerQueryVariables,
  RegisterUserDocument,
  RegisterUserIsAliasUniqueDocument,
  RegisterUserIsAliasUniqueQuery,
  RegisterUserIsAliasUniqueQueryVariables,
  RegisterUserMutation,
  RegisterUserMutationVariables,
} from "../codegen";

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
              avatar: "/.mocks/viewer.png",
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
];
