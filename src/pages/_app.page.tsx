/* eslint-disable no-process-env */
import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

import { AuthProvider } from "~/auth/AuthProvider";
import { FetchViewer } from "~/auth/FetchViewer";
import { localeDetector } from "~/i18n/detector";
import TypesafeI18n from "~/i18n/i18n-react";
import { DefaultLayout } from "~/layouts/default";
import { RegisterUserModal } from "~/modals/RegisterUser";
import "~/styles/index.css";
import { UrqlProvider } from "~/urql/UrqlProvider";

if (process.env.NEXT_PUBLIC_MSW_ENABLED === "true") {
  require("../mocks/next");
}

const App = (
  { Component, pageProps: { session, ...pageProps }, router }: AppProps,
) => {
  const detectedLocales = localeDetector(router);

  const PageLayout = DefaultLayout;

  return (
    <AuthProvider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
    >
      <RecoilRoot>
        <UrqlProvider>
          <FetchViewer />
          <TypesafeI18n initialLocale={detectedLocales}>
            <RegisterUserModal />
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </TypesafeI18n>
        </UrqlProvider>
      </RecoilRoot>
    </AuthProvider>
  );
};

export default App;
