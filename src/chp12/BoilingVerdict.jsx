import React from "react";

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물잌끓엉</p>
    }
    return  <p>무이안끟ㅎ어요</p>
}

export default BoilingVerdict;