import { useEffect, useReducer } from "react"
import useInput from "../hooks/useInput"
import { toast } from "react-toastify"

const ExamFourteen = () => {
    const nameInput = useInput('')
    const emailInput = useInput('')
    const [users, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SetUser':
                return action.payload
            case 'AddUser':
                return [...state, action.payload]
            case 'DeleteUser':
                return state.filter(item => item.id !== action.payload)
            default:
                return state
        }
    }, [])

    const submitHandle = async (e) => {
        e.preventDefault()
        const data = {
            name: nameInput.value,
            email: emailInput.value
        }
        if (!data.name.trim() || !data.email.trim()) return
        try {
            const res = await fetch('https://6a92ef6225936d5660f07fc4.mockapi.io/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (!res.ok) {
                toast.error('Errors', {
                    position: "top-left",
                    autoClose: 5000,
                    theme: "dark",
                });
                return
            }
            nameInput.reset()
            emailInput.reset()
            const newUser = await res.json()
            toast.success('Item Created', {
                position: "top-left",
                autoClose: 5000,
                theme: "dark",
            });
            dispatch({
                type: 'AddUser',
                payload: newUser
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async () => {
        try {
            const res = await fetch('https://6a92ef6225936d5660f07fc4.mockapi.io/users', {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
            if (!res.ok) return
            const data = await res.json()
            console.log(data)
            dispatch({ type: 'SetUser', payload: data })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteItemHandler = async (id) => {
        try {
            const res = await fetch(`https://6a92ef6225936d5660f07fc4.mockapi.io/users/${id}`, {
                method: 'DELETE'
            })

            if (!res.ok) {
                toast.error('not found', {
                    position: "top-left",
                    autoClose: 5000,
                    theme: "dark",
                });
                return
            }
            dispatch({
                type: 'DeleteUser',
                payload: id
            })
            toast.success('Item Deleted', {
                position: "top-left",
                autoClose: 5000,
                theme: "dark",
            });
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div>
                <form onSubmit={submitHandle}>
                    <div>
                        <label htmlFor="">Name : </label>
                        <br />
                        <input value={nameInput.value} onChange={nameInput.onChange} type="text" name="name" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Email : </label>
                        <br />
                        <input value={emailInput.value} onChange={emailInput.onChange} type="email" name="email" />
                    </div>
                    <br />
                    <button>submit</button>
                </form>

                {users.map(item =>
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.email}</p>
                        <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ExamFourteen
