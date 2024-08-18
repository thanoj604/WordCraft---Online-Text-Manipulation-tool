import React from 'react'
import { useState } from 'react'



export default function Textarea(props) {


    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function (event) {
            setText(event.target.result);
        };
        reader.readAsText(file);
    }

    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }



    const ClearText = () => {
        let newText = "";
        setText(newText);
    }


    const CopyIt = () => {
        var text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);


    }

    const SpaceRemover = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
    };


    const ReverseText = () => {
        let char = '';
        let RText = "";
        for (let i = 0; i < text.length; i++) {
            char = text.charAt(i);
            RText = char + RText;
        }
        setText(RText);
    }


    const capitalized = () => {
        let arr = text.split(" ")
        let c = arr.length
        let temp = ""
        while (c !== 0) {
            temp = arr[c - 1].charAt(0).toUpperCase() + arr[c - 1].substring(1).toLowerCase() + " " + temp
            c--;
        }

        setText(temp)
    }



    const replaceString = () => {
        let repval = prompt("Enter the word to be Replaced:");
        let tobereplaced = new RegExp(`\\b${repval}\\b`, 'g');

        let toreplace = prompt("Enter the text that you want to replace with:");

        let newText = text.replace(tobereplaced, toreplace);
        setText(newText);
    };


    const deleteString = () => {
        let repval = prompt("Enter the word to be Deleted:");
        let tobereplaced = new RegExp(`\\b${repval}\\b`, 'g');

        let newText = text.replace(tobereplaced, "");
        setText(newText);
    };


    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "WordcraftText.txt";
        element.click();
    };

    
    const Handle_Onchange = (event) => {
        console.log("Handle Onchange");
        setText(event.target.value);

    }

    const [text, setText] = useState("");

    return (

        <>
            <div className="container">
                <div className="mb-3">
                    <h5 className="my-4">Enter Text Below</h5>
                    <textarea className="form-control " id="Mybox" value={text} onChange={Handle_Onchange} rows="12"></textarea>
                </div>
                <input type="file" className="btn btn-warning mx-2 my-2" accept="text/plain" onChange={readTxt} />
                <button className="btn btn-primary mx-2 my-2" onClick={UpperCase}>UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={LowerCase}>LowerCase</button>
                <button onClick={capitalized} className="btn btn-primary mx-2 my-2">Capitalize</button>
                <button className="btn btn-primary mx-2 my-2" onClick={ReverseText}>Reverse</button>
                <button className="btn btn-primary mx-2 my-2" onClick={SpaceRemover}>Remove Extra Spaces</button>
                <button onClick={replaceString} className="btn btn-primary mx-2 my-2">Replace Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={deleteString}>Delete Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={ClearText}>Clear</button>
                <button type="submit" onClick={speak} className="btn btn-danger mx-2 my-2">Speak</button>
                <button type="submit" onClick={stopSpeaking} className="btn btn-danger mx-2 my-2">Stop Speaking</button>
                <button className="btn btn-info mx-2 my-2" onClick={CopyIt}>Copy</button>
                <button className="btn  btn-success mx-2 my-2" onClick={downloadTxtFile}>Download Text</button>


            </div>

            <br />

            <div className="container">
                <h5 className="my-2">Text Summary</h5>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
            </div>

            <div className="container">
                <h5 className="my-2">Preview</h5>
                <p>{text.length > 0 ? text : "Enter some text in the box above to preview it here."}</p>
            </div>

        </>
    )
}
