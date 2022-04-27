import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import LandingPage from "./components/pages/LandingPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
