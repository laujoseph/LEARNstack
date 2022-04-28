import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Articles from "./components/pages/Articles";
import LandingPage from "./components/pages/LandingPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ProtectedRoute />}>
            <Route path="/articles" element={<Articles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
