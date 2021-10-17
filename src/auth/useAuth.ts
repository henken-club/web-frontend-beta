import { useAuth0 } from "@auth0/auth0-react";

import { useMockedAuth0 } from "./mocks/useMockedAuth0";

export const useAuth =
  // eslint-disable-next-line no-process-env
  process.env.NEXT_PUBLIC_MOCK_AUTH0_ENABLED === "true"
    ? useMockedAuth0
    : useAuth0;
