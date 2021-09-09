export default function Hero({ slidesURL }) {
  return (
    <header className="hero">
      <h1>Novare Frontend course</h1>
      <a className="button" href={slidesURL} target="_blank" rel="noreferrer">
        Learn more
      </a>
    </header>
  );
}
