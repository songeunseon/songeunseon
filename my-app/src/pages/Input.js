import React, {useState} from "react"; //동적값 관리할때 사용(상태)

const Input = () => {
    const [txtValue,setTextValue] = useState(""); // 초기값은 빈배열

    const onChange = (e) => {
        setTextValue(e.target.value)
    }
    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;