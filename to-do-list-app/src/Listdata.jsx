import React,{useState,useEffect,useRef} from "react";
import './Listdata.css';
function Listdata() {
    const jsonData = [
        {
            id: 1,
            image: 'img',
            name : 'Leslie Alexander',
            email : 'leslie.alexander@example.com',
            designation : 'Co-Founder / CEO',
            lastSeen :'Last seen 3h ago'
        },
        { 
            id: 2,
            image: 'img',
            name : 'Michael Foster',
            email : 'michael.foster@example.com',
            designation : 'Co-Founder / CTO',
            lastSeen :'Last seen 3h ago'
        },
        {
            id: 3,
            image: 'img',
            name : 'Dries Vincent',
            email : 'dries.vincent@example.com',
            designation : 'Business Relations',
            lastSeen :'Online'
        },
        {
            id: 4,
            image: 'img',
            name : 'Lindsay Walton',
            email : 'lindsay.walton@example.com',
            designation : 'Front-end Developer',
            lastSeen :'Last seen 3h ago'
        },
        {
            id: 5,
            image: 'img',
            name : 'Courtney Henry',
            email : 'courtney.henry@example.com',
            designation : 'Designer',
            lastSeen :'Last seen 3h ago'
        },
        {
            id: 6,
            image: 'img',
            name : 'Tom Cook',
            email : 'tom.cook@example.com',
            designation : 'Director of Product',
            lastSeen :'Online'
        },
    ]
    const [data, setData] = useState(jsonData);
    const containerRef = useRef(null);
    const [loading, setLoading] = useState (false);
    useEffect(() =>{
        const handleScrolling = () => {
                if(containerRef.current){
                    const {scrollTop,scrollHeight,clientHeight} = containerRef.current;
                    if(scrollTop + clientHeight >= scrollHeight - 10 && !loading){
                        setLoading(true);
                        setTimeout(() => {
                            setData((prevData) => [
                                ...prevData,
                                {
                                    id:prevData.length + 1,
                                    image: 'img',
                                    name : 'Tom Cook',
                                    email : 'tom.cook@example.com',
                                    designation : 'Director of Product',
                                    lastSeen :'Online'
                                }
                            ]);
                            setLoading(false);
                        },1000)
                    }
                }
        }

        const refCurrent = containerRef.current;
        if(refCurrent){
            refCurrent.addEventListener("scroll",handleScrolling);
            return() => refCurrent && refCurrent.removeEventListener("scroll", handleScrolling);
        }
    },[loading])
    return(
        <div ref={containerRef}>
            {data?.map((data,index) => {
               return(
                <> 
                <img src={data.image}/>
                    <div className="list-style"> 
                         <div className="name-style">{data.name}</div>
                         <div>{data.designation}</div>    
                    </div>
                    <div className="list-style"> 
                    <div className="subdata-style">{data.email} </div>
                    <div className="subdata-style">  {data.lastSeen}</div>
                    </div> 
               <div className="border-style"></div>
               </>
               )
            })    
            }
            {
                loading && (
                    <div ref={containerRef}>Loading more...</div>
                )
            }
        </div>
    )
}

export default Listdata;

// import { useState, useEffect, useRef } from "react";

// const initialUsers = [
//   { id: 1, name: "Leslie Alexander", email: "leslie.alexander@example.com", role: "Co-Founder / CEO", status: "Last seen 3h ago" },
//   { id: 2, name: "Michael Foster", email: "michael.foster@example.com", role: "Co-Founder / CTO", status: "Last seen 3h ago" },
//   { id: 3, name: "Dries Vincent", email: "dries.vincent@example.com", role: "Business Relations", status: "Online" },
//   { id: 4, name: "Lindsay Walton", email: "lindsay.walton@example.com", role: "Front-end Developer", status: "Last seen 3h ago" },
//   { id: 5, name: "Courtney Henry", email: "courtney.henry@example.com", role: "Designer", status: "Last seen 3h ago" },
//   { id: 6, name: "Tom Cook", email: "tom.cook@example.com", role: "Director of Product", status: "Online" },
// ];

// export default function Listdata() {
//   const [users, setUsers] = useState(initialUsers);
//   const [loading, setLoading] = useState(false);
//   const loaderRef = useRef(null);

//   // Simulate API call
//   const loadMoreUsers = () => {
//     if (loading) return;
//     setLoading(true);
//     setTimeout(() => {
//       const newUsers = [
//         { id: users.length + 1, name: "New User " + (users.length + 1), email: "new.user@example.com", role: "New Role", status: "Online" },
//       ];
//       setUsers((prev) => [...prev, ...newUsers]);
//       setLoading(false);
//     }, 1000);
//   };

//   // Intersection Observer for lazy loading
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           loadMoreUsers();
//         }
//       },
//       { threshold: 1.0 }
//     );

//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       {users.map((user) => (
//         <div key={user.id} className="border-b py-2">
//           <p className="font-semibold">{user.name}</p>
//           <p className="text-sm text-gray-500">{user.email}</p>
//           <p className="text-sm">{user.role}</p>
//           <p className="text-xs text-green-500">{user.status}</p>
//         </div>
//       ))}
//       <div ref={loaderRef} className="text-center py-4">
//         {loading && <p>Loading...</p>}
//       </div>
//     </div>
//   );
// }
