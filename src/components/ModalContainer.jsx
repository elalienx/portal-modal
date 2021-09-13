export default function ModalContainer({ modal, setModal }) {
  // safeguard
  if (modal === null) return null;

  return (
    <>
      <div className="modal-background"></div>
      <div className="modal-container">
        <button onClick={() => setModal(null)}>X</button>
        {modal}
      </div>
    </>
  );
}
