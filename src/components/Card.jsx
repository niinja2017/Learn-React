const Card = ({title , children}) => {
    // console.log(props)
    return (
        <div>
            <h2>Card Title</h2>
            <h2>Card Details</h2>
            <h2>Card Time</h2>
            <h2>{title}</h2>
            {children}
            <hr />
        </div>
    )
}


export default Card
