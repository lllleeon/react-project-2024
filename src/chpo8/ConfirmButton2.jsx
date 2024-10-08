import React from "react";

class ConfirmButton2 extends  React.Component{

    constructor(props) {
        super(props);
        this.state ={
            isConfirmed: false
        };

    }
    handleConfirm = ()=>{
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed
        }));
    }
    render() {
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                ContirmButton2 {this.state.isConfirmed? "확인":"확인하기"}
            </button>
        );
    }
}
export default ConfirmButton2