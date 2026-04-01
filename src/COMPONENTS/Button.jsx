import { useState } from 'react';

import '../CSS/Button.css';
export const ButtonCon = (props) =>{
    const {Name = "Start", func, InputName="Enter the password"} = props;

    const[pass, setPass] = useState("");
    const dumal = pass === "Vote 2026" ? false: true;

    const eventHandler = (event) =>{
        setPass(event.target.value);
    }
    
    return(
        <>
        <input type="text" value={pass} onChange={eventHandler} placeholder={InputName}></input>
        <button onClick={() => func(dumal)}>{Name}</button>
        </>
    )
}