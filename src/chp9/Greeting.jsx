function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return<UserGreeting/>
    }else {
        return <GusetGreeting/>
    }
}