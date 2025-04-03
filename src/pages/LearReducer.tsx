import React, { useReducer } from "react";
// Bước 1: Khởi tạo reducer và initialState
const reducer = (state: { count: number }, action: { type: string }) => {
  //    state = {
  //     count: 0
  //    }
  //    action= {
  //     type: "increment"
  //    }
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const initialState = {
  count: 0,
};
const LearReducer = () => {
  // Bước 2: Khởi tạo useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <p> Count is : {state.count}</p>
    </>
  );
};

export default LearReducer;
