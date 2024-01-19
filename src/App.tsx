import Layout from "./components/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Cells from "./components/cells/Cells";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/scrolltotop/ScrollToTop";
import "./App.css";
import Courses from "./components/courses/Courses";
import Login from "./components/login/Login";

function App() {

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cells" element={<Cells />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
