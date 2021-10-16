import resolveConfig from "tailwindcss/resolveConfig";
import configfile from "../tailwind.config.js";

const tailwindConfig = resolveConfig(configfile);

export const TAILWIND_VIEWPORTS = {
  TailwindXS: {
    name: "Tailwind xs",
    type: "Tailwind",
    styles: {
      width: tailwindConfig.theme.screens.xs,
      height: tailwindConfig.theme.screens.sm,
    },
  },
  TailwindSM: {
    name: "Tailwind sm",
    type: "Tailwind",
    styles: {
      width: tailwindConfig.theme.screens.sm,
      height: tailwindConfig.theme.screens.sm,
    },
  },
  TailwindMD: {
    name: "Tailwind md",
    styles: {
      width: tailwindConfig.theme.screens.md,
      height: tailwindConfig.theme.screens.sm,
    },
  },
  TailwindLG: {
    name: "Tailwind lg",
    styles: {
      width: tailwindConfig.theme.screens.lg,
      height: tailwindConfig.theme.screens.md,
    },
  },
  TailwindXL: {
    name: "Tailwind xl",
    styles: {
      width: tailwindConfig.theme.screens.xl,
      height: tailwindConfig.theme.screens.md,
    },
  },
  Tailwind2XL: {
    name: "Tailwind 2xl",
    styles: {
      width: tailwindConfig.theme.screens["2xl"],
      height: tailwindConfig.theme.screens.md,
    },
  },
};
