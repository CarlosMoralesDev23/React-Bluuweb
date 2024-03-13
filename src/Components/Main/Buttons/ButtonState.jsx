import { useState } from "react"

export const ButtonState = ()=>{

    const [count, setCount] = useState(1)
    // console.log(arrayState)
    // const stateNumber   = arrayState[0]
    // const stateFunction = arrayState[1]


    const handleClick = ()=>{
        // count = count + 1
        // console.log('HandleClick')
        setCount(count + 1)
    }

    return <button onClick={handleClick}> ButtonState: {count} </button>

}