import clsx from "clsx";
import React from "react";

import { useViewer } from "~/auth/useViewer";
import { CreateHenkenForm } from "~/components/organisms/CreateHenkenForm";

export const Component: React.VFC<{
  viewer: undefined | null | { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ viewer }) => {
  return <CreateHenkenForm className={clsx(["w-full"])} viewer={viewer} />;
};

export const TemplateIndexPage: React.VFC = () => {
  const viewer = useViewer();
  return <Component viewer={viewer} />;
};
