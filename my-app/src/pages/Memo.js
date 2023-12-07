import React, { useState } from "react";

const Memo = () => {
  const [txt, setTxtValue] = useState("");
  const [Rtxt, setRtxtValue] = useState("");
  const [memoList, setMemoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); // 체크박스 상태

  const Create = () => {
    setMemoList([...memoList, { text: txt, Rtxt: "" }]);
    setTxtValue(""); // 초기화
  };

  const TxtRead = (index) => {
    setRtxtValue(memoList[index].text); // 선택메모 내용설정
  };

  const Update = () => {
    // 체크 항목 수정
    const updatedList = memoList.map((memo, index) =>
      checkedItems.includes(index) ? { ...memo, text: txt } : memo
    );
    setMemoList(updatedList);
    setTxtValue("");
  };

  const Delete = () => {
    const updatedList = memoList.filter((_, index) => !checkedItems.includes(index));
    setMemoList(updatedList);
    setCheckedItems([]); // 체크 항목 초기화
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
    <div className="card border-success mb-3" style={{ maxWidth: '18rem', textAlign: 'center' }}>
      <div className="card-header bg-transparent border-success">메모장</div>
      <div className="card-body text-success">
        <h5 className="card-title">오늘의 메모</h5>
        <input type="text" value={txt} onChange={handleInputChange} placeholder="입력" style={{ textAlign: 'center' }} />
        <br />
        <br />
        <input type="text" value={Rtxt} onChange={() => {}} placeholder="클릭한 내용 보기" style={{ textAlign: 'center' }} />
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
              <label htmlFor={`checkbox-${index}`}>
                {memo.text} <button onClick={() => { TxtRead(index); setRtxtValue(memoList[index].text); }}>내용보기</button>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Memo;
