import "./HeroSection.css"
const HeroSection = () => {
    return (
        <section className="herosection_container">
            <div className="hero_section_box">
            <div style={{width:"100%"}}>
                    <h1 className="hero-font">Change the way you build user experiences</h1>
                   <div className="para_box">
                    <p className="hero_para">A platform for product and growth teams to build native UX to activate, retain, and understand users, without any dev effort.</p>
                   </div>
                    <div className="hero_btn_box">
                        <button className="hero_takeATour_btn">Take a tour</button>
                        <button className="hero_bookADemo_btn">Book a demo</button>
                    </div>
                </div>
                <div style={{width:"100%"}}>
                    <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/66349eebfc4b196c61330d04_hero-image.webp" alt="image" id="hero_img"  width={"100%"}/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection