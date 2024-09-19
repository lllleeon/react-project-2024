import React from "react";
import Notification from "./Notification";

const reservedNotifications =[
    {
        message: "아안녕오늘일ㅈㅇ으라렬드립니다"
    },
    {
        message: "현재섭중인 웹프로그랙밍활용수럽을 ㅕㄹ심히 들으세어"
    },
    {
        message: "열심히듣고 기서브에 커밋하시면 됩ㄴ다"
    },
];
var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          notifications: [],
        };
    }
    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(() =>  {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                   notifications: notifications,
                });
            }else{
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer)
            clearInterval(timer);
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification message={notification.message}/>
                    })
                }
            </div>
        );
    }
}



export default NotificationList;