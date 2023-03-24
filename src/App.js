import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Sertifikat from "./components/certificate/Sertifikat";
import Product from "./components/product/Product";
import Information from "./components/information/Information";
import Team from "./components/team/Team";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Sertifikat />
        <Product />
        <Information />
        <Team />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
