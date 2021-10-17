import { useEffect, useState } from "react";

import { useAuth } from "~/auth/useAuth";

export const useAccessToken = (): { token: string | null; } => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      }
    };
    getToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  return { token };
};
