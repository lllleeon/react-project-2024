import React,{useState} from "react";
import Toolbar from "./Toolbar";

function landingPage(props){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const onClickLogin = ()=>{
        setIsLoggedIn(true);
    }
    const onClickLogout = ()=>{
        setIsLoggedIn(false);
    }
    return(
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
            <div style={{padding:16}}>
                경주와함캐하는리겡ㄱ트공부참재미있어요
            </div>
        </div>
    );
}

export default LandingPage;