import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
function App() {
  let [mode, setMode] = useState({ theme: "light", message: "Dark Mode" });
  function toggleMode() {
    document.getElementsByTagName("body")[0].classList.remove("bg-light", "bg-dark", "text-light", "text-dark");
    if (mode.theme === "light") {
      setMode({ theme: "dark", message: "Dark Mode" });

      document.getElementsByTagName("body")[0].classList.add("bg-dark", "text-light");
    } else {
      setMode({ theme: "light", message: "Dark Mode" });
      document.getElementsByTagName("body")[0].classList.add("bg-light", "text-dark");
    }
  }
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<><Navbar title="Text-Utilities-React-App" mode={mode} toggleMode={toggleMode} />
            <Textutils mode={mode} /></>} />
          <Route exact path='/about' element={<><Navbar title="Text-Utilities-React-App" mode={mode} toggleMode={toggleMode} /><About/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
