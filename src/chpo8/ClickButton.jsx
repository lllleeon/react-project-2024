import React, {useState} from "react";
function ClickButton(){
    function handleClick() {
        alert("버튼을키릭함");
    }
    return(
        <button onClick={handleClick}>
            클릭해보세요
        </button>
    );
}

export default ClickButton