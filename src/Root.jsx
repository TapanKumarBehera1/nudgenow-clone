import ThreeDotMenu from "./components/3DotNav/ThreeDotMenu"
import Store from "./ContextStore/Store"
import { useContext } from "react"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Header from "./components/Header/Header"
const Root = () => {
    const { showNavigationLinks, setShowNavigationLinks } = useContext(Store)
    return (
        <>
            {showNavigationLinks ?
                <ThreeDotMenu></ThreeDotMenu>
                : <>
                    <Header></Header>
                    <Main></Main>
                    <Footer></Footer>
                </>
            }
        </>
    )
}

export default Root