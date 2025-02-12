import btnArrowIcon from "/assets/images/btn-arrow.svg";
import { Link } from "react-router-dom";

const HeroV1 = () => {
    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            <video loop muted autoPlay>
                                <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>“At getMotion, we harness momentum as the engine behind success. As a full-service creative agency, we specialize in accelerating projects and crafting engaging, innovative experiences that capture attention. </p>
                                <p>Whether you're looking to elevate your brand, create seamless digital interactions, or launch high-impact marketing campaigns, we ensure every project advances with purpose and connects with the right audience.“</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>We believe that momentum drives success.</h4>
                                <span></span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Motion</h2>
                                <h2>Meets Impact</h2>
                            </div>

                            {/* Button Section */}
                            <a 
                              href="https://cal.com/getmotion/30min" 
                              className="theme-btn" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                                {`Let's book a call`}
                                <img src={btnArrowIcon} alt="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;
