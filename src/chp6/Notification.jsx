import React from "react";
import "./Notification.css"

//const styles ={
 //   wrapper: {
 //       margin: 8,
 //       padding: 8,
 //       display: "flex",
  //      flexDirection: "row",
  //      border: "1px solid grey",
 //       borderRadius: 16,
 //   },
 //   messageText:{
 //       color: "magenta",
 //       fontSize: 16,
//    },
//};

class Notification extends React.Component{
    constructor(props) {
        super(props);

        this.state ={

        };
    }
    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount()called`)
    }
    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount()called`)
    }
    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount()called`)
    }

    render() {
        return(
            <div className="wrapper">
                <span className="messageText">
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;