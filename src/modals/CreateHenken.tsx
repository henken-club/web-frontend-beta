import clsx from "clsx";
import React, { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { CreateHenkenForm } from "~/components/CreateHenkenForm";
import { Modal } from "~/components/Modal";

export const manualCreateHenkenModalState = atom<boolean>({
  key: "modalManualCreateHenken",
  default: false,
});

export const useOpenCreateHenkenModal = () => {
  const setter = useSetRecoilState(manualCreateHenkenModalState);
  return () => setter(true);
};

export const useCloseCreateHenkenModal = () => {
  const setter = useSetRecoilState(manualCreateHenkenModalState);
  return () => setter(false);
};

export const CreateHenkenModal: React.VFC = () => {
  const manual = useRecoilValue(manualCreateHenkenModalState);
  const setManual = useSetRecoilState(manualCreateHenkenModalState);

  const open = useMemo(
    () => manual,
    [manual],
  );

  return (
    <>
      {!open && <></>}
      {open && (
        <Modal onClose={() => setManual(false)}>
          <CreateHenkenForm className={clsx("w-full")} />
        </Modal>
      )}
    </>
  );
};
