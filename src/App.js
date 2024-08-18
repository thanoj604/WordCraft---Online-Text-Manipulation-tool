import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Textarea from './pages/Textarea';
import About from './pages/About';
import Footer from './components/Footer';

function App() {

  const [Mode, setMode] = useState("light");

  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e3943";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>



      <div>
        <BrowserRouter>
          <Navbar title="WordCraft" mode={Mode} Toggle={ToggleMode} />
          <Routes>
            <Route path='/' element={<Textarea />} />;
            <Route path='/about' element={<About />} />;
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;

