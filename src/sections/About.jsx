import about from "../data/about.json";

export default function About() {
  const imageImport = require("../assets/images/" + about.imageFile);
  const imageFile = imageImport.default;

  return (
    <div id="about">
      <h2>{about.title}</h2>
      <div className="grid">
        <p>{about.description}</p>
        <img src={imageFile} alt="Professional photograph" />
      </div>
    </div>
  );
}
