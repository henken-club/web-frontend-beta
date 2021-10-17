import clsx from "clsx";
import { gql } from "graphql-request";
import React from "react";
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { Alias } from "./Alias";
import { FormValue } from "./FormValue";

import { useAuth } from "~/auth/useAuth";
import { useUpdateViewer } from "~/auth/useViewer";
import { useRegisterUserMutation } from "~/components/codegen";

const RegisterUserMutation = gql`
  mutation RegisterUser(
    $alias: String!
    $avatar: String!
    $displayName: String!
  ) {
    registerUser(alias: $alias, avatar: $avatar, displayName: $displayName) {
      user {
        id
        alias
        displayName
        avatar
      }
    }
  }
`;

const RegisterUserValidationQuery = gql`
query RegisterUserValidation($alias:String!){
  isAliasUnique(alias:$alias)
}
`;

export const Component: React.VFC<
  { className?: string; onSubmit(): void; }
> = ({ className, onSubmit, ...props }) => {
  return (
    <form
      className={clsx(className, ["relative"])}
      onSubmit={onSubmit}
    >
      <Alias />
      <button type="submit">
        S
      </button>
    </form>
  );
};

export const RegisterUserForm: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { user } = useAuth();
  const updateViewer = useUpdateViewer();

  const formReturn = useForm<FormValue>({
    defaultValues: { displayName: user?.name, avatar: user?.picture },
  });
  const [, register] = useRegisterUserMutation();

  const handleValid: SubmitHandler<FormValue> = async (value) => {
    const { data, error } = await register({
      alias: value.alias,
      displayName: value.displayName,
      avatar: value.avatar,
    });
    if (!error && data) {
      const { __typename, ...user } = data.registerUser.user;
      updateViewer(user);
    }
  };
  const handleInvalid: SubmitErrorHandler<FormValue> = (error) => {};

  return (
    <FormProvider {...formReturn}>
      <Component {...props} onSubmit={formReturn.handleSubmit(handleValid, handleInvalid)} />
    </FormProvider>
  );
};
