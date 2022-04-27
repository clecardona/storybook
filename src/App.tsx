import { useEffect, useState } from "react"
import Buttons from "./components/Buttons"
import Modals from "./components/Modals"
import "./styles/base.sass"

const BUTTONS = "buttons"
const MODALS = "modals"
const ANYTHING = "anything"
const tabs = [BUTTONS, MODALS, ANYTHING]

function App() {
  const [tab, setTab] = useState(tabs[0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tab])

  const NavBar = tabs.map((item) => (
    <div
      className='nav-item'
      aria-selected={item === tab}
      onClick={() => setTab(item)}
    >
      <h4>{item}</h4>
    </div>
  ))

  return (
    <div className='App'>
      <header>
        <h1>
          <a href='https://www.npmjs.com/package/cardo-ui'>#cardo-ui</a>
        </h1>
      </header>
      <main>
        <p>
          Cardo UI library. A npm package of UI components I publish here the
          components I create .
          <br />© clecardona 2022
        </p>
        <nav>{NavBar}</nav>
        {tab === BUTTONS && <Buttons />}
        {tab === MODALS && <Modals />}
        {tab === ANYTHING && <Modals />}
      </main>
    </div>
  )
}

export default App
