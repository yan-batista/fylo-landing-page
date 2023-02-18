import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App;
