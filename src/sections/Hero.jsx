export default function Hero() {
  // Properties
  const SLIDES_URL = "https://www.icloud.com/keynote/07XPMwrxQFSTK9hIaJWrwB2Iw";

  return (
    <header className="hero">
      <h1>Novare Frontend course</h1>
      <a className="button" href={SLIDES_URL} target="_blank" rel="noreferrer">
        Learn more
      </a>
    </header>
  );
}
