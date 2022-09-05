import React from "react";
import "./ModalDialog.css";

function ModalDialog({
  title,
  description,
  open,
  closeContent,
  handleCloseModal,
}) {
  return (
    <>
      {open && (
        <div className="modal">
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleCloseModal}>{closeContent}</button>
        </div>
      )}
    </>
  );
}

export default ModalDialog;
