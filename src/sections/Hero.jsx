// Project files
import HeroModal from "../components/HeroModal";

export default function Hero({ setModal }) {
  // Properties
  const SLIDES_URL = "https://www.icloud.com/keynote/07XPMwrxQFSTK9hIaJWrwB2Iw";

  return (
    <header className="hero">
      <h1>Novare Frontend course</h1>
      <a className="button" href={SLIDES_URL} target="_blank" rel="noreferrer">
        Learn more
      </a>
      <hr />
      <button className="button" onClick={() => setModal(<HeroModal />)}>
        Open hero modal
      </button>
    </header>
  );
}
