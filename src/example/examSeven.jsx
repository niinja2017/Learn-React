import { useState } from "react"

const ExamSeven = () => {

    const [article, setArticle] = useState([
        {
            title: 'JavaScript',
            message: 'this is is JavaScript article message'
        },
        {
            title: 'Nodejs',
            message: 'this is is Nodejs article message'
        },
    ])
    const [loading, setLoading] = useState(false)


    const LoadMoreHandle = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setArticle([
                ...article,
                {
                    title: 'PHP',
                    message: 'this is a PhP article message'
                }
            ])
        }, 1000);
    }

    const auth = true

    if (!auth) {
        return (
            <div>
                <h1>You Must Login First</h1>
            </div>
        )
    }


    return (
        <div>
            {
                article.map(({ title, message }) =>
                    <div>
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <hr />
                    </div>
                )
            }
            <button onClick={LoadMoreHandle}>{loading ? 'loading...' : 'Load More'}</button>
        </div>
    )
}

export default ExamSeven
