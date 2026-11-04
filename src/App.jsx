import { useVantaDots } from '../useVantaDots';
import Hero from './components/main/Hero';
import Navbar from "./components/navbar/Navbar"
import Button from "./components/button/Buttons";
import Boxes from './components/boxes/Boxes';
import About from './components/about/About';
import My_Skills from './components/skills/My_Skills';
import My_Projects from './components/projects/My_Projects';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  const vantaRef = useVantaDots();

  return (
    <div id="home" className="w-full">
      <Navbar />
      <div className="w-full" ref={vantaRef}>
      {/* <div className='bg-black w-full h-full'> */}
        <Hero />
        <Button />
        <Boxes />
      </div>
      <About />

      <My_Skills />

      <My_Projects />
      <Contact />
      <Footer />
      



    </div>

  );
}

export default App;