import React from "react";
import './AttendanceCard2.css'

const students1 = [
    {id:1, name:"아무개", grade:2,major:"인공지능소프트웨어"},
    {id:2, name:"무개아", grade:3,major:"전기"},
    {id:3, name:"개아무", grade:3,major:"그린에너지"},
    {id:4, name:"누구개", grade:4,major:"시간디자인"},
    {id:5, name:"개개개", grade:1,major:"인공지능소프트웨어"}
    {id:1, name:"아무개", grade:2,major:"인공지능소프트웨어"},
    {id:2, name:"무개아", grade:3,major:"전기"},
    {id:3, name:"개아무", grade:3,major:"그린에너지"},
    {id:4, name:"누구개", grade:4,major:"시간디자인"},
    {id:5, name:"개개개", grade:1,major:"인공지능소프트웨어"}
];

function AttendanceCard(){
    return(
        <div className={"attendance-container"}>
            <h2 className={"attendance-title"}>학생사진출석부</h2>
        <div className={"card-container"}>
            {
                students.map((student)=>(
                    <div className={"student-card"}>
                        <img src={student.avatar} alt={student.name}/>
                        <div className={student-info}>
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년</p>
                        </div>
                    </div>
                ))
            }
            <div>
            </div>
    );
}