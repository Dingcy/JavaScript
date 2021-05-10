import React, { useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0);


    return (
        <div>
            <p>当前 count{count}</p>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Add</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>jianshao</button>
        </div>

    )
}

export default Counter