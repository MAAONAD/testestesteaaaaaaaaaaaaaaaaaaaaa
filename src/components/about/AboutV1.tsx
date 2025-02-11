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
                        Founded on the drive for innovation, impact, and precision, getMotion is a team of forward-thinkers committed to pushing projects further and creating motion that stands out...
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