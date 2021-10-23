import clsx from "clsx";
import React from "react";

import { GlobalNav } from "~/components/organisms/GlobalNav";

export const PageContainer: React.FC<{ className?: string; }> = ({
  children,
  className,
}) => (
  <div
    className={clsx(
      className,
      ["container", ["mx-auto"]],
      ["flex"],
      [["px-4"], ["py-8"]],
    )}
  >
    {children}
  </div>
);

export const DefaultLayout: React.FC = ({ children }) => (
  <main
    className={clsx(
      ["flex", "flex-col"],
      ["min-h-screen"],
      ["bg-gray-50"],
    )}
  >
    <GlobalNav />
    <PageContainer className={clsx(["flex-grow"], ["mx-auto"])}>
      {children}
    </PageContainer>
  </main>
);
