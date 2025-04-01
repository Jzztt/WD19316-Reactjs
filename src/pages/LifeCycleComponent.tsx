import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

const LifeCycleComponent = () => {
  // local state vs global state ( useContext + useReducer, redux, redux toolkit(recommended), zustand(recommended))

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect có 3 trạng thái
  // Trạng thái không có dependency thì luôn chạy lại khi component render
  // Trạng thái  dependency là 1 mảng rỗng thì useEffect chỉ chạy 1 lần khi mounted
  // Trạng thái dependency là 1 mảng có giá trị là 1 state thì khi state thay đổi Effect sẽ chạy lại

  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log("chạy lại");
  };
  // js cứ hàm được khai báo sẽ lưu ở trong bộ nhớ
  // khi mà hàm gọi thì hàm trong bộ nhớ sẽ được kích hoạt
  // Khi mà reload lại trang js chứa hàm

  //useRef
  const inputRef = useRef(null);
  // const inputRef ={
  //   current: null
  //}
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="please enter username"></input>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => setName("Huy")}>Change name</button>
      <p>Hello {name} </p>
      <p>LifeCycle{count} </p>
    </div>
  );
};

export default LifeCycleComponent;
