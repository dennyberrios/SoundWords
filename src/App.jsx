import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/UI/GlobalStyle"
import RoutersApp from "./routers"

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <GlobalStyle />
      <RoutersApp />
    </Router>
  )
}

export default App
