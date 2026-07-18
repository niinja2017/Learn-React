const Me = ({ user: { name, age, city } }) => {
    return (
        <div>
            {name}
            {age}
            {city}
        </div>
    )
}

export default Me
