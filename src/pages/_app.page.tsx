/* eslint-disable no-process-env */
import { AppProps } from "next/app";
import React from "react";

import { localeDetector } from "~/i18n/detector";
import TypesafeI18n from "~/i18n/i18n-react";

import "~/styles/index.css";

if (process.env.NEXT_PUBLIC_MSW_ENABLED === "true") {
  require("../mocks/next");
}

const App = (
  { Component, pageProps: { session, ...pageProps }, router }: AppProps,
) => {
  const detectedLocales = localeDetector(router);

  return (
    <TypesafeI18n initialLocale={detectedLocales}>
      <Component {...pageProps} />
    </TypesafeI18n>
  );
};

export default App;
