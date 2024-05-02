import React, { useState } from 'react'
import Alert from './Alert';

export default function Textutils(props) {
    let [text, setText] = useState("");
    let [alert, setAlert] = useState(null);
    function handleOnChange(e) {
        setText(e.target.value);

    }
    function handleUppercase() {
        let upperCaseData = text.toUpperCase();
        setText(upperCaseData);
    }
    function handleLowercase() {
        let lowerCaseCaseData = text.toLowerCase();
        setText(lowerCaseCaseData);
    }
    function handleCaptitalize() {
        let capitalizeData = text.replace(/\b\w/g, (char) => {
            return char.toUpperCase();
        })
        setText(capitalizeData);
    }
    function handleRemoveExtraSpaces() {
        let textWithoutExtraSpaces = text.replace(/\s+/g, ' ').trim();
        setText(textWithoutExtraSpaces);
    }
    function handleCopyText(e) {
        if (navigator.clipboard.writeText(text)) {
            showAlert();
        }
    }
    function handleClearText() {
        setText("");
    }
    function showAlert(){
        setAlert({
            type:"success",
            message:"Text is Copied to Clipboard Successfully"
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <>
            <Alert alert={alert} />

            <div className='container mt-5'>
                <h1 className='mb-3'>Enter your text here:</h1>
                <textarea name="textarea" id="textarea" value={text} onChange={handleOnChange} className={`w-100 p-2 rounded-2 bg-${props.mode.theme==="dark"?"black":"light"} text-${props.mode.theme==="dark"?"light":"dark"} `} rows="7" placeholder='Type Something Here...'></textarea>
                <div className="d-flex">
                    <p className='me-3'>Total words: {text.split(/\s+/).filter((e) => {
                        return e.length !== 0;
                    }).length}</p>
                    <p className='mx-3'>Characters: {text.length}</p>
                    <p className="mx-3">{0.008 * text.split(/\s+/).filter((e) => {
                        return e.length !== 0;
                    }).length} Minutes read</p>
                </div>
                <div className=" d-flex flex-column gap-2 justify-content-between my-2 flex-md-row">
                    <button className="btn btn-primary btn-sm" onClick={handleUppercase}>Uppercase</button>
                    <button className="btn btn-primary btn-sm" onClick={handleLowercase}>Lowercase</button>
                    <button className="btn btn-primary btn-sm" onClick={handleCaptitalize}>Capitalize</button>
                    <button className="btn btn-primary btn-sm" onClick={handleRemoveExtraSpaces}>Remove extra spaces</button>
                    <button className="btn btn-primary btn-sm" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn btn-primary btn-sm" onClick={handleClearText}>Clear text</button>
                </div>
                <h2>Preview:</h2>
                <p className='text-break' style={{textAlign:'justify'}}>{text}</p>
            </div>
        </>
    )
}
