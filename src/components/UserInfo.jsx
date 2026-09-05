import { useContext } from "react"
import UserContext from "../context/UserContext"

const UserInfo = () => {
    const {user : {name , age} , setUser} = useContext(UserContext)
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <button onClick={() => setUser({name : 'niinja' , age : 20})}>change Name</button>
        </>
    )
}

export default UserInfo
