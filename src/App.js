import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Hriday" titletext="Contact details of Hriday"/>
    <div className="container">
        <Textform heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;