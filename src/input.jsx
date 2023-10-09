import React,{useEffect, useState} from "react";

 function Box(props){
        const[val,setVal] = useState();
        console.log(props.site);
        var existing = localStorage.getItem(props.site);
        console.log(existing);
        if(existing!=null){
            setVal(existing);
        }
        else setVal("");
    console.log(val);
    function handleChange(e){
        e.preventDefault();
        // console.log(e.currentTarget.textContent);
        setVal(e.currentTarget.textContent);
        // console.log(val);
    }
    function handleClick(e){
        e.preventDefault();
        console.log(val);
        localStorage.setItem(url,val);
        console.log("Succesfully saved to local storage");
        console.log(localStorage.getItem(url));
    }
    return(
        <div>
        
        {/* <textarea> */}

        {/* </textarea> */}
        <button onClick={handleClick}>Save</button>
        </div>
    );
}
export default Box;