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

    return (
        <div>
            <div class="mx-5 my-5">
                <h1>{props.heading}</h1>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-outline-success my-3' onClick={handleUpChange}>Convert to Upper Case</button>
            </div>
        </div>
    )
}
