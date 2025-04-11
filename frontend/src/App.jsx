import "./App.css";
import Navigation from "./sections/Navigation";
import Body from "./sections/Body";
import { LoginForm } from "./components/login-form";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./sections/Features";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LogOut from "./pages/LogOut";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";

function App() {
  const [nav, setNav] = useState(1);

  useEffect(() => {
    window.addEventListener("unload", () => {
      sessionStorage.clear();
    });
  }, []);

  const [loading, isLoading] = useState(0);

  const toggleLoading = () => {
    if (loading) {
      console.log(loading)
      isLoading(0);
    } else {
      console.log(loading)
      isLoading(1);
    }
  };

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <BrowserRouter>
        {nav == 1 && <Navigation className="sticky top-4 z-5" />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/login"
            element={<LoginForm toggleLoading={toggleLoading} />}
          />
          <Route
            path="/admin"
            element={<Admin setNav={setNav} t/>}
          />
          <Route
            path="/signup"
            element={<Register toggleLoading={toggleLoading} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/faqs" element={<Body />} />
          <Route path="/features" element={<Features />} />
          <Route path="/logged-Out" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
