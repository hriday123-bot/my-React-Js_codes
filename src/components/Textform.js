import React, {useState} from 'react'


export default function Textform(props) {
   const handleUpclick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
  }
   const handleDownclick=()=>{
    console.log("lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
  }
    const handleOnChange=(event)=>{
    console.log("on changed");
    setText(event.target.value)
   }

    const [text, setText] = useState('Enter text here');
    // text="New text" //wrong way to change the state
    // setText("Correct way")
    return (
      <>
        <div className='container'>
           <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea  id="myBox" className="Form-control" onChange="alert('You just changed the textarea.')"
  placeholder="Type in this box." value={text} onChange={handleOnChange} cols="150" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpclick}>Covert to uppercase</button>
           <button className="btn btn-primary" onClick={handleDownclick}>Covert to lowercase</button>
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
