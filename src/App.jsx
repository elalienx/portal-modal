// Project files
import candidates from "./candidates.json";
import CandidateRow from "./components/CandidateRow";

export default function App() {
  // Properties
  const PRESENTATION_URL = "foobar.com";

  // Component
  const CandidateRows = candidates.map((item, index) => (
    <CandidateRow key={index} item={item} />
  ));

  return (
    <div className="App">
      <header className="hero">
        <h1>Novare Frontend course</h1>
        <a href={PRESENTATION_URL} target="_blank" className="button">
          Learn more
        </a>
      </header>
      <section className="candidates">
        <h2>Meet the 2021 candidates</h2>
        <p>
          This is our list of candidates for this iteration. Each week the
          become more proficient as they develop more and more projects.
        </p>
        <table>
          <thead>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Curriculum</th>
            <th>Portfolio</th>
          </thead>
        </table>
        <tbody>{CandidateRows}</tbody>
      </section>
      <footer className="footer">© 2021 Novare Human Capital</footer>
    </div>
  );
}
