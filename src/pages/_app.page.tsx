/* eslint-disable no-process-env */
import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

import { localeDetector } from "~/i18n/detector";
import TypesafeI18n from "~/i18n/i18n-react";
import { DefaultLayout } from "~/layouts/default";

import "~/styles/index.css";

if (process.env.NEXT_PUBLIC_MSW_ENABLED === "true") {
  require("../mocks/next");
}

const App = (
  { Component, pageProps: { session, ...pageProps }, router }: AppProps,
) => {
  const detectedLocales = localeDetector(router);

  const PageLayout = DefaultLayout;

  return (
    <RecoilRoot>
      <TypesafeI18n initialLocale={detectedLocales}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </TypesafeI18n>
    </RecoilRoot>
  );
};

export default App;
