import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Button Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" ,"success")
          }

    const handleLoClick = ()=>{
      console.log("Button Clicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase" ,"success")

  }

    const handleChange = (event)=>{
        console.log("Button Clicked")
        setText(event.target.value)
    }

    const copyText = ()=>{
      let input = document.getElementById("myText");
      console.log(input.value)
      window.navigator.clipboard.writeText(input.value)
      props.showAlert("Copied to Clipboard!" ,"success")
    }

    const clearText = () =>{
      let blankText = "";
      setText(blankText);
    }


    const [text, setText] = useState('Enter Text Here');
    // setText("Start writing from here");


    return (
      <>
    <div>
        <h2 style={{color: props.mode =="light"? "black": "white"}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" style={{color: props.mode =="light"? "black": "white", backgroundColor: props.mode =="light"? "white": "#343a40" }} value = {text} id="myText" onChange={handleChange} rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={copyText}> Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={clearText}> Clear Text</button>


    </div>

    <div className="container my-4" style={{color: props.mode =="light"? "black": "white"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charactes.</p>
      <p>{0.008 * text.split(" ").length } minutes to read.</p>
      <h3>Perview</h3>
      <p>{text.length>0?text:"Enter your text in above textbox to perview here." }</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
