"use client";

import Modal from "@/components/modal";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <Modal show={show} title="Modal Title" onClose={() => setShow(false)}>
        <p>Click the x button or the backdrop to close the modal.</p>
      </Modal>
    </div>
  );
}
