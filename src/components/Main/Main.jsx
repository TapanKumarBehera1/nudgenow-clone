import HeroSection from "./Components/HeroSection"
import BrandSection from "./Components/BrandSection"
import ImageAndAccordion from "./Components/ImageAndAccordion"
import ValueAndNative from "./Components/ValueAndNative"
import UserReview from "./Components/UserReview"
import EasyToIntegrate from "./Components/EasyToIntegrate"
import Connections from "./Components/Connections"
import GifAndAccordion from "./Components/GifAndAccordion"
import ExploreSection from "./Components/ExploreSection"
import LastNudge from "./Components/LastNudge"
const Main = () => {
    return (
        <div style={{ paddingTop: "70px" }}>
            <HeroSection></HeroSection>
            <BrandSection></BrandSection>
            <ValueAndNative></ValueAndNative>
            <ImageAndAccordion></ImageAndAccordion>
            <UserReview></UserReview>
            <EasyToIntegrate></EasyToIntegrate>
            <Connections></Connections>
            <GifAndAccordion></GifAndAccordion>
            <ExploreSection></ExploreSection>
            <LastNudge></LastNudge>
        </div>
    )
}

export default Main