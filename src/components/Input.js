import React from "react";
import './Input.css';


const Input = props => (
    <div className="input-wrapper">
        {props.history && <div className="input-previous"> {props.history }</div>}
        <div className="input"> 
            {props.input}
        </div>
    </div>
    

)

export default Input;
