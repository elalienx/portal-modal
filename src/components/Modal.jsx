// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ isOpen, children, onClose }) {
  // safeguard
  if (!isOpen) {
    return ReactDom.createPortal(
      <p>is closed? {isOpen}</p>,
      document.getElementById("portal")
    );
  }

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
