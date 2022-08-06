import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase!', 'success');
    }

        const handleLowClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to LowerCase!', 'success');
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared!', 'success');
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join (' '));
    props.showAlert('Extra Spaces Removed!', 'success');
}

    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Copied to Clipboard!', 'success');
    }

    const handleonChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color:props.mode=== 'dark' ? 'white' : '#042743'}} >
                <h1>  {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode=== 'dark' ? 'grey' : 'white', color:props.mode=== 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary btn-sm " onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary btn-sm " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode=== 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p> <strong> {text.split(" ").length} Words  and </strong><strong> {text.length} Characters</strong></p>
                <p> <strong>{0.007 * text.split(" ").length} Minutes read</strong></p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
    }
