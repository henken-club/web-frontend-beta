import React, { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { useAuth } from "~/auth/useAuth";
import { useViewer } from "~/auth/useViewer";
import { Modal } from "~/components/Modal";
import { RegisterUserForm } from "~/components/RegisterUserForm";

export const manualRegisterUserModalState = atom<boolean>({
  key: "modalRegisterUserManual",
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
        <Modal onClose={() => setManual(false)}>
          <RegisterUserForm />
        </Modal>
      )}
    </>
  );
};
