import React, {useState} from 'react'


export default function Textform(props) {
const handleUpclick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
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
    <div>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea  id="myBox" className="Form-control" value={text} onChange={handleOnChange} cols="150" rows="8"></textarea>
       </div>
       <button className="btn btn-primary" onClick={handleUpclick}>Covert to uppercase</button>
    </div>
  )
}
