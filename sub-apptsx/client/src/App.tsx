import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqBar from "./components/Faq/Faq";
import Navbar from "./components/Nav/Nav";
import Articles from "./components/pages/Articles";
import ArticlesPlan from "./components/pages/ArticlesPlan";
import CreateArticle from "./components/pages/CreateArticle";
import EditProfile from "./components/pages/ChangePassword";
import FoodArticles from "./components/pages/FoodArticles";
import LandingPage from "./components/pages/LandingPage";
import MusicArticles from "./components/pages/MusicArticles";
import SportsArticles from "./components/pages/SportsArticles";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import ChangePassword from "./components/pages/ChangePassword";
import ArticleDetails from "./components/pages/ArticleDetails";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ProtectedRoute />}>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/Food" element={<FoodArticles />} />
            <Route path="/articles/Music" element={<MusicArticles />} />
            <Route path="/articles/Sports" element={<SportsArticles />} />
            <Route path="/articles/create" element={<CreateArticle />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
          </Route>
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/article-plans" element={<ProtectedRoute />}>
            <Route path="/article-plans" element={<ArticlesPlan />} />
          </Route>
        </Routes>
        <FaqBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
