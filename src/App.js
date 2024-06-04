import './App.css';
import img1 from './images/R.jpg'
let name= "SIT";

function App() {
  return (
    <>
      <header>
        <h1>{name}</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <p className="lorem-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem perspiciatis repudiandae ad impedit ea. Dolorum omnis pariatur possimus, dignissimos temporibus necessitatibus, dolor tempore alias voluptatibus illum aliquam error doloremque?</p>
        <img src={img1} alt="img" className="img1" />
      </header>
    </>
  );
}

export default App;
