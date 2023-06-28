import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';



function App() {

  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setalert(null);
  },1000)
  }
  
  return (
    <>
    <Navbar title="Hriday" titletext="Contact details"/>
    <Alert alert={alert}/>
    <div className="container">
        <Textform showAlert={showAlert} heading="Hey Hriday, Enter the text to analyze"/>
        {/* <About/> */}
    </div>
    </>
  );
}

export default App;