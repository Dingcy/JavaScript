import { useState } from "react";
import { useInterval }  from '../../lib'


function IntervalTest() {
    const [count,setCount] = useState(0);

    useInterval(() => {
        setCount(count => count+1)
    },1000)


    return (
        <div>useInterval {count}</div>
    )
}

export default IntervalTest