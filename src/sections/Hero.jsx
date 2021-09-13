import ModalHero from "../components/ModalHero";

export default function Hero({ slidesURL, setModal }) {
  return (
    <header className="hero">
      <h1>Novare Frontend course</h1>
      <a href={slidesURL} target="_blank" className="button" rel="noreferrer">
        Learn more
      </a>
      <button onClick={() => setModal(ModalHero)}>open modal</button>
    </header>
  );
}
