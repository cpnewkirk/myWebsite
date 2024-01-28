import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CV from "./components/CV";
import Blog from "./components/Blog";
import Home from "./components/Home";
import BlogItem from "./components/BlogItem";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cv" Component={CV} />
        <Route path="/blog" Component={Blog} />
        <Route path="/blog/:id" Component={BlogItem} />
        <Route path="/contact" Component={ContactMe} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
