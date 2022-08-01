import './index.css';
import Navbar from "./component/Navbar";
import Hero from './component/Hero';
import HeroImg from './component/HeroImg';
import Projects from './component/Projects';
import Responsibility from './component/Responsibility';
import Skllls from './component/Skills';
import Quotes from './component/Quotes';
import Footer from './component/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroImg />
      <Projects />
      <Skllls />
      <Responsibility />
      <Quotes />
      <Footer />
    </>
  );
}

export default App;


