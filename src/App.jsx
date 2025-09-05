import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./screens/home.jsx";
import Documents from "./screens/documents.jsx";
import Contact from "./screens/contact.jsx";
import Downloads from "./screens/downloads.jsx";
import Insurance from "./screens/insurance.jsx";
import Registration from "./screens/registration.jsx";
import Translations from "./screens/translations.jsx";
import Footer from "./components/footer.jsx";

function Layout({ children }) {
  const location = useLocation();

  // Pages where footer should be hidden
  const noFooterRoutes = ["/documents", "/contact"];

  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <>
      {children}
      {!hideFooter && <Footer />}{" "}
      {/* ✅ show footer only if not in excluded pages */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/translations" element={<Translations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
