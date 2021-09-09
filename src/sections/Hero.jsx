export default function Hero({ slidesURL }) {
  return (
    <header className="hero">
      <h1>Novare Frontend course</h1>
      <a href={slidesURL} target="_blank" className="button">
        Learn more
      </a>
    </header>
  );
}
