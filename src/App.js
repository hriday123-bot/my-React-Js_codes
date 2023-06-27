import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="Hriday" titletext="Contact details"/>
    <div className="container">
        <Textform heading="Enter the text to analyze"/>
        {/* <About/> */}
    </div>
    </>
  );
}

export default App;