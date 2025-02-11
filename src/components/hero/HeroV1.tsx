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
                                <p>“At getMotion, we believe that momentum drives success. As a full-service creative agency, we specialize in propelling projects forward and crafting dynamic motion that captures attention.</p>
                                <p>Whether it's amplifying a brand, designing seamless digital experiences, or executing high-impact marketing campaigns, we ensure every project moves with purpose and reaches the right audience.“</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>getMotion</h4>
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
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;