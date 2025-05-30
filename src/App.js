import "./App.sass";
import Introduction from "./Pages/Introduction/Introduction";
import Interests from "./Pages/Interests/Interests";
import Work from "./Pages/Work/Work";
import Projects from "./Pages/Projects/Projects";
import Leadership from "./Pages/Leadership/Leadership";
import Footer from "./Pages/Footer/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Home() {
  return (
    <div className="app_toplevel">
      <div className="app_mainpage_nofooter">
        <Introduction />
        <Interests />
        <Work />
        <Projects />
        <Leadership />
      </div>
      <Footer />
    </div>
  );
}

function RouteToResume() {
  window.location.replace(
    "https://aavarkhatiwada.com/static/media/aavarkhatiwada_resume_2025.24797c251d7a9c99b86a.pdf"
  );
}

function RouteToGitHub() {
  window.location.replace("https://github.com/aavarkhatiwada");
}

function RouteToLinkedIn() {
  window.location.replace("https://www.linkedin.com/in/aavar");
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<RouteToResume />} />
        <Route exact path="/github" element={<RouteToGitHub />} />
        <Route exact path="/linkedin" element={<RouteToLinkedIn />} />
      </Routes>
    </Router>
  );
}
