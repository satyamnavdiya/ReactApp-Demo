import { useCallback, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  const [mode, setMode] = useState("light");

  const [btntext, setBtnText] = useState("Enable Dark Mode")


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      setBtnText("Enable Light Mode")
    } else {
      // (mode !=== 'light' || mode === 'dark')
      setMode('light')
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <>
      <Navbar heading="SIT" aboutText="About Us" mode= {mode} btntext={btntext} toggleMode={toggleMode} />
      <Textarea title="Enter Text to Analyse Here"  />
    </>
  );
}

export default App;
