import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { NavProvider } from "./state/NavProvider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>
)
