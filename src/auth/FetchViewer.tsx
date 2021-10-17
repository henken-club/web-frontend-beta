import gql from "graphql-tag";
import React, { useEffect } from "react";

import { useFetchViewerQuery } from "./codegen";
import { useSetViewer } from "./useViewer";

import { useAuth } from "~/auth/useAuth";

const FetchViewerQuery = gql`
  query FetchViewer {
    viewer {
      id
      alias
      displayName
      avatar
    }
  }
`;

export const FetchViewer: React.VFC = () => {
  const { isAuthenticated } = useAuth();
  const setter = useSetViewer();
  const [result] = useFetchViewerQuery({ pause: !isAuthenticated });

  const { data } = result;

  useEffect(() => {
    if (data?.viewer) {
      const { __typename, ...viewer } = data.viewer;
      setter(viewer);
    } else if (data?.viewer === null) {
      setter(null);
    }
  }, [data, setter]);

  return <></>;
};
