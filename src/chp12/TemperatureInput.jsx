import React from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleName = {
    c: "섭씨",
    f: "화씨"
}

function TemperatureInput(props){


    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }
    return(
        <fieldset>
            <legend>온도를읿려ㅛㄱ하세오(단위:{scaleName[props.scale]})</legend>
            <input type="text" value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}




export default TemperatureInput;