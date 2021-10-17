import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormValue } from "./FormValue";

import { Component } from ".";

export default {
  title: "RegisterUserForm",
  component: Component,
  argTypes: {},
} as Meta;

export const Primary: Story<ComponentProps<typeof Component>> = (args) => {
  const methods = useForm<FormValue>();
  return (
    <FormProvider {...methods}>
      <Component {...args} />
    </FormProvider>
  );
};
Primary.storyName = "通常";
Primary.args = {
  onSubmit: action("submit"),
};
