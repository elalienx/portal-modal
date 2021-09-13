import ReactDOM from "react-dom";

export default function Modal({ state }) {
  const [modal, setModal] = state;

  // safeguard
  if (modal === null) return null;

  return ReactDOM.createPortal(
    <>
      <div className="background"></div>
      <div className="window">
        <button onClick={() => setModal(null)}>X</button>
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}
