export default function CandidateRow({ item, onClick }) {
  const { curriculumURL, name, portoflioURL, thumbnailURL } = item;

  return (
    <tr>
      <td>
        <img src={thumbnailURL} alt="Thumbnail" />
      </td>
      <td>
        <button onClick={onClick}>{name}</button>
      </td>
      <td>
        <a href={curriculumURL}>Curriculumn</a>
      </td>
      <td>
        <a href={portoflioURL}>Portoflio</a>
      </td>
    </tr>
  );
}
