import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function FetchAPI() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //           .then(response => response.json())
    //           .then(data => setData(data))
    //           .catch(error => setError(error));
    // },[])
    // useEffect(()=>{
    //     let isMounted = true;
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //           .then((response) =>{setData(response.data)})
    //           .catch(error => setError(error));
    //     return () => {
    //         isMounted = false;
    //     }
    // },[])
    console.log("data++",data)

    const employees = [
        { name: "Alice", department: "Engineering", salary: 80000 },
        { name: "Bob", department: "HR", salary: 50000 },
        { name: "Charlie", department: "Engineering", salary: 90000 },
        { name: "David", department: "Marketing", salary: 60000 },
        { name: "Eve", department: "HR", salary: 70000 },
        { name: "Frank", department: "Marketing", salary: 55000 }
      ];
      employees.sort((a, b) => {
        if (a.department === b.department) {
          return b.salary - a.salary; // Sort by salary (descending) if same department
        }else{
        return a.department.localeCompare(b.department); // Sort by department (alphabetically)
        }
      });
    console.log("sortByDept",employees)
    // https://jsonplaceholder.typicode.com/todos
  return (
    <>
      {
        error ? <div>{error}</div> : 
        <ul>
        {data.map((item) => {
            return(
               <li>{item.title}</li> 
            )
        })}
        </ul>
      }
    </>
    
  )
}
