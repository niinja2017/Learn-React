import { useEffect, useState } from "react"

const ExamTen = () => {
    // example one
    // const [input, setInput] = useState("")

    // console.log("Input Changed:", input)
    // useEffect(() => {
    //     console.log("Input Changed:", input)
    // }, [])

    // useEffect(() => {
    //     console.log("Effect:", input)

    //     return () => {
    //         console.log("Cleanup:", input)
    //     }
    // }, [input])


    // example two
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Timer Running")
    //     }, 1000)

    //     return () => {
    //         clearInterval(timer)
    //         console.log("Timer Cleared")
    //     }
    // }, [count])

    // example Three
    // const [name, setName] = useState("")

    // useEffect(() => {
    //     document.title = name || "React App"
    // }, [name])
    ///////////////////////////////////////////////////////////////

    // useEffect(() => {
    //     console.log('Component Started')
    // }, [])

    //////////////////////////////////////////////////////////////////////////

    // const [test, setTest] = useState('')
    // useEffect(() => {
    //     console.log('Current Value: ', test)
    // }, [test])

    /////////////////////////////////////////////////////////////////////////

    // const [title , setTitle] = useState('')

    // useEffect(() => {
    //     document.title = title == 'Sobhan' ? 'Hello Subhan' : 'React App'
    // } , [title])


    return (
        <>
            {/* example one */}
            {/* <input type="text" onChange={(e) => setInput(e.target.value)} />

            <p>{input}</p> */}

            {/* example two */}
            {/* <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>
                +
            </button> */}

            {/* example Three */}
            {/* <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> */}















            {/* exam two */}
            {/* <input type="text" onChange={(e) => setTest(e.target.value)} /> */}

            {/* exam three */}
            {/* <input type="text" onChange={(e) => setTitle(e.target.value)} /> */}
        </>
    )
}

export default ExamTen
