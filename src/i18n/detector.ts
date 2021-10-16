import { NextRouter } from "next/router";
import { detectLocale } from "typesafe-i18n/detectors";

import { Locales } from "./i18n-types";

export const localeDetector = (router: NextRouter) =>
  detectLocale(
    router.defaultLocale as Locales,
    router.locales as Locales[],
    () => (router.locale ? [router.locale] : []),
  );
