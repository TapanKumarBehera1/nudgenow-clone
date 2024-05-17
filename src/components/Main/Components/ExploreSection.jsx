import { IoArrowForwardSharp } from "react-icons/io5";
import "./ExploreSection.css"
const ExploreSection = () => {
    return (
        <div id="explore_container">
            <h1 id="explore_title">Explore use cases</h1>
            <p id="explore_text">Everything user experience: Strategies modern teams use to grow their user lifetime value.</p>
            <div id="img_text_container">
                <div className="img-text-box">
                    <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/64f731f6a51c5cdb65724184_use%20case%203.png" alt="image" width={"100%"} />
                    <h2 className="img-text-box-title">User onboarding & Activation</h2>
                    <p className="img-text-box-text">Drive feature adoption & reduce friction while onboarding new users to your platform.</p>
                    <div className="learn_more_box">
                        <a>Learn more</a>
                        <IoArrowForwardSharp/>
                    </div>
                </div>

                <div className="img-text-box">
                    <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/64f72cfe6f656146addf11cd_use%20case%201-p-1080.png" alt="image" width={"100%"} />
                    <h2 className="img-text-box-title">Engagement </h2>
                    <p className="img-text-box-text">Craft sticky user experiences that foster retention and make users come back.</p>
                    <div className="learn_more_box">
                        <a>Learn more</a>
                        <IoArrowForwardSharp/>
                    </div>
                </div>
                <div className="img-text-box">
                    <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/64f72fd6131025fc7b4beda8_use%20case%202-p-1080.png" alt="image" width={"100%"} />
                    <h2 className="img-text-box-title">User Research & Insights</h2>
                    <p className="img-text-box-text">Collect actionable feedback from users and understand user behavior.</p>
                    <div className="learn_more_box">
                        <a>Learn more</a>
                        <IoArrowForwardSharp/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExploreSection