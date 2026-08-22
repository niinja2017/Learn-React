import { useEffect, useRef, useState } from "react"

import videoHtml from "./../public/1-what-is-html.mp4";

const ExamTwelve = () => {
    // const numberRef = useRef(0);

    // const changeNumber = () => {
    //     numberRef.current++;
    //     console.log(numberRef.current);
    // };

    // example one
    // const inputRef = useRef(null);

    // const focusInput = () => {
    //     inputRef.current.focus();
    //     console.log(inputRef.current)
    // };


    // exam one
    // const inputRef = useRef(null)
    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])

    // exam two
    // const myrefOne = useRef(null)
    // const myrefTwo = useRef(null)
    // const resetClick = () => {
    //     myrefOne.current.value = ''
    //     myrefTwo.current.value = ''
    // }

    // exam three
    // const [time, setTime] = useState(0);
    // const idRef = useRef(null);

    // const handleStart = () => {
    //     if (idRef.current) return;
    //     idRef.current = setInterval(() => {
    //         setTime(prev => prev + 1);
    //     }, 1000);
    // };

    // const handleStop = () => {
    //     clearInterval(idRef.current);
    // };

    // exam four
    // const videoRef = useRef(null)
    // const handleClick = () => {
    //     if (videoRef.current.paused) {
    //         videoRef.current.play()
    //     } else {
    //         videoRef.current.pause()
    //     }
    // }



    // example Two
    // const [showMessage , setShowMessage] = useState(true)
    // const myRef = useRef(null)

    // const toggleMessage = () => {
    //     setShowMessage(!showMessage)
    // }

    // const toggleMessageRef = () => {
    //     myRef.current.remove()
    // }

    return (
        <>
            {/* <button onClick={changeNumber}>
                Change Number
            </button> */}

            {/* example one */}
            {/* <input ref={inputRef} />

            <button onClick={focusInput}>
                Focus
            </button> */}



            {/* exam one */}
            {/* <input type="text" ref={inputRef} /> */}

            {/* exam two */}
            {/* <input type="text" ref={myrefOne} />
            <br /><br />
            <input type="text" ref={myrefTwo} />
            <br /><br />
            <button onClick={resetClick}>click</button> */}

            {/* exam three */}
            {/* <div>
                <div>stop watch : {time}</div>

                <div>
                    <button onClick={handleStart}>start</button>
                    <button onClick={handleStop}>stop</button>
                </div>
            </div> */}

            {/* exam four */}
            {/* <button onClick={handleClick}>
                click
            </button>
            <div>
                <video ref={videoRef} src={videoHtml}></video>
            </div> */}

            {/* exmaple two */}
                {/* <button onClick={toggleMessage}>toggle message</button>
                <button onClick={toggleMessageRef}>remove message Ref</button>
                {showMessage && <p ref={myRef}>Hello World</p>} */}
                {/* <p ref={myRef}>Hello world</p> */}
        </>
    );
}

export default ExamTwelve
