import React, {useState} from "react";

function signUp(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [gender,setGender] = useState("");
    const [interests,setInterests] = useState("");
}
const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
        이름 :${name}
        이메일  :${email}
        성별  :${gender}
        관심사  :${interests}
        `);
};
const handleChange = (event) => {
    const{target} = event;
    switch (target.id) {
        case "name":
            setName(target.value.toUpperCase());
            break;
        case "email":
            setEmail(target.value);
            break;
        case "password":
            setPassword(target.value);
            break;
        case "gender":
            setGender(target.value);
            break;
        case "interests":
            setInterest(target.value);
            break;
    }

    return (
        <div className="singu-container"
             <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    성명:
                    <input type="text" value={name} onChange={handleChange} />
                </label><br/><br/>
                <label>
                    요청사항:
                    <textarea id="details" value={details} onChange={handleChange}/>
                </label>
                <label>
                    좋아하는 과일:
                    <select id="fruit" value={fruits} onChange={handleChange}>
                        <option>남자</option>
                        <option>여자</option>
                        <option>기타</option>
                    </select>
                </label>

                <label>
                    관심사:
                    <text
                </label>

                <button type="submit">가입하기</button>
            </form>
            <div/>
        );
    }

export default signUp;