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
import "./DropDown.css"
const ProductDropDown = () => {
    return (
        <>
            <div className="nudge-dropdown-container">
                <div>
                    <div className="dw_title">Use Cases</div>
                    <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><LuUsers className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">User Onboarding & Activation</div>
                                    <div className="nudge_dropdown_icon-text">Make sign-up easy and guide new users to their "aha moment" quickly.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><MdOutlineWidgets className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Feature Adoption</div>
                                    <div className="nudge_dropdown_icon-text">Drive feature adoption and announce new product offerings.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><BsStars className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Engagement</div>
                                    <div className="nudge_dropdown_icon-text">Craft sticky user experiences that make users come back.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><FaMoneyBills className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Conversion & Monetization</div>
                                    <div className="nudge_dropdown_icon-text">Convert better by personalizing user journeys to drive higher revenues and lifetime value.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><BsEmojiLaughing className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">User Research & Insights</div>
                                    <div className="nudge_dropdown_icon-text">Collect actionable feedback from users.</div>
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
                                    <div className="nudge_dropdown_icon-text">Create easy to consume content to convert better increase purchases.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><GiClick className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Nudges</div>
                                    <div className="nudge_dropdown_icon-text">Nudge users the right way and drive product adoption and user activation.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><IoGameController className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Gamification & Rewards</div>
                                    <div className="nudge_dropdown_icon-text">Put engagement into auto-pilot by gamifying user journeys.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><PiMapPinSimpleAreaBold className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Game Zone</div>
                                    <div className="nudge_dropdown_icon-text">Engage users through casual games including Chess, Pool, Carrom, Tambola, and more.</div>
                                </div>
                            </div>
                        </div>
                        <div className="nudge-dropdown-box">
                            <div className="nudge-dropdown-box-two">
                                <div><MdOutlineInsertComment className="nudge_dropdown_icons" /></div>
                                <div className="nudge_dropdown_icon-title-box">
                                    <div className="nudge_dropdown_icon-title">Surveys</div>
                                    <div className="nudge_dropdown_icon-text">Understand your audience, make informed decisions, and iterate your product.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductDropDown