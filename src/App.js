import './App.css';
import Alert from './components/Alert.js';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/Textform.js';
import react, {useState} from 'react';


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
  <Navbar title="TextUtils" about="About Us" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-5">
  <TextForm heading = "Enter your text to analyse" mode = {mode} showAlert={showAlert}/>
  {/* <About/> */}
  </div>
   </>
  );
  
}
export default App;
