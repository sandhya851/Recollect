import React from "react";
import { render } from "react-dom";
import {useState,useEffect} from "react";
import Box from "./input.jsx";
import './styles.css'

function Popup(){
    var initialvalue = "";
    useEffect(()=>{
        getCurrentTab();
    },[]);
    const [url,setUrl] = useState("abcd");
    const[loading,setLoading] = useState(true);
    const[existing,setExisting] = useState(false);
    const [val,setVal] = useState("");
    async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        let [tab] = await chrome.tabs.query(queryOptions);
        // console.log(tab.url);
         setUrl(tab.url.substr(0,50));
        // console.log(url);
         setLoading(false);
        // console.log(url);
    }
    initialvalue = localStorage.getItem(url);
    function handleChange(e){
        e.preventDefault();
        // console.log();
        setVal(e.currentTarget.textContent);
    }
    function handleClick(e){
        e.preventDefault();
        // console.log(val);
        localStorage.setItem(url,val);
    }
    return (
        <div>
            <div>
                {loading && <h1>Loading...</h1>}
                {<h1 style={{wordWrap:'break-word',color:'#606C5D',fontSize:'20px',fontFamily:'Teko'}}>{url}</h1>}
                <div style={{outline:'0',borderColor:"#FFC26F",fontSize:'18px',height:'250px',color:'#001C30',fontFamily:'Kalam'}}contentEditable={true} suppressContentEditableWarning={true} onInput={handleChange}>{initialvalue}</div>
            </div>
            <div style={{textAlign:'center',padding:'2px'}}>
            <button class="button-54" role="button" onClick={handleClick}>Save</button>
            </div>
        </div>
    );
}
render(<Popup />,document.getElementById("react-target"));
