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
import { useTranslation } from "~/i18n/useTranslation";

const _RegisterUserIsAliasUniqueQuery = gql`
query RegisterUserIsAliasUnique($alias:String!){
  findUser(alias:$alias){user{id}}
}
`;

export const Alias: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  const { register } = useFormContext<FormValue>();
  const client = useClient();

  return (
    <label
      htmlFor="alias"
      className={clsx(className, ["inline-flex", ["flex-col"]])}
    >
      <span className={clsx(["text-sm"])}>
        {LL.RegisterUserForm.Alias.Label()}
      </span>
      <input
        {...register("alias", {
          minLength: 1,
          maxLength: 15,
          validate: {
            unique: (alias) =>
              client.query<RegisterUserIsAliasUniqueQuery, RegisterUserIsAliasUniqueQueryVariables>(
                RegisterUserIsAliasUniqueDocument,
                { alias },
              ).toPromise().then(({ data }) => Boolean(data?.findUser.user)),
          },
        })}
        name="alias"
        type="text"
        autoComplete="off"
        className={clsx(["mt-2"])}
      />
    </label>
  );
};
