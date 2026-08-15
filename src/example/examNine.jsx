import { Fragment, Suspense } from "react"

const ExamNine = () => {
    // StrictMode
    console.log('hello')
    return (
        // Fragment
        <Fragment>
            {/* Suspense */}
            <Suspense fallback={<p>Loading</p>}>
                <h2>Hello</h2>
            </Suspense>
        </Fragment>
    )
}

export default ExamNine
