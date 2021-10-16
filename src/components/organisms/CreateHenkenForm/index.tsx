import clsx from "clsx";
import React, { ContextType, useMemo, useState } from "react";

import { CreateHenkenFormContext } from "./context";
import { From } from "./From";
import { To } from "./To";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  { className?: string; }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["max-w-screen-xl"],
        ["inline-flex", ["flex-col", "sm:flex-row"], ["flex-wrap", "lg:flex-nowrap"]],
        ["shadow-xl"],
      )}
    >
      <From
        className={clsx(
          ["w-full", "sm:w-1/2", "lg:w-1/4"],
          ["flex-col"],
          ["bg-blue-100"],
          ["order-1"],
        )}
      />
      <To
        className={clsx(
          ["w-full", "sm:w-1/2", "lg:w-1/4"],
          ["order-2", "lg:order-3"],
        )}
      />
      <div
        className={clsx(
          ["w-full", "lg:w-auto"],
          ["flex-grow-0", "lg:flex-grow"],
          ["flex-col"],
          ["bg-blue-200"],
          ["h-24"],
          ["order-3", "lg:order-2"],
        )}
      />
    </div>
  );
};

export const CreateHenkenForm: React.VFC<
  {
    className?: string;
    viewer: undefined | null | { id: string; alias: string; displayName: string; avatar: string; };
  }
> = (
  { viewer, ...props },
) => {
  const [to, setTo] = useState<{ id: string; alias: string; displayName: string; avatar: string; } | null>(null);
  const contextValue = useMemo<ContextType<typeof CreateHenkenFormContext>>(
    () => {
      return ({ from: viewer, to, setTo: (user) => setTo(user) });
    },
    [viewer, to],
  );

  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
