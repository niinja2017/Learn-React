import { ToastContainer } from "react-toastify"
import ExamEight from "./example/examEight"
import ExamEleven from "./example/examEleven"
import ExamFive from "./example/examFive"
import ExamFour from "./example/examFour"
import ExamNine from "./example/examNine"
import ExamOne from "./example/examOne"
import ExamSeven from "./example/examSeven"
import ExamSix from "./example/examSix"
import ExamTen from "./example/examTen"
import ExamThirteen from "./example/examThirteen"
import ExamThree from "./example/examThree"
import ExamTwelve from "./example/examTwelve"
import ExamTwo from "./example/examTwo"
import ExamFourteen from "./example/examFourteen"
import { useEffect, useState } from "react"
import ExamFifteen from "./example/examfifteen"
import UserContext from "./context/UserContext"

function App() {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [editMode, setEditMode] = useState(null)
    const [newValue, setNewValue] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const value = {
            name: name
        }
        try {
            const res = await fetch('https://6a92ef6225936d5660f07fc4.mockapi.io/name', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(value)
            })
            if (!res.ok) throw new Error("this is an error");
            const data = await res.json()
            setList(prev => [...prev, data])
            setName('')
        } catch (error) {
            console.log(error.message)
        }
    }
    const getData = async () => {
        try {
            const res = await fetch('https://6a92ef6225936d5660f07fc4.mockapi.io/name', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            })
            if (!res.ok) throw new Error("this is an error");
            const data = await res.json()
            setList(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const changeData = async (id) => {
        try {
            const res = await fetch(`https://6a92ef6225936d5660f07fc4.mockapi.io/name/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name: newValue })
            })
            if (!res.ok) throw new Error("this is an error");
            setList(prev => prev.map(item =>
                item.id == id
                    ? { ...item, name: newValue }
                    : item
            ))
            setEditMode(null)
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteHandle = async (id) => {
        try {
            const res = await fetch(`https://6a92ef6225936d5660f07fc4.mockapi.io/name/${id}`, {
                method: 'DELETE'
            })
            if (!res.ok) throw new Error("this is an error");
            setList(prev => prev.filter(item => item.id !== id))
        } catch (error) {
            console.log(error.message)
        }
    }

    const [user, setUser] = useState({
        name: 'Sobhan',
        age: 20
    })

    return (
        <div>
            {/* <ToastContainer/> */}
            {/* <ExamOne /> */}
            {/* <ExamTwo /> */}
            {/* <ExamThree/> */}
            {/* <ExamFour/> */}
            {/* <ExamFive/> */}
            {/* <ExamSix/> */}
            {/* <ExamSeven/> */}
            {/* <ExamEight/> */}
            {/* <ExamNine/> */}
            {/* <ExamTen/> */}
            {/* <ExamEleven/> */}
            {/* <ExamTwelve/> */}
            {/* <ExamThirteen /> */}
            {/* <ExamFourteen/> */}
            <UserContext.Provider value={{user , setUser}}>
                <ExamFifteen />
            </UserContext.Provider>

            {/* <form action="" onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <button type="submit">submit</button>
            </form>

            {
                list.map(item =>
                    <div key={item.id}>
                        {
                            editMode == item.id ?
                                <div>
                                    <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                                    <button onClick={() => setEditMode(null)}>Delete</button>
                                    <button onClick={() => changeData(item.id)}>EditMode</button>
                                </div>
                                : <div>
                                    <h2>{item.name}</h2>
                                    <button onClick={() => deleteHandle(item.id)}>Delete</button>
                                    <button onClick={() => setEditMode(item.id)}>EditMode</button>
                                </div>
                        }
                    </div>
                )
            } */}
        </div>
    )
}

export default App
