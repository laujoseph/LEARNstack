import { useEffect } from "react";
import axios from "axios";

const Articles = () => {
  useEffect(() => {
    fetchArticles();
  }, []);
  const fetchArticles = async () => {
    const response = await axios.get("http://localhost:8080/articles");
    console.log(response);
  };
  return <div>Articles</div>;
};

export default Articles;
