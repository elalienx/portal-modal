export default function CandidateRow({ item }) {
  const { curriculumURL, name, portfolioURL, thumbnailURL } = item;

  return (
    <tr>
      <td>{thumbnailURL}</td>
      <td>{name}</td>
      <td>{curriculumURL}</td>
      <td>{portfolioURL}</td>
    </tr>
  );
}
