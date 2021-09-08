// Project files
import CandidateRow from "./components/CandidateRow";
import candidates from "./data/candidates.json";
import "./style/style.sass";

export default function App() {
  // Properties
  const PRESENTATION_URL =
    "https://www.icloud.com/keynote/07XPMwrxQFSTK9hIaJWrwB2Iw";

  // Component
  const CandidateRows = candidates.map((item, index) => (
    <CandidateRow key={index} item={item} />
  ));

  return (
    <div className="App">
      {/* Header */}
      <header className="hero">
        <h1>Novare Frontend course</h1>
        <a href={PRESENTATION_URL} target="_blank" className="button">
          Learn more
        </a>
      </header>

      {/* Candidates */}
      <section className="candidates section">
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

      {/* Footer */}
      <footer className="footer">
        <div className="section">© 2021 Novare Human Capital</div>
      </footer>
    </div>
  );
}
