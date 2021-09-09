// NPM Packages
import { useState, useEffect } from "react";
import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;

  // safeguard
  if (child === null) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-background" />
      <div className="modal-window">
        <button onClick={() => setChild(null)}>Close Modal</button>
        {child}
      </div>
    </>,
    document.getElementById("portal")
  );
}
