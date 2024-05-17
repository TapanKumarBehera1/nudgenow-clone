import { ImBook } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineInsertComment } from "react-icons/md";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { GiClick } from "react-icons/gi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { MdOutlineWidgets } from "react-icons/md";
import { MdOutlinePlayCircle } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import "./MenuBody.css"
const MenuBody = () => {
    const [productMenuDropDown, setProductMenuDropDown] = useState(false)
    const [resoucesMenuDropDown, setResoucesMenuDropDown] = useState(false)

    function menu3ProductDropDown() {
        setProductMenuDropDown(!productMenuDropDown)
    }
    function meanu3ResoucesDropDown() {
        setResoucesMenuDropDown(!resoucesMenuDropDown)
    }
    return (
        <nav id="threeDot_nav">
            <div id="menuBody">
                <div>
                    <div onClick={menu3ProductDropDown} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>Product</div>
                        <div style={{ paddingRight: "1rem" }}><IoIosArrowDown style={{ fontSize: "20px", rotate: productMenuDropDown ? "180deg" : "", transition: "linear 0.15s" }} /></div>
                    </div>


                    {productMenuDropDown &&
                        <div id="prd_dorpdown_dotMenu">
                            <div>
                                <div className="dw_title">Use Cases</div>
                                <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><LuUsers className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">User Onboarding & Activation</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Make sign-up easy and guide new users to their "aha moment" quickly.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><MdOutlineWidgets className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Feature Adoption</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Drive feature adoption and announce new product offerings.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><BsStars className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Engagement</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Craft sticky user experiences that make users come back.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><FaMoneyBills className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Conversion & Monetization</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Convert better by personalizing user journeys to drive higher revenues and lifetime value.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><BsEmojiLaughing className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">User Research & Insights</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Collect actionable feedback from users.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="dw_title">Modules</div>
                                <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><MdOutlinePlayCircle className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Stories & Videos</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Create easy to consume content to convert better increase purchases.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><GiClick className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Nudges</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Nudge users the right way and drive product adoption and user activation.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><IoGameController className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Gamification & Rewards</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Put engagement into auto-pilot by gamifying user journeys.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><PiMapPinSimpleAreaBold className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Game Zone</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Engage users through casual games including Chess, Pool, Carrom, Tambola, and more.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nudge-dropdown-box">
                                        <div className="nudge-dropdown-box-two">
                                            <div><MdOutlineInsertComment className="nudge_dropdown_icons" /></div>
                                            <div className="nudge_dropdown_icon-title-box">
                                                <div className="nudge_dropdown_icon-title">Surveys</div>
                                                <div className="nudge_dropdown_icon-text menu_nav-text">Understand your audience, make informed decisions, and iterate your product.</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>}
                </div>
                <div>How it works</div>

                <div>
                    <div onClick={meanu3ResoucesDropDown} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <div> Resources</div>
                        <div style={{ paddingRight: "1rem" }}><IoIosArrowDown style={{ fontSize: "20px", rotate: resoucesMenuDropDown ? "180deg" : "", transition: "linear 0.15s" }} /></div>
                    </div>
                    {resoucesMenuDropDown && <div style={{ display: "flex", justifyContent: "center", flexDirection:"column",paddingTop: "1rem" }}>
                        <div className="dw_title">Resources</div>
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
                            <div className="nudge-dropdown-box">
                                <div className="nudge-dropdown-box-two">
                                    <div><ImBook className="nudge_dropdown_icons" /></div>
                                    <div className="nudge_dropdown_icon-title-box">
                                        <div className="nudge_dropdown_icon-title">Blogs</div>
                                        <div className="nudge_dropdown_icon-text menu_nav-text">Content for product and growth teams to sort out their UX problems.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="nudge-dropdown-box">
                                <div className="nudge-dropdown-box-two">
                                    <div><MdMenuBook className="nudge_dropdown_icons" /></div>
                                    <div className="nudge_dropdown_icon-title-box">
                                        <div className="nudge_dropdown_icon-title">Glossary</div>
                                        <div className="nudge_dropdown_icon-text menu_nav-text">A to Z of user experiences. This glossary will run you through everything related to UX, with detailed examples and definitions.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column", gap: ".5rem" }}>
                    <button className="bookADemo_btn">Book a demo</button>
                    <button className="takeATour_btn">Take a tour</button>
                </div>
            </div>
        </nav >
    )
}

export default MenuBody