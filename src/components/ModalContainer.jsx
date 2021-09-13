import ReactDOM from "react-dom";

export default function ModalContainer({ modal, setModal }) {
  // safeguard
  if (modal === null) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-background"></div>
      <div className="modal-window">
        <button onClick={() => setModal(null)}>X</button>
        {modal}
      </div>
    </>,
    document.getElementById("portal")
  );
}
