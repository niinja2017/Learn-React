import { useEffect, useState } from "react"
import useInput from "../hooks/useInput"
import { toast } from "react-toastify"

const ExamThirteen = () => {
    const nameInput = useInput('')
    const emailInput = useInput('')
    const [users, setUsers] = useState([])

    const submitHandle = async (e) => {
        e.preventDefault()
        const data = {
            name: nameInput.value,
            email: emailInput.value
        }
        if (!data.name.trim() || !data.email.trim()) return
        try {
            const res = await fetch('https://6a8eb04ea12b7de8cc0edfbd.mockapi.io/learn-api', {
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
            setUsers(prev => [
                ...prev,
                newUser
            ])
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async () => {
        try {
            const res = await fetch('https://6a8eb04ea12b7de8cc0edfbd.mockapi.io/learn-api', {
                method: 'GET',
                headers: { 'content-type': 'application/json' }
            })
            if (!res.ok) return
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteItemHandler = async (id) => {
        try {
            const res = await fetch(`https://6a8eb04ea12b7de8cc0edfbd.mockapi.io/learn-api/${id}`, {
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

            setUsers(prev => prev.filter(item => item.id !== id))
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

export default ExamThirteen
