import { useState } from 'react'
import './examEight.css'

const ExamEight = () => {

    const [status, setStatus] = useState(false)

    return (
        <div className='blue'>
            <h1 style={{ backgroundColor: 'yellow', textAlign: 'center' }}>Hello</h1>



            <h1
                className={`title ${status ? 'titleHover' : ''}`}
                onMouseEnter={() => setStatus(true)}
                onMouseLeave={() => setStatus(false)}
            >Hello</h1>






























            {/* exam one  */}
            {/* <h2
                style={status ? { backgroundColor: 'black', color: 'white' } : {backgroundColor : 'white' , color : 'black'}}
                onMouseEnter={() => setStatus(true)}
                onMouseLeave={() => setStatus(false)}
            >
                Change Color
            </h2> */}
        </div>
    )
}

export default ExamEight
