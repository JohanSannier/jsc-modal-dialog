import React, { useState } from "react";
import { render } from "react-dom";
import { ModalDialog } from "./lib";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const handleClickOpen = () => {
    onOpenModal();
  };
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Modal Dialog</h1>
      <button type="button" onClick={handleClickOpen}>
        Click to open the dialog modal
      </button>
      <ModalDialog
        open={openModal}
        title="Title of the modal"
        description="Description of the modal"
        closeContent="Close"
        handleCloseModal={onCloseModal}
      />
    </div>
  );
};
render(<App />, document.getElementById("root"));
