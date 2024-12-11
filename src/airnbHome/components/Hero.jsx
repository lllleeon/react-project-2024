import React from "react";
import bgImage from '../imgs/bg.jpg'

function Hero(){
    return(
        <div className="hero" style={{backgroundImage: `url(${bgImage})`}}>
            <h1>특별하고 경치좋은 숙소를 예약하세요</h1>
            <p>에어비엔나엔나엔나 에서  아름답고 특별하고 독특한 숙소를 찾아보세요.</p>
        </div>
    )
}


export default Hero;
