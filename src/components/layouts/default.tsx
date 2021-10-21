import clsx from "clsx";
import React from "react";

export const PageContainer: React.FC<{ className?: string; }> = ({
  children,
  className,
}) => (
  <div
    className={clsx(
      className,
      ["container", ["mx-auto"]],
      ["flex", ["items-center"], ["justify-center"]],
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
    <PageContainer className={clsx(["flex-grow"], ["mx-auto"])}>
      {children}
    </PageContainer>
  </main>
);
