import React from "react";

const students = [
    {id:1, name:"아무개", grade:2,major:"인공지능소프트웨어"},
    {id:2, name:"무개아", grade:3,major:"전기"},
    {id:3, name:"개아무", grade:3,major:"그린에너지"},
    {id:4, name:"누구개", grade:4,major:"시간디자인"},
    {id:5, name:"개개개", grade:1,major:"인공지능소프트웨어"}
];

function Studentattendance() {
    return(
        <div>
            <h1>학생출섧주</h1>
            <ul>
                {
                    students.map((student)=>(
                        <li key={student.id}>
                            <b>{student.name}</b> - {student.grade}학년, {student.major}전공
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Studentattendance;