import React,{useEffect,useState} from "react";
import "./style.css";
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1/comments
export default function App() {
    const [data1,setData1] = useState();
    const [data2,setData2] = useState();
    const [error,setError] = useState();
    useEffect(() => {
        const fetchData = async () => {
          try{
            const [response1, response2] = await Promise.all(
              [
              fetch("https://jsonplaceholder.typicode.com/posts"),
              fetch("https://jsonplaceholder.typicode.com/postscomments")
            ]
            )
            const dataAPI1 = await response1.json();
            const dataAPI2 = await response2.json();
            setData1(dataAPI1);
            setData2()
          }catch{

          }
          fetchData();
        }
    },[])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)  </p>
    </div>
  );
}
