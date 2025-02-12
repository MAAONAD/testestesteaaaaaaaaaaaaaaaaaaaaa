import btnArrow from "/assets/images/btn-arrow.svg"
import footerBigLogo from "/assets/images/footer-big-logo.png"
import { Link } from "react-router-dom";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>getMotion</h4>
                                    <p>We drive next-level success through strategic KOL partnerships and innovative solutions. We team up with ambitious projects and influential voices to spark lasting impact in every campaign.</p>
                                </div>
                                <div className="copyright">
                                    &copy; {(new Date().getFullYear())} ALL RIGHTS RESERVED
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>REACH OUT TO US</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} className="with-border">Need motion?</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} className="with-border"> We got it.</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="theme-btn">
                                        {`Let's Connect`}
                                        <img src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>Social</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="https://x.com/getMotioon" target="_blank">
                                                <img src={btnArrow} alt="icon" /> X/Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://x.com/getMotioon" target="_blank">
                                                <img src={btnArrow} alt="icon" /> Discord
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    BASED IN LONDON, UK
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <img data-aos="slide-up" data-aos-duration={700} src={footerBigLogo} alt="logo" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
