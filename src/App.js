import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <> 
      <Navbar title="SIT" aboutText="Contact Us" />
      <TextForm heading="Enter Text to Analyse Below" />
    </>
  );
}

export default App;
