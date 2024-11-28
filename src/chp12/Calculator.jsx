import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator(props){
    const [temperature, setTemperature] = useState();

    const handleChange =  (event) => {
        setTemperature(event.target.value);
    }
    return(
        <fieldset>
            <legend>섭씨온도를읿려ㅛㄱ하세오</legend>
            <input type="text" value={temperature} onChange={handleChange}/>
            <BoilingVerdict
                celsius={parseFloat(temperature)}
            />
        </fieldset>
    );
}





export default Calculator;