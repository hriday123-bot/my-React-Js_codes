import React, {useState} from 'react'


export default function Textform(props) {
   
   const handlecopy=()=>{
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied", "success : ");
   }
   const resetInputField=()=>{
    console.log("clear text is clicked");
    let newText=""
    setText(newText)
    props.showAlert("Text clear", "success : ");
   }
   const handleUpclick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Text is converted to upper case", "success : ");
  }
   const handleDownclick=()=>{
    console.log("lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Text is converted to lower case", "success : ");
  }
    const handleOnChange=(event)=>{
    console.log("on changed");
    setText(event.target.value)
   }

  
    const [text, setText] = useState('');
    // text="New text" //wrong way to change the state
    // setText("Correct way")
    return (
      <>
        <div className='container'>
           <h2>{props.heading}</h2>
           <div className="mb-3">
           <textarea  id="myBox" className="Form-control" onChange="alert('You just changed the textarea.')"
  placeholder="Type in this box." value={text} onChange={handleOnChange} cols="150" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpclick}>Covert to uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleDownclick}>Covert to lowercase</button>
           <button className="btn btn-primary mx-2" onClick={resetInputField}>Clear text</button>
           <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
        
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.08 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
      </>
  )
}
