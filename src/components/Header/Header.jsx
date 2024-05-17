
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css"
import { useContext, useState } from "react";
import ProductDropDown from "./ProductDropDown";
import ResourcesDropDown from "./ResourcesDropDown";
import Store from "../../ContextStore/Store";

const Header = () => {
    const { showNavigationLinks, setShowNavigationLinks } = useContext(Store)

    let [showProductDropDown, setShowProductDropDown] = useState(false)
    let [showResourcesDropDown, setShowResourcesDropDown] = useState(false)

    function handleMouseMoveCapture(e, two) {
        if (!two) {
            setShowProductDropDown(true)
        } else {
            setShowResourcesDropDown(two)
        }
    }
    function handleMouseOutForProduct(e) {
        setShowProductDropDown(false)
        setShowResourcesDropDown(false)
    }

// this is for 3dot menu
    function handleShowNavigationLinks() {
        setShowNavigationLinks(!showNavigationLinks)
    }
    return (
        <>
            <header>
                <div id="header_container">
                    <div id="header_logo_text-box">
                        <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/6439327b5d736d104c5f6259_logomark.webp" width={32} alt="logo" />
                        <div id="header_logo_text">Nudge</div>
                    </div>
                    <nav className="header_nav">
                        <div id="header_nav_left">
                            <div id="header_nav_left_nav1" onMouseMoveCapture={(e) => handleMouseMoveCapture(e)} onMouseOut={(e) => handleMouseOutForProduct(e)}>Product <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><IoIosArrowDown style={{ fontSize: "20px", rotate: showProductDropDown ? "180deg" : "", transition: "linear 0.15s" }} /></span> </div>
                            {showProductDropDown && <ProductDropDown />}
                            <div id="header_nav_left_nav2">How it works</div>
                            <div id="header_nav_left_nav3" onMouseMoveCapture={(e) => handleMouseMoveCapture(e, "two")} onMouseOut={(e) => handleMouseOutForProduct(e)}>Resources <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><IoIosArrowDown style={{ fontSize: "20px", rotate: showResourcesDropDown ? "180deg" : "", transition: "linear 0.15s" }} /></span> </div>
                            {showResourcesDropDown === "two" && <ResourcesDropDown />}
                        </div>
                        <div id="nav_btn_container">
                            <div id="takeATour_btn">Take a tour</div>
                            <div id="bookADemo_btn">Book a demo</div>
                        </div>
                    </nav>
                    <div id="menu" onClick={handleShowNavigationLinks}>
                        <div className="div_menu">{""}</div>
                        <div className="div_menu">{""}</div>
                        <div className="div_menu">{""}</div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header