// NPM Packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import Hero from "./sections/Hero";
import Candidates from "./sections/Candidates";
import Footer from "./sections/Footer";
import "./style/style.sass";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      {/* Landing page */}
      <Hero setModal={setModal} />
      <Candidates setModal={setModal} />
      <Footer />

      {/* Modal */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
