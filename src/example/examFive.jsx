import { useState } from "react"

const ExamFive = () => {
    let title = 'Welcome to my website'
    // const [message , setMessage] = useState('Loading')

    const clickHandle = () => {
        console.log('hello')

        title = 'Welcome'
        console.log(title)
    }
    const handleKey = (e) => {
        // setMessage('loading2')
    }



    const [loading, setLoading] = useState('Loading')
    const handleLoad = () => {
        setLoading('welcome')
    }

    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }

    const [number , setNumber] = useState(0)
    const plus = () => {
        setNumber(number + 1)
    }

    const minus = () => {
        setNumber(number - 1)
    }


    const [input , setInput] = useState('')
    // console.log(message)
    return (
        <div>
            <button onMouseEnter={handleKey} onClick={clickHandle}>Click Me</button>
            {/* <h2>{message}</h2> */}
            <h1>{title}</h1>















            {/* exam one */}
            {/* <button onMouseEnter={() => console.log('Enter')} onMouseLeave={() => console.log('Leave')}>Hover</button> */}

            {/* exam Two */}
            {/* <button onClick={handleLoad}>Load</button>
            <p>{loading}</p> */}


            {/* exam three */}
            {/* <button onClick={handleCount}>++ count</button>
                <p>{count}</p> */}

            {/* exam four */}
            {/* <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
            <button onClick={() => setNumber(0)}>reset</button>
            <p>{number}</p> */}

            {/* exam five */}
            {/* <input type="text" onChange={(e) => setInput(e.target.value)} />
            <p>{input}</p> */}
        </div>
    )
}

export default ExamFive
