// Project files
import Hero from "./sections/Hero";
import Candidates from "./sections/Candidates";
import Footer from "./sections/Footer";
import "./style/style.sass";

export default function App() {
  // Properties
  const SLIDES_URL = "https://www.icloud.com/keynote/07XPMwrxQFSTK9hIaJWrwB2Iw";

  return (
    <div className="App">
      <Hero slidesURL={SLIDES_URL} />
      <Candidates />
      <Footer />
    </div>
  );
}
