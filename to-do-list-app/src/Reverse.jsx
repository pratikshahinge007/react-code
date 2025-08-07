import React,{useState} from 'react'
import Search from './Search';

export default function Reverse() {

    const [input,setInput] = useState('');
    const [reverseString,setReverseString] = useState('')
    const handleReverse = () => {
        const reverse = input?.split?.('').reverse().join('')
        setReverseString(reverse);
    }
    const handleReverseWithoutReverse = () => {
        let reverse = '';
        for(let i = input.length - 1; i >= 0; i--){
            reverse += input[i];
        }
        setReverseString(reverse)
    }
    const people = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 32 },
        { name: 'Jim', age: 40 },
        { name: 'Sara', age: 28 }
      ];
      
      const maxAge = people.reduce((max, person) => {
        console.log("max", max)
        console.log("person", person)
        return person.age > max ? person.age : max;
      }, 0);
      
      console.log(maxAge); // Output: 40

      const products = [10,5,20,10,5,30,35,40,20]
    //   distinct values by filter
    const distinctProducts = products.filter((item,index,arr) => {
        return arr.indexOf(item) === index
    })
    console.log("distinctProducts++", distinctProducts)
    const sortProducts = distinctProducts.sort((a,b) => {
        return b-a
    })
    console.log("sortProducts++",sortProducts)
    const minValue = distinctProducts.reduce((prev,current) =>{
        return prev<current ? prev : current
    })
    console.log("min value++", minValue)

    const arr = [1, [2, [3, [4, 5]]]];
const flatArr = arr.flat(2); // Flattens up to depth 2
console.log("flatArr", flatArr); // [1, 2, 3, [4, 5]]

const deepFlatArr = arr.flat(Infinity); // Fully flattens
console.log("deepFlatArr", deepFlatArr); // [1, 2, 3, 4, 5]

function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
}

const nestedArr = [1, [2, [3, [4, 5]]]];
console.log("recursive",flattenArray(nestedArr)); // [1, 2, 3, 4, 5]

    const [count,setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count <= 0 ? 0 :count - 1);
      
  return (
    <div>
    <Search/>
        <input 
            type='text'
            placeholder='Enter a string'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleReverseWithoutReverse}>
            Revere
        </button>
        {
            reverseString && <div>
                Reverse of string is: {reverseString}
            </div>
        }

        <button onClick={handleIncrement}>Increment</button>
        {count}
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
