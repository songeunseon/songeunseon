import React, {useState} from "react"; 

const Card = () => {
    const [txt,setTxtValue] = useState(""); 

    const increase= () => {
        setTxtValue(txt + ""); //num=num+1; 과 같다.
    }
    const decrease= () => {
        setTxtValue(txt);
    }
    const handleInputChange = (e) => {
        // 사용자가 입력한 내용을 반영하기 위해 setTxtValue 함수를 사용
        setTxtValue(e.target.value);
    };
    
        return(
            <div class="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header bg-transparent border-success">메모장</div>
            <div class="card-body text-success">
                <h5 class="card-title">오늘의 메모</h5>
                <input type="text" value={txt}  onChange={handleInputChange}/>
                <br />
                <br />
                <button onClick={increase}>저장</button> | <button onClick={decrease}>수정</button> | <button>삭제</button>
                <p class="card-text">{txt}</p>
            </div>
            <div class="card-footer bg-transparent border-success">Footer</div>
            </div>
        );
    }


export default Card;