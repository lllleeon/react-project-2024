import React{useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function LoginControl(prop){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }
    let btn;
    if(isLoggedIn){
        btn = <LogoutButton onClick={handleLogoutClick}/>;
    }else {
        btn = <LoginButton onClick={handleLoginClick}/>;
    }

    return(
        <div>
            <Greething isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl;