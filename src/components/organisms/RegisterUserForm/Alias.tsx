import clsx from "clsx";
import { gql } from "graphql-request";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useClient } from "urql";

import { FormValue } from "./FormValue";

import {
  RegisterUserIsAliasUniqueDocument,
  RegisterUserIsAliasUniqueQuery,
  RegisterUserIsAliasUniqueQueryVariables,
} from "~/components/codegen";

const _RegisterUserIsAliasUniqueQuery = gql`
query RegisterUserIsAliasUnique($alias:String!){
  isAliasUnique(alias:$alias)
}
`;

export const Alias: React.VFC<{ className?: string; }> = ({ className }) => {
  const { register } = useFormContext<FormValue>();
  const client = useClient();

  return (
    <label
      htmlFor="alias"
      className={clsx(className, ["inline-flex", ["flex-col"]])}
    >
      <input
        {...register("alias", {
          validate: {
            unique: (alias) =>
              client.query<RegisterUserIsAliasUniqueQuery, RegisterUserIsAliasUniqueQueryVariables>(
                RegisterUserIsAliasUniqueDocument,
                { alias },
              ).toPromise().then(({ data }) => data?.isAliasUnique || false),
          },
        })}
        name="alias"
        type="text"
        autoComplete="off"
      />
    </label>
  );
};
