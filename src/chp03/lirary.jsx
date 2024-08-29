import React from "react";
import  book from "./book";

function lirary (props) {
    return(
        <div>
            <book name="첨만난 파이썬" numOfPage={300}/>
            <book name="첨만난 awd" numOfPage={400}/>
            <book name="첨만난 리엑트" numOfPage={500}/>
        </div>
    )
}

export  default  lirary;