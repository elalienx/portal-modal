// NPM Packages
import { useState } from "react";
// Project files
import CandidateModal from "../components/CandidateModal";
import CandidateRow from "../components/CandidateRow";
import Modal from "../components/Modal";
import candidates from "../data/candidates.json";

export default function Candidates() {
  // Local state
  const [isOpen, setIsOpen] = useState(false);

  // Component
  const CandidateRows = candidates.map((item, index) => (
    <CandidateRow key={index} item={item} toggleState={[isOpen, setIsOpen]} />
  ));

  return (
    <section className="candidates section">
      <h2>Meet the 2021 candidates</h2>
      <p>
        This is our list of candidates for this iteration. Each week the become
        more proficient as they develop more and more projects.
      </p>

      {/* Make a component? */}
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

      {/* Modal */}
      <Modal>
        <CandidateModal />
      </Modal>
    </section>
  );
}
