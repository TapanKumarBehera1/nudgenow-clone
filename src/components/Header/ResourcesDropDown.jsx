import { ImBook } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import "./DropDown.css"
const ResourcesDropDown = () => {
    return (
        <>
            <div className="nudge-dropdown-container-two">
                <div>
                    <div className="dw_title">Resources</div>
                    <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><ImBook className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Blogs</div>
                                    <div className="nudge_dropdown_icon-text">Content for product and growth teams to sort out their UX problems.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><MdMenuBook className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Glossary</div>
                                    <div className="nudge_dropdown_icon-text">A to Z of user experiences. This glossary will run you through everything related to UX, with detailed examples and definitions.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default ResourcesDropDown