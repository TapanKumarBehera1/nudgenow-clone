import { LuChevronRightCircle } from "react-icons/lu";
import "./ImageAndAccordion.css";
import { useEffect, useState } from "react";

const VideoAndAccordion = () => {
    const storiesPhoto = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/66236ddc30166d6154e0541f_stories%20and%20videos%20drop-down.webp"
    const storiesPhotoMobile = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c444ca472c5aa5239a2962_stories%20and%20videos%20drop-down-min.webp"
    const nudgesPhoto = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c445f60746d85958b299cb_nudges%20drop-down2-min.png"
    const gamificationPhoto = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/6617e6a1701cd5012189f93d_gamification%20drop-down2%20compressed.webp"
    const gamezonePhoto = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c444cae5bbed011c10d402_game%20zone%20drop-down-min.webp"
    const surveysPhoto = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c444cac5f01ececabbc566_surveys%20drop-down-min.webp"

    const [selectedAccordionImage, setSelectedAccordionImage] = useState(storiesPhoto)
    const [showAccordionText, setAccordionText] = useState('')

    function handlePhotoAndText(title) {
        if (title === "stories") {
            setSelectedAccordionImage(storiesPhoto)
            setAccordionText("stories")
        } else if (title === "nudges") {
            setSelectedAccordionImage(nudgesPhoto)
            setAccordionText("nudges")
        } else if (title === "gamification") {
            setSelectedAccordionImage(gamificationPhoto)
            setAccordionText("gamification")
        } else if (title === "gamezone") {
            setSelectedAccordionImage(gamezonePhoto)
            setAccordionText("gamezone")
        } else if (title === "survey") {
            setSelectedAccordionImage(surveysPhoto)
            setAccordionText("survey")
        } else {
            return;
        }
    }
    useEffect(() => {
        setSelectedAccordionImage(storiesPhoto)
        setAccordionText("stories")
    }, [])

    return (
        <>
            <div className="firstAccordion_container">
                <h1 className="most_user_text">Most user journeys are boring, yours doesn't have to be</h1>
                <p className="img_accordion_para">Explore our modules- there’s something for everyone.</p>
                <div className="first_accordion_container">
                    <div className="accordion_container_box">
                        <div onClick={() => handlePhotoAndText("stories")} className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <div className="accordion_title">Stories & Videos</div>
                            </div>
                            {showAccordionText === "stories" && <div className="hidden_elements-box">
                                <div className="accordion_text">Create immersive, easy-to-digest stories and PiP videos to communicate relevant information within your product and keep your users engaged.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Drive conversions and purchases.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Reduce time-to-value.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost engagement and stickiness.</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div onClick={() => handlePhotoAndText("nudges")} className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61a5d0e4b418a92d2aaad_nudges%20icon.png" alt="" />
                                <div className="accordion_title">Nudges</div>
                            </div>
                            {showAccordionText === "nudges" && <div className="hidden_elements-box">
                                <div className="accordion_text">Build contextual, interactive onboarding experiences to boost product adoption and get users to the aha moment faster.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Improve user onboarding and activation.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Drive feature adoption and reduce time-to-value.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase retention rates.</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div onClick={() => handlePhotoAndText("gamification")} className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61a7675dad614864a2236_gamification%20icon.png" alt="" />
                                <div className="accordion_title">Gamification & Rewards</div>
                            </div>
                            {showAccordionText === "gamification" && <div className="hidden_elements-box">
                                <div className="accordion_text">Drive revenue and increase conversions by gamifying user journeys through challenges, and streaks, and incentivize users with rewards like coupons, and scratch cards.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost conversion and drive repeat orders.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Reactivative users and improve LTV.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase average time spent per user.</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div onClick={() => handlePhotoAndText("gamezone")} className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61a8be182d0b35b35184d_game%20zone%20icon.png" alt="" />
                                <div className="accordion_title">Game Zone</div>
                            </div>
                            {showAccordionText === "gamezone" && <div className="hidden_elements-box">
                                <div className="accordion_text">Engage your users with hyper casual games like spin the wheel, chess, 8 ball pool, tambola, and carrom.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Improve engagement.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost repeat user activity.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase average time spent per user.</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div onClick={() => handlePhotoAndText("survey")} className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61c2bc435a90ffe2b3ed7_surveys%20icon2.png" alt="" />
                                <div className="accordion_title">Surveys</div>
                            </div>
                            {showAccordionText === "survey" && <div className="hidden_elements-box">
                                <div className="accordion_text">Engage your users with hyper casual games like spin the wheel, chess, 8 ball pool, tambola, and carrom.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Improve engagement.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost repeat user activity.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase average time spent per user.</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="accordion_photo">
                        <img src={selectedAccordionImage} alt="image" width={'100%'} />
                    </div>

                </div>
            </div>




            {/* // for mobile */}
            <div className="firstAccordion_container_mobile ">
                <h1 className="most_user_text">Most user journeys are boring, yours doesn't have to be</h1>
                <p className="img_accordion_para">Explore our modules- there’s something for everyone.</p>
                <div className="first_accordion_container">
                    <div className="accordion_container_box">
                        <div className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <div className="accordion_title">Stories & Videos</div>
                            </div>
                            <div className="hidden_elements-box">
                                <div className="accordion_text">Create immersive, easy-to-digest stories and PiP videos to communicate relevant information within your product and keep your users engaged.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Drive conversions and purchases.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Reduce time-to-value.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost engagement and stickiness.</div>
                                    </div>
                                </div>
                                <div className="accordion_photo">
                                    <img src={storiesPhotoMobile} alt="image" width={'100%'} />
                                </div>
                            </div>
                        </div>
                        <div className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61a5d0e4b418a92d2aaad_nudges%20icon.png" alt="" />
                                <div className="accordion_title">Nudges</div>
                            </div>
                            <div className="hidden_elements-box">
                                <div className="accordion_text">Build contextual, interactive onboarding experiences to boost product adoption and get users to the aha moment faster.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Improve user onboarding and activation.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Drive feature adoption and reduce time-to-value.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase retention rates.</div>
                                    </div>
                                </div>
                                <div className="accordion_photo">
                                    <img src={nudgesPhoto} alt="image" width={'100%'} />
                                </div>
                            </div>
                        </div>
                        <div className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61a7675dad614864a2236_gamification%20icon.png" alt="" />
                                <div className="accordion_title">Gamification & Rewards</div>
                            </div>
                            <div className="hidden_elements-box">
                                <div className="accordion_text">Drive revenue and increase conversions by gamifying user journeys through challenges, and streaks, and incentivize users with rewards like coupons, and scratch cards.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost conversion and drive repeat orders.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Reactivative users and improve LTV.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase average time spent per user.</div>
                                    </div>
                                </div>
                                <div className="accordion_photo">
                                    <img src={gamificationPhoto} alt="image" width={'100%'} />
                                </div>
                            </div>
                        </div>
                        <div className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61a8be182d0b35b35184d_game%20zone%20icon.png" alt="" />
                                <div className="accordion_title">Game Zone</div>
                            </div>
                            <div className="hidden_elements-box">
                                <div className="accordion_text">Engage your users with hyper casual games like spin the wheel, chess, 8 ball pool, tambola, and carrom.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Improve engagement.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost repeat user activity.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase average time spent per user.</div>
                                    </div>
                                </div>
                                <div className="accordion_photo">
                                    <img src={gamezonePhoto} alt="image" width={'100%'} />
                                </div>
                            </div>
                        </div>
                        <div className="firstAccordion_container_box">
                            <div className="accorion_titleImage">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65c61c2bc435a90ffe2b3ed7_surveys%20icon2.png" alt="" />
                                <div className="accordion_title">Surveys</div>
                            </div>
                            <div className="hidden_elements-box">
                                <div className="accordion_text">Engage your users with hyper casual games like spin the wheel, chess, 8 ball pool, tambola, and carrom.</div>
                                <div className="image_accordion_box">
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Improve engagement.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Boost repeat user activity.</div>
                                    </div>
                                    <div className="accordion_options_container">
                                        <LuChevronRightCircle className="option_icon" />
                                        <div className="accordion_options">Increase average time spent per user.</div>
                                    </div>
                                </div>
                                <div className="accordion_photo">
                                    <img src={surveysPhoto} alt="image" width={'100%'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoAndAccordion




