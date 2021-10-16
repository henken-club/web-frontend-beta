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
        ["max-w-screen-lg"],
        ["inline-grid", ["grid-cols-1", "sm:grid-cols-2"]],
        ["shadow-xl"],
      )}
    >
      <From
        className={clsx(
          ["col-span-1"],
        )}
      />
      <To
        className={clsx(
          ["col-span-1"],
        )}
      />
      <Content
        className={clsx(
          ["col-span-full"],
          ["bg-blue-200"],
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
