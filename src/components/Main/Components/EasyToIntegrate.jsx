import "./EasyToIntegrate.css"
const EasyToIntegrate = () => {
    return (
        <div id="easyToIntegrate_container">
            <div id="easyToIntegrate_box">
                <h1 id="easyToIntegrate_title">Easy to integrate, intuitive to use</h1>
                <p id="easyToIntegrate_text">Install our APIs and SDKs in less than 15 minutes, with dashboards that say a lot more than just graphs.</p>
                <div id="easyToIntegrate_imgTitleText_box">
                    <div className="nudge_cards_container">
                        <div className="nudge_cards">
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <h2 className="cards_title">APIs</h2>
                            </div>
                            <p className="cards_title_text">Eliminate complicated integrations with lightweight APIs.</p>
                        </div>
                        <div className="nudge_cards">
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <h2 className="cards_title">UI SDKs</h2>
                            </div>
                            <p className="cards_title_text">Customizable UI SDKs give you ready-to-use best practices and let you get started fast.</p>
                        </div>
                        <div className="nudge_cards">
                            <div className="nudge_cards_img_box">
                                <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/65b403dde6a1694ccc012ed2_storiesand%20videos%20icon.png" alt="" />
                                <h2 className="cards_title">Headless SDKs</h2>
                            </div>
                            <p className="cards_title_text">Freedom and flexibility to build a system that aligns perfectly with your specific needs and requirements.</p>
                        </div>

                    </div>
                    <img id="easyToIntegrateImg" src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/64ffd8080f00c4757fba11f6_code-p-1080.png" alt="image" style={{maxWidth:"50%"}}/>
                </div>
            </div>
        </div>
    )
}

export default EasyToIntegrate