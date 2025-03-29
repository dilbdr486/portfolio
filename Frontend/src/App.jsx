import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import About from "./components/about";
import Services from "./components/myServices";
import Work from "./components/myWork";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
