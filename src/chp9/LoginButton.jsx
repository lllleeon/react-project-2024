import React from "react";
import Button from "../ch04/Button";

function LoginButton(props){
    return(
        <Button onClick={props.onClick}>로그인</Button>
    );
}

export default LoginButton;