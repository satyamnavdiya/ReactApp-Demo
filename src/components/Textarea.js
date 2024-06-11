import { getElementError } from '@testing-library/react';
import React, { useState } from 'react'

function Textarea(props) {
    const [mytext, setMyText] = useState("Enter Your Text");

    const ChangeText = (event) =>{
        setMyText(event.target.value);
    }

    const handleUpChange = () => {
        let newText = mytext.toUpperCase();
        setMyText(newText)
    }
    
    const handleLoChange = ()  => {
        let newText = mytext.toLowerCase();
        setMyText(newText)
    }
    
    const handleClear = () => {
        let newText = "";
        setMyText(newText)
    }

    const handleCopyText = () =>{
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value)
    }

    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.mytext = mytext;
        window.speechSynthesis.speak(newText);
    }

    const handleExtraSpace = () => {
        let newText = mytext.split(/[ ] + /);
        setMyText (newText.join(" "));
    }

    return (
        <div className='container my-3'>
            <h1>{props.title}</h1>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" value={mytext} rows="8" onChange={ChangeText}></textarea>
            </div>
            <button className='btn btn-outline-success' onClick={handleUpChange}>Convert to Upper Case</button>
            <button className='btn btn-outline-success mx-3' onClick={handleLoChange}>Convert to Lower Case</button>
            <button className='btn btn-outline-success mx-1' onClick={handleClear}>Clear</button>
            <button className='btn btn-outline-success mx-1' onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-outline-success mx-1' onClick={handleSpeak}>Speak</button>
            <button className='btn btn-outline-success mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>

            <h2>Text Summary</h2>
            <p>{mytext.split(" ").length} Word </p>
            <p>{mytext.length} characters </p>
            <p>{0.008*mytext.split("").length} Reading Times </p>
            <h4>Preview</h4>
            <p>{mytext}</p>
        </div>
    )
}

export default Textarea
