export default function CandidateModal({ item }) {
  const { name, portoflioURL } = item;

  return (
    <div className="candidate-modal">
      <h2>Candidate: {name}</h2>
      <p>Candidate description</p>
      <a
        className="button"
        href={portoflioURL}
        target="_blank"
        rel="noreferrer"
      >
        View portoflio
      </a>
    </div>
  );
}
