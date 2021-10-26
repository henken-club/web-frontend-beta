import { useAuth0 } from "@auth0/auth0-react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { mockAuth0Picture } from "~/mocks/constraints";

export const authenticatedState = atom<boolean>({
  key: "mocked_authenticated",
  default: false,
});

export const useMockedAuth0 = (): Pick<
  ReturnType<typeof useAuth0>,
  | "isAuthenticated"
  | "user"
  | "getAccessTokenSilently"
  | "loginWithRedirect"
> => {
  const isAuthenticated = useRecoilValue(authenticatedState);
  const setAuthenticated = useSetRecoilState(authenticatedState);

  if (isAuthenticated) {
    return ({
      isAuthenticated,

      user: {
        name: "TestViewer",
        picture: mockAuth0Picture,
      },

      async getAccessTokenSilently() {
        return "access_token";
      },

      async loginWithRedirect() {
        setAuthenticated(true);
      },
    });
  } else {
    return ({
      isAuthenticated: false,

      user: undefined,

      async getAccessTokenSilently() {
        return "access_token";
      },

      async loginWithRedirect() {
        setAuthenticated(true);
      },
    });
  }
};
