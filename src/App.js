import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import { BrowserRouter as Switch, Router, Route,Link, Routes, BrowserRouter} from "react-router-dom";

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
    <Router>
    <Navbar title="Hriday" titletext="About"/>
    <Alert alert={alert}/>
    <div className="container">
      <BrowserRouter>
       <Routes>

          <Route exact path="/about" element={<About/>}/>
      
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Hey Hriday, Enter the text to analyze"/>}/>
          
       </Routes>
      </BrowserRouter>
        
      <About/>
         
    
    </div>
    </Router>
    </>
  );
}

export default App;