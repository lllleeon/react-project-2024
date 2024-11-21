import React, {useState} from "react";

function NameRequestForm(props) {
    const [name, setName] = useState('');
    const [details,setDetails] = useState('');
    const [fruits,setFruit] = useState('수박');
    const [file,setFile] = useState('');

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "details":
                setDetails(target.value);
                break;
            case "fruit":
                setFruit(target.value);
                break;
            case "file":
                setFile(target.value);
                break;
        }
    }
    const handleSubmit = (event) => {
        alert(`
        입력이름 :${name}
        상세내용  :${details}
        선택한과일  :${fruit}
        선택한파일  :${file}
        `);
        name.preventDefault();
    }

    return (
        <form onSubmit="handleSubmit">
            <br/><br/>
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
                    <option>사과</option>
                    <option>바나나</option>
                    <option>포도</option>
                    <option>수박</option>
                </select>
            </label><br/><br/>
            <label>
                파일선택:
                <input id="file" type="file"/>
            </label><br/><br/>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameRequestForm;