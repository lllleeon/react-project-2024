import React{useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function LoginControl2(prop){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Greething isLoggedIn={isLoggedIn}/>
            {btn}
            btn = <LogoutButton onClick={handleLogoutClick}/>;
            <LoginButton onClick={handleLoginClick}/>;
            }
        </div>
    );
}

export default LoginControl2;