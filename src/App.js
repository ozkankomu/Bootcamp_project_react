import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Paths from "./pages/Paths";
import People from "./pages/People";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PersonDetail from "./pages/PersonDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="paths" element={<Paths />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
