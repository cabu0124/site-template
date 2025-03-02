import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../sections/home";
import Projects from "../sections/projects";
import About from "../sections/about";
import Contact from "../sections/contact";
import Header from "../sections/header";
import Footer from "../sections/footer";
import './global.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4 flex items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;