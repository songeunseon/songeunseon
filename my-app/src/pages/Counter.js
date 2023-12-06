import React, {useState} from "react"; //동적값 관리할때 사용(상태)

const Counter = () => {
    const [num,setNumber] = useState(0); //const num = 0; 이렇게 선언한것과 같음

    const increase= () => {
        setNumber(num +1); //num=num+1; 과 같다.
    }
    const decrease= () => {
        setNumber(num -1);
    }
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>    
        </div>
    )
}

export default Counter;