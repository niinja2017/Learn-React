import { useState } from "react"
import Article from "../components/Article"

const ExamSix = () => {
    // let headings = [
    //     <span>Home</span>,
    //     <span>React</span>,
    //     <span>Tailwindcss</span>,
    //     <span>JavaScript</span>
    // ]

    // let headings = [
    //     "Home",
    //     "React",
    //     "Tailwindcss",
    //     "JavaScript"
    // ]

    // const article = [
    //     {
    //         title: 'JavaScript',
    //         message: 'this is is JavaScript article message'
    //     },
    //     {
    //         title: 'Nodejs',
    //         message: 'this is is Nodejs article message'
    //     },
    //     {
    //         title: 'PHP',
    //         message: 'this is is PHP article message'
    //     },
    //     {
    //         title: 'Python',
    //         message: 'this is is Python article message'
    //     }
    // ]

    // const [article, setArticle] = useState([
    //     {
    //         title: 'JavaScript',
    //         message: 'this is is JavaScript article message'
    //     },
    //     {
    //         title: 'Nodejs',
    //         message: 'this is is Nodejs article message'
    //     },
    // ])

    // const handleClick = () => {
    //     setArticle([
    //         ...article,
    //         {
    //             title: 'PHP',
    //             message: 'this is a PHP article message'
    //         }
    //     ])

    //     setTimeout(() => {
    //         setArticle(prev =>
    //             [
    //                 ...prev,
    //                 {
    //                     title: 'PHP',
    //                     message: 'this is a PHP article message'
    //                 }
    //             ]
    //         )
    //     }, 1000);
    // }



    return (
        <div>


            {/* {headings} */}



            {/* {headings.map(item =>
                <div>
                    <a href="">{item}</a>
                </div>
            )} */}



















            {/* exma One */}
            {/* {
                article.map(({ title, message }) =>
                    <div>
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <hr />
                    </div>
                )
            } */}

            {/* exam Two */}
            {/* {
                article.map(({ title, message }) =>
                    <Article title={title} message={message} />
                )
            } */}


            {/* exam three */}
            {/* {
                article.map(({ title, message }) =>
                    <div>
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <hr />
                    </div>
                )
            }
            <button onClick={handleClick}>Load More</button> */}
        </div>
    )
}

export default ExamSix
