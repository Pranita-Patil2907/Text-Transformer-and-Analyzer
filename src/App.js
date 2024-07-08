import './App.css';
import Alert from './components/Alert.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/Textform.js';
import react, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  // Toggle Mode
  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#051923"
      showAlert("Enabled Dark Mode", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Enabled Light Mode", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  // Setting Alert
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  
    
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  
  
  return (
    <>
    {/* <Router>
  <Navbar title="TextUtils" about="About Us" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-5">
  <Routes>
          <Route path="/about" element =  {<About />}>
           </Route>
         
          <Route path="/" element ={<TextForm heading = "Enter your text to analyse" mode = {mode} showAlert={showAlert}/>}>
          </Route>
  </Routes>
  </div>
  </Router> */}

      <Navbar title="TextUtils" about="About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
    <TextForm heading = "Enter your text to analyse" mode = {mode} showAlert={showAlert}/>
    </div>

   </>
  );
  
}
export default App;
