import { useState } from "react";
import useConuter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";
import useLocalStorage from "../hooks/useLocalStorage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useOnlineStatus from "../hooks/useOnlineStatus";

const ExamEleven = () => {

    // example One
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // };

    // const decrement = () => {
    //     setCount(count - 1);
    // };

    // const reset = () => {
    //     setCount(0)
    // }






    // exam One
    // let { count, increment, decrement, reset } = useConuter(0)

    // exam Two
    // const [isOpen, toggle] = useToggle(false);

    // exam Three
    // const [name, setName] = useLocalStorage("name", "");

    // exam Four
    // useDocumentTitle("Eleven Page");

    // exam Five
    // const isOnline = useOnlineStatus();
    return (
        <div>
            {/* exam One */}
            {/* <h1>{count}</h1>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button> */}

            {/* exam Two */}
            {/* <button onClick={toggle}>
                Toggle
            </button>

            {isOpen && <h1>Hello 👋</h1>} */}

            {/* exam Three */}
            {/* <div>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <h1>{name}</h1>
            </div> */}

            {/* exam Five */}
            {/* <h1>
                {isOnline ? "Online 🟢" : "Offline 🔴"}
            </h1> */}
        </div>
    );
}

export default ExamEleven
