import React, { useEffect, useState } from "react";
import { Client, ClientOptions, createClient, Provider } from "urql";

import { useAccessToken } from "~/urql/useAccessToken";

export const createUrqlClient = (options?: Omit<ClientOptions, "url">) =>
  createClient({
    ...options,
    // eslint-disable-next-line no-process-env
    url: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
  });

export const UrqlProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<Client | null>(null);
  const { token } = useAccessToken();

  useEffect(() => {
    const setupClient = () => {
      setClient(
        createUrqlClient({
          fetchOptions: {
            credentials: "same-origin",
            headers: { authorization: token ? `Bearer ${token}` : "" },
          },
        }),
      );
    };

    setupClient();
  }, [token]);

  return client ? <Provider value={client}>{children}</Provider> : <></>;
};
