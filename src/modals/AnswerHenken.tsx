import clsx from "clsx";
import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { Modal } from "~/components/atoms/Modal";
import { AnswerHenkenForm } from "~/components/organisms/AnswerHenkenForm";

const stateManualAnswerHenkenModal = atom<
  | { open: true; initialAnswerId: string; }
  | { open: false; }
>({
  key: "ManualAnswerHenkenModal",
  default: { open: false },
});

export const useOpenAnswerHenkenModal = (initial: string) => {
  const setter = useSetRecoilState(stateManualAnswerHenkenModal);
  return () => setter({ open: true, initialAnswerId: initial });
};

export const useCloseAnswerHenkenModal = () => {
  const setter = useSetRecoilState(stateManualAnswerHenkenModal);
  return () => setter({ open: false });
};

export const AnswerHenkenModal: React.VFC = () => {
  const manual = useRecoilValue(stateManualAnswerHenkenModal);
  const close = useCloseAnswerHenkenModal();

  return (
    <>
      {manual.open && (
        <Modal onClose={() => close()}>
          <AnswerHenkenForm className={clsx("w-full")} henkenId={manual.initialAnswerId} />
        </Modal>
      )}
    </>
  );
};
