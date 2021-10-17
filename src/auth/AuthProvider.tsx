import { Auth0Provider } from "@auth0/auth0-react";

import { MockedAuth0Provider } from "./mocks/MockedAuth0Provider";

export const AuthProvider =
  // eslint-disable-next-line no-process-env
  process.env.NEXT_PUBLIC_MOCK_AUTH0_ENABLED === "true"
    ? MockedAuth0Provider
    : Auth0Provider;
