export default function CandidateRow({ item }) {
  const { curriculumURL, name, portoflioURL, thumbnailURL } = item;

  return (
    <tr>
      <td>{thumbnailURL}</td>
      <td>{name}</td>
      <td>
        <a href={curriculumURL}>Curriculumn</a>
      </td>
      <td>
        <a href={portoflioURL}>Portoflio</a>
      </td>
    </tr>
  );
}
