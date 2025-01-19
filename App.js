import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchWidget from "./components/SearchWidget";
import IndexCreation from "./components/IndexCreation";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchWidget />} />
        <Route path="/index-creation" element={<IndexCreation />} />
        <Route path="/results" element={<ResultsDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
