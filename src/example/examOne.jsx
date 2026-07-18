// default export
import AboutMe from "./../components/AboutMe"
// import Footer from "./../components/Footer"
// import Header from "./../components/Header"
import Hello from "./../components/Hello"
import Main from "./../components/Main"
import Navbar from "./../components/Navbar"
import Product from "./../components/Product"
import Slider from "./../components/Slider"

// named export
import { Header, Footer } from "./../components/Components"
import Item, { ItemTwo } from "../components/Export"

const ExamOne = () => {
    return (
        <div>
            {/* exam One */}
            {/* <Hello /> */}


            {/* exam Two */}
            {/* <div>
                <Header />
                <Main />
                <Footer />
            </div> */}

            {/* exam Three */}
            {/* <div>
                <Header />
                <AboutMe />
                <Footer />
            </div> */}

            {/* exam Four */}
            {/* <div>
                <Navbar />
                <Slider />
                <Product />
                <Footer />
            </div> */}

            {/* exam Five */}
            {/* <div>
                <Header />
                <Footer />
            </div> */}

            {/* exam Six */}
            {/* <div>
                <Item />
                <ItemTwo />
            </div> */}
        </div>
    )
}

export default ExamOne
