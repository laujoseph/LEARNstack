import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Articles from "./components/pages/Articles";
import LandingPage from "./components/pages/LandingPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
