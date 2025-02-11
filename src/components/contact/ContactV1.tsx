import btnArrow from '/assets/images/btn-arrow.svg';
import contactThumb from '/assets/images/contact.png';

const ContactV1 = () => {
    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200}>Let's <span>Connect</span></h3>
                            <p>
                                Ready to accelerate your project? Schedule a call with our team to discuss how we can help bring your vision to life. Our experts are ready to understand your goals and craft a strategy that drives results.
                            </p>
                            <div className="input-group">
                                <a 
                                    href="https://calendly.com/fr/signup" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="theme-btn" 
                                    style={{
                                        fontSize: "18px",
                                        padding: "20px 40px",
                                        marginTop: "30px"
                                    }}
                                >
                                    Book a call
                                    <img src={btnArrow} alt="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-box">
                            <img src={contactThumb} alt="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;