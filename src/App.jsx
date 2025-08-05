import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./screens/home.jsx";
import Documents from "./screens/documents.jsx";
import Contact from "./screens/contact.jsx";
import Downloads from "./screens/downloads.jsx";
import Insurance from "./screens/insurance.jsx";
import Registration from "./screens/registration.jsx";
import Translations from "./screens/translations.jsx";

function App() {
  return (
    <Router>
      <div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full max-h-screen min-h-screen overflow-hidden flex flex-col justify-between my-0 mx-auto px-0 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/translations" element={<Translations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
