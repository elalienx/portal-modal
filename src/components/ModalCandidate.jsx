export default function ModalCandidate({ item }) {
  const { name, thumbnailURL } = item;

  return (
    <div className="modal-hero">
      <img src={thumbnailURL} alt="Thumbnail" />
      <h1>Candidate: {name}</h1>
    </div>
  );
}
