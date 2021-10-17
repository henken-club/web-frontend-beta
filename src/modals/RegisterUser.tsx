import clsx from "clsx";
import React, { useMemo, useState } from "react";

import { useAuth } from "~/auth/useAuth";
import { useViewer } from "~/auth/useViewer";
import { RegisterUserForm } from "~/components/organisms/RegisterUserForm";

export const RegisterUserModal: React.VFC = () => {
  const viewer = useViewer();
  const { isAuthenticated } = useAuth();
  const [manualOpen, setManualOpen] = useState(true);

  const open = useMemo(
    () => viewer === null && isAuthenticated && manualOpen,
    [isAuthenticated, manualOpen, viewer],
  );

  return (
    <>
      {!open && <></>}
      {open && (
        <div
          className={clsx(
            ["fixed", ["inset-0"], ["z-infinity"]],
            ["flex", ["items-center"], ["justify-center"]],
          )}
        >
          <div
            className={clsx(
              [["absolute"], ["inset-0"], ["z-0"]],
              ["bg-black", ["bg-opacity-25"]],
            )}
            onClick={() => setManualOpen(false)}
            onKeyPress={() => setManualOpen(false)}
          />
          <div
            className={clsx([["relative"], ["z-1"]])}
          />
          <RegisterUserForm />
        </div>
      )}
    </>
  );
};
