import React, { useState } from "react";

export default function Addition() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [clickedNum, setClickedNum] = useState([]);
  
  const onInputChange = (num, checked) => {
    
    if(checked){
        setClickedNum((prev) => [...prev, num]);
    }else{
        setClickedNum((prev) => prev.filter((number) => number !== num));
    }
   
  }
  const sum = clickedNum.reduce((acc, current) => acc + current, 0);

  return (
    <>
      {numbers?.map((num, index) => {
        return (
            <>
          <div key={`num+${index}`}>
            <input type="checkbox" onChange={(e) => onInputChange(num,e.target.checked)}/>{num}
          </div>
         
          </>
        );
      })}
      Sum is: {sum}
    </>
  );
}
