import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/UI/GlobalStyle"
import RoutersApp from "./routers"
import { UserProvider } from "./Context";

function App() {
  return (
    <UserProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <GlobalStyle />
        <RoutersApp />
      </Router>
    </UserProvider>
  )
}

export default App
