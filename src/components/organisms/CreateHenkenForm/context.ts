import React from "react";

type ContextType = {
  from: undefined | null | {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };
  to: null | {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  };
  setTo(payload: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
  }): void;
};

export const CreateHenkenFormContext = React.createContext<ContextType>({
  from: undefined,
  to: null,
  setTo: () => {},
});
