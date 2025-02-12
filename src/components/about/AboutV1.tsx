import unionIcon from "/assets/images/Union.svg"
import AnimatedText from "../animated/AnimatedText"
import FactData from "../../jsonData/fact/FactData.json"
import SingleFactV1 from "./SingleFactV1"

const AboutV1 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <img src={unionIcon} alt="About Us" /> ABOUT US
                        </span>
                        <AnimatedText>
                        Founded on a passion for innovation, impact, and precision, getMotion is a collective of forward-thinkers dedicated to pushing projects further and crafting experiences that truly stand out. Our approach is built on four pillars, the cornerstone of our methodology.
                        </AnimatedText>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV1 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;
