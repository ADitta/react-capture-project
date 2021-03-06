// Import pages
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Route, Routes, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
import { StyledHide } from "./styles";
// GLobal Style
function App() {
  const location = useLocation();
  return (
    <StyledHide>
      <GlobalStyle />
      <Nav />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </StyledHide>
  );
}

export default App;
