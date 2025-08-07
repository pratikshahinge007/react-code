
import React,{useState, useEffect} from "react"
// fetchTransaction o/p - ["1", "2", "3" , "4", "5"]

// fetchTransactionDetails o/p - 
    

function Transaction () {
    const data = {
        id : "1",
        name : "item 1",
        price : 200,
        description : "item 1 description"
    }
    const [transactionID, setTransactionID] = useState([]);
    // const fetchTransaction = fetchTransactions();
    // useEffect(() => {   
    //     setTransactionID(fetchTransaction)
    // },[transactionID])
    return(
        <>
            {
                transactionID?.map((item,index) => {
                    return(
                        <React.Fragment key={`item-${index}`}>
                            {item }
                        </React.Fragment>
                    )
                })
            }
        </>
    )
} 

export default Transaction;
