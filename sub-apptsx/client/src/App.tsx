import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqBar from "./components/Faq/Faq";
import Navbar from "./components/Nav/Nav";
import Articles from "./components/pages/Articles";
import ArticlesPlan from "./components/pages/ArticlesPlan";
import CreateArticle from "./components/pages/CreateArticle";
import LandingPage from "./components/pages/LandingPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ProtectedRoute />}>
            <Route path="/articles" element={<Articles />} />
          </Route>
          <Route path="/article-plans" element={<ProtectedRoute />}>
            <Route path="/article-plans" element={<ArticlesPlan />} />
          </Route>
          <Route path="/articles" element={<ProtectedRoute />}>
            <Route path="/articles/create" element={<CreateArticle />} />
          </Route>
        </Routes>
        <FaqBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
