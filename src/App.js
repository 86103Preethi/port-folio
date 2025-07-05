import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from './components/Work';
import Project from './components/Project.jsx';
import Contact from './components/Contact';
import './App.css';


const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;