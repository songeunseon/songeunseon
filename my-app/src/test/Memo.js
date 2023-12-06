import React, { useState } from "react";

const Memo = () => {
  const [txt, setTxtValue] = useState("");
  const [memoList, setMemoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); //체크박스 상태


  const Create = () => { //저장
    setMemoList([...memoList, txt]);
    setTxtValue(""); // 초기화
  };

  const Update = (index) => { //수정
    if (memoList.length > 0 && index >= 0 && index < memoList.length) {
      const updatedList = [...memoList];
      updatedList[index] = txt;
      setMemoList(updatedList);
      setTxtValue("");
    }
  };

  const Delete = () => { //삭제
    const updatedList = memoList.filter((_, index) => !checkedItems.includes(index));
    setMemoList(updatedList);
    setCheckedItems([]); // 체크된 아이템 초기화
    setTxtValue("");
  };

  const handleInputChange = (e) => {
    setTxtValue(e.target.value);
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header bg-transparent border-success">메모장</div>
      <div className="card-body text-success">
        <h5 className="card-title">오늘의 메모</h5>
        <input type="text" value={txt} onChange={handleInputChange} />
        <br />
        <br />
        <button onClick={Create}>저장</button>{" | "}
        <button onClick={Delete}>삭제</button>{" | "}
        <button onClick={Update}>수정</button>
      </div>
      <div className="card-footer bg-transparent border-success">
        <ul className="list-group">
          {memoList.map((memo, index) => (
            <li key={index} className="list-group-item">
              <input 
              type="checkbox" 
              id={`checkbox-${index}`}
              checked={checkedItems.includes(index)}
              onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={`checkbox-${index}`}>{memo}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Memo;