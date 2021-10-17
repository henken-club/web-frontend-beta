import clsx from "clsx";
import React, { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { useAuth } from "~/auth/useAuth";
import { useViewer } from "~/auth/useViewer";
import { RegisterUserForm } from "~/components/organisms/RegisterUserForm";

const manualRegisterUserModalState = atom<boolean>({
  key: "modalRegsiterUserManual",
  default: true,
});

export const useOpenRegisterUserModal = () => {
  const setter = useSetRecoilState(manualRegisterUserModalState);
  return () => setter(true);
};

export const RegisterUserModal: React.VFC = () => {
  const viewer = useViewer();
  const { isAuthenticated } = useAuth();

  const manual = useRecoilValue(manualRegisterUserModalState);
  const setManual = useSetRecoilState(manualRegisterUserModalState);

  const open = useMemo(
    () => viewer === null && isAuthenticated && manual,
    [isAuthenticated, manual, viewer],
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
            onClick={() => setManual(false)}
            onKeyPress={() => setManual(false)}
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
