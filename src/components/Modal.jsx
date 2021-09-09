// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
  // safeguard
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style="modal-background" />
      <div style="modal-window">
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
