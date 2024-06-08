import './App.css';
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <> 
      <Navbar title="SIT" aboutText="Contact Us" />
      <AboutUs heading="About Us" />
    </>
  );
}

export default App;
