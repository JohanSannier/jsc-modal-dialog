# jsc-modal-dialog

```sh
// with npm
npm i jsc-modal-dialog
// with yarn
yarn add jsc-modal-dialog
```

## Usage

Please follow the instructions below to get started:

```jsx
import React, { useState } from "react";
import { ModalDialog } from "jsc-modal-dialog";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const handleClickOpen = () => {
    onOpenModal();
  };
  return (
    <>
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
    </>
  );
};
ReactDOM.render(<App />, document.querySelector("#app"));
```
