import { useState } from "react";
import Buttons from "./components/Buttons";
import Modal from "./components/Modal";
import "./styles/base.sass";

const tabs = ["buttons", "modal", "anything"];

function App() {
  const [tab, setTab] = useState(tabs[0]);

  const NavBar = tabs.map((item) => (
    <div
      className="nav-item"
      aria-selected={item === tab}
      onClick={() => setTab(item)}
    >
      <h4>{item}</h4>
    </div>
  ));

  return (
    <div className="App">
      <header>
        <h1>
          <a href="https://www.npmjs.com/package/cardo-ui">#cardo-ui</a>
        </h1>
      </header>
      <main>
        <p>Personal UI library.</p>
        <nav>{NavBar}</nav>
        {tab === "buttons" && <Buttons />}
        {tab === "modal" && <Modal />}
        {tab === "anything" && <Modal />}
      </main>
    </div>
  );
}

export default App;
