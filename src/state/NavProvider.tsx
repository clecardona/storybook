import { createContext, useContext, useState } from "react"
import { BUTTONS } from "../App"

interface AppContextInterface {
  currentTab: string
  setCurrentTab: (str: string) => void
}

const NavContext = createContext<AppContextInterface | null>(null)

export function NavProvider({ children }: { children: any }) {
  // Local states
  const [currentTab, setTab] = useState<string>(
    localStorage.getItem("tab") || BUTTONS
  )

  function setCurrentTab(str: string) {
    setTab(str)
    localStorage.setItem("tab", str)
  }
  return (
    <NavContext.Provider
      //@ts-ignor
      value={{
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  return useContext(NavContext)
}
