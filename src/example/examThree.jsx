import Car from "../components/Car";
import Card from "../components/Card"
import Me from "../components/Me";
import User from "../components/User"

const ExamThree = () => {
    const username = "Ali";


    const user = {
        name: "Ali",
        age: 22,
        city: "Tehran"
    }

    return (
        <div>
            {/* <Card/>
            <Card/> */}


            {/* <User name="Ali" />
            <User name="Sara" />
            <User name="Reza" /> */}


            {/* <User
                name="Ali"
                age={20}
                city="Tehran"
            /> */}

            {/* <User skills={["HTML","CSS","React"]}/> */}

            {/* <User
                user={{
                    name: "Ali",
                    age: 22
                }}
            /> */}

            {/* <User name={username} /> */}






















            {/* exam One */}
            {/* <Car barnd={'Ford'} model={'Mustang'} year={2005}/>
            <Car barnd={'irankhodro'} model={'pride'} year={1990}/> */}

            {/* exam Two */}
            {/* <Me user={user}/> */}
        </div>
    )
}

export default ExamThree
