// Project files
import CandidateRow from "../components/CandidateRow";
import candidates from "../data/candidates.json";

export default function Candidates() {
  // Component
  const CandidateRows = candidates.map((item, index) => (
    <CandidateRow key={index} item={item} />
  ));

  return (
    <section className="candidates section">
      <h2>Meet the 2021 candidates</h2>
      <p>
        This is our list of candidates for this iteration. Each week the become
        more proficient as they develop more and more projects.
      </p>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Curriculum</th>
            <th>Portfolio</th>
          </tr>
        </thead>
        <tbody>{CandidateRows}</tbody>
      </table>
    </section>
  );
}
