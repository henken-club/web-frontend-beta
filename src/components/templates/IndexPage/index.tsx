import React from "react";

import { useViewer } from "~/auth/useViewer";

export const Component: React.VFC<{
  viewer: undefined | null | { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ viewer }) => {
  return (
    <>
    </>
  );
};

export const TemplateIndexPage: React.VFC = () => {
  const viewer = useViewer();
  return <Component viewer={viewer} />;
};
