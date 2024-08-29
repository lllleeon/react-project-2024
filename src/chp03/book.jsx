import React from "react";

function  book(){
    return (
        <div>
            <h1>{`이책의 이름은 ${props.name}입니다`}</h1>
            <h2>{`이책은 ${props.numOfpage}페이지로 이루어져 있습니다`}</h2>
        </div>
    )
}

export  default  book;