import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/about";
import Projects from "./pages/Projects";
// import Articles from "./pages/Articles";
// import ReadArticle from "./pages/ReadArticle";
import Contact from "./pages/Contact";
import Notfound from "./pages/NotFound";

// figure OUT A way to install google analytics later on

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/articles" element={<Articles />} />
          <Route path="/articles:slug" element={<ReadArticle />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
