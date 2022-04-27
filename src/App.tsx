import { useEffect, useState } from "react"
import Buttons from "./components/Buttons"
import Modals from "./components/Modals"
import Tooltip from "./components/Tooltips"
import { useNav } from "./state/NavProvider"
import "./styles/base.sass"

export const BUTTONS = "buttons"
export const MODALS = "modals"
export const ANYTHING = "anything"
const tabs = [BUTTONS, MODALS, ANYTHING]

function App() {
  //@ts-ignore
  const { currentTab, setCurrentTab } = useNav()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentTab])

  const NavBar = tabs.map((item, idx) => (
    <div
      key={idx}
      className='nav-item'
      aria-selected={item === currentTab}
      onClick={() => setCurrentTab(item)}
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
        {currentTab === BUTTONS && <Buttons />}
        {currentTab === MODALS && (
          <>
            <Modals />
            <Tooltip />
          </>
        )}
        {currentTab === ANYTHING && <Modals />}
      </main>
    </div>
  )
}

export default App
