import clsx from "clsx";
import { gql } from "graphql-request";
import React from "react";
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { Alias } from "./Alias";
import { DisplayName } from "./DisplayName";
import { FormValue } from "./FormValue";

import { useAuth } from "~/auth/useAuth";
import { useUpdateViewer } from "~/auth/useViewer";
import { useRegisterUserMutation } from "~/components/codegen";
import { useTranslation } from "~/i18n/useTranslation";

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

export const Component: React.VFC<
  { className?: string; onSubmit(): void; }
> = ({ className, onSubmit, ...props }) => {
  const { LL } = useTranslation();
  return (
    <form
      className={clsx(
        className,
        ["relative"],
        ["inline-flex", ["flex-col"], ["items-center"]],
        [["px-4"], ["py-4"]],
        ["bg-gray-50"],
        [
          ["shadow-lg"],
        ],
      )}
      onSubmit={onSubmit}
    >
      <div className={clsx(["flex", ["flex-col"], ["items-center"]])}>
        <span className={clsx(["text-lg"])}>
          {LL.RegisterUserForm.Title()}
        </span>
        <p className={clsx([["text-xs"], ["text-gray-700"]], ["mt-2"])}>
          {LL.RegisterUserForm.Description()}
        </p>
      </div>
      <Alias className={clsx(["mt-4"], ["w-full"])} />
      <DisplayName className={clsx(["mt-4"], ["w-full"])} />
      <button className={clsx(["mt-8"])} type="submit">{LL.RegisterUserForm.Register()}</button>
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

  const handleValid: SubmitHandler<FormValue> = async (value, err) => {
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
