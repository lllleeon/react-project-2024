import React from "react";
import ReactDOM from "react-dom/client";

function  mybuttonjs(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {
            onClick: () => setIsClicked(true)
        },
        isClicked ? 'Clicked' : 'Click here~~'
    )
}

const domContainer = document.querySelector('root');
const root : Root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(mybuttonjs));