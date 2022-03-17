import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import About from "./portfolioContainer/AboutMe/About";
import Home1 from "./portfolioContainer/Testimonial/Home1";
import  ContactUs from "./portfolioContainer/ContactMe/ContactUs";
import ScrollToTop from "./ScrollTop/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Home1 />
      <ContactUs />
      <ScrollToTop />
    </div>
  );
}

export default App;
