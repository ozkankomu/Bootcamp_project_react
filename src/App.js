import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Paths from "./pages/Paths";
import People from "./pages/People";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Bootcamp_project_react" element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />

        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="login" element={<Login />} />

        <Route path="*" element={<Navigate to="/" />} />
        <Route path="paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
