import { useEffect, useState } from "react";

import "./GifAndAccordion.css"
const GifAndAccordion = () => {
    const experience = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/661fba78afefc63b0d2327c0_Choose-an-experience.gif"
    const trigger = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/662009106e6971de2b7b4d26_2.gif"
    const campaign = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/6620096201a14644c88f5ae6_4.gif"
    const audience = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/6620099c00aededea6856e36_3.gif"
    const analyze = "https://assets-global.website-files.com/64392fc35d736d7f205f3f62/662009d5327d35221e91f921_5.gif"




    const [selectedAccordionGif, setSelectedAccordionGif] = useState(experience)
    const [showTwoAccordionText, setTwoAccordionText] = useState('')

    function handleTwoAccordionText(title) {
        if (title === "experience") {
            setSelectedAccordionGif(experience)
            setTwoAccordionText("experience")
        } else if (title === "trigger") {
            setSelectedAccordionGif(trigger)
            setTwoAccordionText("trigger")
        } else if (title === "campaign") {
            setSelectedAccordionGif(campaign)
            setTwoAccordionText("campaign")
        } else if (title === "audience") {
            setSelectedAccordionGif(audience)
            setTwoAccordionText("audience")
        } else if (title === "analyze") {
            setSelectedAccordionGif(analyze)
            setTwoAccordionText("analyze")
        } else {
            return;
        }
    }


    useEffect(() => {
        setSelectedAccordionGif(experience)
        setTwoAccordionText("experience")
    }, [])

    return (
        <>

            <div id="gifAndAccortdion_container">
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <h1 id="gif_box_title">Build faster, better, intuitive UX</h1>
                </div>
                <p id="gif_box_para">See how our product works</p>
                <div id="easyToIntegrate_imgTitleText_box">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={selectedAccordionGif} alt="image" style={{ width: '616px' }} />
                    </div>
                    <div className="nudge_cards_container">
                        <div onClick={() => handleTwoAccordionText("experience")} className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <h2 className="cards_title">Choose an experience</h2>
                            </div>
                            {showTwoAccordionText === "experience" && <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Start by creating a new campaign from our dashboard and choose an experience that you want to build.</p>}
                        </div>
                        <div onClick={() => handleTwoAccordionText("trigger")} className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9cb2a74562eb2f93aa9c6_pick%20a%20trigger%20icon.svg" alt="" />
                                <h2 className="cards_title">Pick a trigger</h2>
                            </div>
                            {showTwoAccordionText === "trigger" && <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Choose the trigger that will be the entry point for your chosen experience.</p>}
                        </div>
                        <div onClick={() => handleTwoAccordionText("campaign")} className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9cb9516eb7681935b778c_configure%20campaign%20icon.svg" alt="" />
                                <h2 className="cards_title">Configure campaign</h2>
                            </div>
                            {showTwoAccordionText === "campaign" && <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Set up rules, tasks, and designs and configure rewards for specific events.</p>}
                        </div>
                        <div onClick={() => handleTwoAccordionText("audience")} className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9343bd636c895dbfb5094_user%20behavior%20icon.png" alt="" />
                                <h2 className="cards_title">Pick an audience</h2>
                            </div>
                            {showTwoAccordionText === "audience" && <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Leverage user segmentation & import cohorts from analytics tools using custom webhooks.</p>}
                        </div>
                        <div onClick={() => handleTwoAccordionText("analyze")} className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9cad704b5e169c9ea904a_launch%20and%20analyze%20icon.png" alt="" />
                                <h2 className="cards_title">Launch and analyze</h2>
                            </div>
                            {showTwoAccordionText === "analyze" && <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Launch your campaign and track data and impacts in the reports section in real-time to make data-driven decisions.</p>}
                        </div>

                    </div>
                </div>
            </div>




            {/* // for mobile */}
            <div id="gifAndAccortdion_container_mobile">
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <h1 id="gif_box_title">Build faster, better, intuitive UX</h1>
                </div>
                <p id="gif_box_para">See how our product works</p>
                <div id="easyToIntegrate_imgTitleText_box">
                    <div className="nudge_cards_container">
                        <div className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <h2 className="cards_title">Choose an experience</h2>
                            </div>
                            <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Start by creating a new campaign from our dashboard and choose an experience that you want to build.</p>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={experience} alt="image" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9cb2a74562eb2f93aa9c6_pick%20a%20trigger%20icon.svg" alt="" />
                                <h2 className="cards_title">Pick a trigger</h2>
                            </div>
                            <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Choose the trigger that will be the entry point for your chosen experience.</p>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={trigger} alt="image" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9cb9516eb7681935b778c_configure%20campaign%20icon.svg" alt="" />
                                <h2 className="cards_title">Configure campaign</h2>
                            </div>
                            <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Set up rules, tasks, and designs and configure rewards for specific events.</p>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={campaign} alt="image" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9343bd636c895dbfb5094_user%20behavior%20icon.png" alt="" />
                                <h2 className="cards_title">Pick an audience</h2>
                            </div>
                            <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Leverage user segmentation & import cohorts from analytics tools using custom webhooks.</p>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={audience} alt="image" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="nudge_cards" style={{ cursor: "pointer" }}>
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b9cad704b5e169c9ea904a_launch%20and%20analyze%20icon.png" alt="" />
                                <h2 className="cards_title">Launch and analyze</h2>
                            </div>
                            <p className="cards_title_text" style={{ marginBottom: "1rem" }}>Launch your campaign and track data and impacts in the reports section in real-time to make data-driven decisions.</p>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={analyze} alt="image" style={{ width: "100%" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GifAndAccordion