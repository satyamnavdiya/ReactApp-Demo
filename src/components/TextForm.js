import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("Input your Text");
    // setText("Enter Your Text");


    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleUpChange = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }


    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }


    return (
        <div>
            <div className="container my-5">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                
                <button className='btn btn-outline-success my-3' onClick={handleUpChange}>Convert to Upper Case</button>
                <button className='btn btn-outline-success my-3 mx-3' onClick={handleLoChange}>Convert to Lower Case</button>
                <button className='btn btn-outline-success my-3 mx-3' onClick={handleSpeak}>Speak</button>
                <button className='btn btn-outline-success my-3 mx-3' onClick={handleClear}>Clear</button>
            </div>

            <div className="container">   
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words </p>
                <p>{text.length} Characters </p>
                <p>{0.008 * text.split(" ").length} Reading Time </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
