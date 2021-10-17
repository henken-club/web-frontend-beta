import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";

export const Modal: React.FC<{ onClose(): void; }> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={clsx(["fixed", ["inset-0"], ["z-infinity"]], ["flex", ["items-center"], ["justify-center"]])}>
      <div
        className={clsx([["absolute"], ["inset-0"], ["z-minus"]], ["bg-black", ["bg-opacity-25"]])}
        onClick={() => onClose()}
        onKeyPress={() => onClose()}
      />
      {children}
    </div>,
    document.body,
  );
};
