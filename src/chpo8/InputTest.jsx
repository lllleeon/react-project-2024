import React from "react";
function InputTest(){
    function handleChange(event) {
        console.log("입력된 값:",event.target.value);
    }
    return(
      <input type="text" onChange={handleChange} placeholder="임의의문자열을 이벽ㅂ랳"/>
    );
}
export default InputTest