import { initializeWorker, mswDecorator } from "msw-storybook-addon";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as nextImage from "next/image";

import TypesafeI18n from "~/i18n/i18n-react";

import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "~/styles/index.css";
import { TAILWIND_VIEWPORTS } from "./tailwindViewports";

initializeWorker();

export const decorators = [
  mswDecorator,
  (Story) => (
    <TypesafeI18n>
      <Story />
    </TypesafeI18n>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  storySort: { method: "alphabetical" },
  viewport: {
    viewports: {
      ...TAILWIND_VIEWPORTS,
      ...MINIMAL_VIEWPORTS,
      ...INITIAL_VIEWPORTS,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  argTypes: {
    className: { table: { disable: true } },
    contextValue: { table: { disable: true } },
  },
};
