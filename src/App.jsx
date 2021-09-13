// NPM Package
import { useState } from "react";

// Project files
import ModalContainer from "./components/ModalContainer";
import Hero from "./sections/Hero";
import Candidates from "./sections/Candidates";
import Footer from "./sections/Footer";
import "./style/style.sass";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  // Properties
  const SLIDES_URL = "https://www.icloud.com/keynote/07XPMwrxQFSTK9hIaJWrwB2Iw";

  return (
    <div className="App">
      {/* Page sections */}
      <Hero slidesURL={SLIDES_URL} setModal={setModal} />
      <Candidates />
      <Footer />

      {/* Modal popup */}
      <ModalContainer modal={modal} setModal={setModal} />
    </div>
  );
}
