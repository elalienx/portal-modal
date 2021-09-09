// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
  // safeguard
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-background" />
      <div className="modal-window">
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
