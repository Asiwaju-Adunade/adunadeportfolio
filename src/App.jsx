import "./App.css"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<About/>} />
       <Route path="/skills" element={<Skills/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
