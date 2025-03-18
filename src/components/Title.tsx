import React from "react";

interface TitleProps {
  name : string,
  abc: string,
  demo:string
}
// props là phần nhận
const Title = (props : TitleProps) => {
  console.log(props);

  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

export default Title;
