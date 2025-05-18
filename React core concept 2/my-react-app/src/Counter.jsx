import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(5);

    let add1 = () => {
        let newCount = count + 1;
        setCount(newCount);
    }

    let reduce1 = () => {
        let newCount = count - 1;
        setCount(newCount);

    }

    return (
        <div style={{ border: '2px solid red', padding: '10px', borderRadius: "10px" }}>
            <h3>count : {count}</h3>
            <button onClick={add1}>add 1</button>
            <button onClick={reduce1}> reduce 1</button>
        </div>
    )
}